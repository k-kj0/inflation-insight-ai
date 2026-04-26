import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/api")({
  head: () => ({
    meta: [
      { title: "API — InflationIQ" },
      {
        name: "description",
        content:
          "REST API for fintech apps. Embed InflationIQ forecasts and Claude-powered analysis into your product.",
      },
      { property: "og:title", content: "InflationIQ API" },
      {
        property: "og:description",
        content: "One endpoint, full economic intelligence. Built for fintech.",
      },
    ],
  }),
  component: ApiPage,
});

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
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-5xl px-5 py-20">
        <div className="mb-12 max-w-3xl">
          <div className="font-mono text-[11px] uppercase tracking-widest text-signal">
            For builders
          </div>
          <h1 className="mt-3 font-display text-5xl font-medium tracking-tight text-balance md:text-6xl">
            One endpoint. Full economic intelligence.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Pipe InflationIQ into any fintech app — neobanks, robo-advisors, treasury
            tools, expense forecasters. Available on the Business plan.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Request
            </div>
            <pre className="overflow-x-auto rounded-lg border border-border bg-surface p-4 font-mono text-[12px] leading-relaxed text-foreground">
              {SAMPLE_REQUEST}
            </pre>
          </div>
          <div>
            <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Response
            </div>
            <pre className="overflow-x-auto rounded-lg border border-border bg-surface p-4 font-mono text-[12px] leading-relaxed text-foreground">
              {SAMPLE_RESPONSE}
            </pre>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-4">
          <Link
            to="/pricing"
            className="rounded-md bg-primary px-5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-widest text-primary-foreground hover:glow"
          >
            See pricing
          </Link>
          <Link
            to="/predictor"
            className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground"
          >
            Try the dashboard →
          </Link>
        </div>
      </section>
    </div>
  );
}
