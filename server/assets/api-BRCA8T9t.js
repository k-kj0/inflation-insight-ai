import { V as jsxRuntimeExports } from "./worker-entry-C6G48CJd.js";
import { L as Link } from "./router-9K8hjxIZ.js";
import { S as SiteHeader } from "./SiteHeader-DNF5wM7S.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const SAMPLE_REQUEST = `curl https://api.inflationiq.dev/v1/predict \\
  -H "Authorization: Bearer iq_live_xxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "country": "US",
    "commodity": "oil",
    "horizon": 12
  }'`;
const SAMPLE_RESPONSE = `{
  "forecast": {
    "current": 2.90,
    "predicted": 3.42,
    "delta": 0.52,
    "horizon_months": 12,
    "confidence_interval": [2.81, 4.03]
  },
  "risk": {
    "score": 64,
    "volatility": 3.08,
    "regime": "elevated"
  },
  "signal": {
    "action": "HEDGE",
    "rationale": "Energy-driven CPI re-acceleration risk.",
    "instruments": ["TIPS", "USO", "XLE"]
  },
  "narrative": "Crude price stickiness coupled with..."
}`;
function ApiPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-5xl px-5 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[11px] uppercase tracking-widest text-signal", children: "For builders" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-display text-5xl font-medium tracking-tight text-balance md:text-6xl", children: "One endpoint. Full economic intelligence." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-lg text-muted-foreground", children: "Pipe InflationIQ into any fintech app — neobanks, robo-advisors, treasury tools, expense forecasters. Available on the Business plan." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: "Request" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "overflow-x-auto rounded-lg border border-border bg-surface p-4 font-mono text-[12px] leading-relaxed text-foreground", children: SAMPLE_REQUEST })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: "Response" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "overflow-x-auto rounded-lg border border-border bg-surface p-4 font-mono text-[12px] leading-relaxed text-foreground", children: SAMPLE_RESPONSE })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/pricing", className: "rounded-md bg-primary px-5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-widest text-primary-foreground hover:glow", children: "See pricing" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/predictor", className: "font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground", children: "Try the dashboard →" })
      ] })
    ] })
  ] });
}
export {
  ApiPage as component
};
