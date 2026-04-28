import { _ as TSS_SERVER_FUNCTION, $ as createServerFn } from "./worker-entry-BGTTXPO5.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const analyzeInflation_createServerFn_handler = createServerRpc({
  id: "cc809242f2983b54882c1e9901d6fbce953c3ef42e351c22150d81f86577256a",
  name: "analyzeInflation",
  filename: "src/server/ai.functions.ts"
}, (opts) => analyzeInflation.__executeServer(opts));
const analyzeInflation = createServerFn({
  method: "POST"
}).inputValidator((input) => {
  if (!input || typeof input.country !== "string") {
    throw new Error("Invalid input");
  }
  return input;
}).handler(analyzeInflation_createServerFn_handler, async ({
  data
}) => {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return {
      headline: "AI service not configured",
      narrative: "ANTHROPIC_API_KEY is missing on the server.",
      riskFactors: [],
      businessImpact: "",
      investmentSignal: {
        action: "HOLD",
        rationale: "",
        instruments: []
      },
      error: "missing_key"
    };
  }
  const prompt = `You are INFLUX AI, an economist for InflationIQ. Analyze this inflation forecast and respond ONLY with valid JSON matching the schema.

Context:
- Country: ${data.country}
- Driver: ${data.commodity}
- Horizon: ${data.horizon} months
- Current YoY inflation: ${data.current}%
- Forecast YoY inflation: ${data.predicted}% (delta ${data.delta > 0 ? "+" : ""}${data.delta} pp)
- Volatility index: ${data.volatility}
- Risk score: ${data.riskScore}/100

Return JSON with this exact shape:
{
  "headline": "one punchy sentence, max 14 words",
  "narrative": "2-3 sentence macro analysis grounded in real economic dynamics",
  "riskFactors": ["3 to 4 concrete risk drivers, each under 12 words"],
  "businessImpact": "2 sentences on how this affects businesses & consumers",
  "investmentSignal": {
    "action": "BUY" | "HOLD" | "SELL" | "HEDGE",
    "rationale": "1 sentence why",
    "instruments": ["2-3 specific tickers/instruments e.g. TIPS, GLD, USO, EWZ"]
  }
}

No markdown, no preamble, just the JSON object.`;
  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 800,
        messages: [{
          role: "user",
          content: prompt
        }]
      })
    });
    if (!res.ok) {
      const txt = await res.text();
      console.error("Anthropic error:", res.status, txt);
      return {
        headline: "AI temporarily unavailable",
        narrative: `Claude API returned ${res.status}. Try again shortly.`,
        riskFactors: [],
        businessImpact: "",
        investmentSignal: {
          action: "HOLD",
          rationale: "",
          instruments: []
        },
        error: `api_${res.status}`
      };
    }
    const json = await res.json();
    const text = json?.content?.[0]?.text ?? "";
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) {
      return {
        headline: "AI returned unparseable output",
        narrative: text.slice(0, 240),
        riskFactors: [],
        businessImpact: "",
        investmentSignal: {
          action: "HOLD",
          rationale: "",
          instruments: []
        },
        error: "parse_error"
      };
    }
    const parsed = JSON.parse(match[0]);
    return parsed;
  } catch (err) {
    console.error("analyzeInflation failed:", err);
    return {
      headline: "Analysis failed",
      narrative: err instanceof Error ? err.message : "Unknown error",
      riskFactors: [],
      businessImpact: "",
      investmentSignal: {
        action: "HOLD",
        rationale: "",
        instruments: []
      },
      error: "exception"
    };
  }
});
export {
  analyzeInflation_createServerFn_handler
};
