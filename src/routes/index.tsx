import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Globe2, Cpu, LineChart, Lock } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { Ticker } from "@/components/Ticker";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "InflationIQ — Your Personal Economic Intelligence Layer" },
      {
        name: "description",
        content:
          "AI-powered inflation forecasts, risk analysis, and investment signals. Powered by Claude. Free for individuals, API for fintech.",
      },
      { property: "og:title", content: "InflationIQ — Economic intelligence, on demand" },
      {
        property: "og:description",
        content:
          "Forecast inflation by country and commodity. Get a real Claude-powered analysis with risk narrative and investment signal in seconds.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Ticker />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
        <div className="absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-signal/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-signal" />
              Live · powered by Claude 3.5 Sonnet
            </div>
            <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-balance md:text-7xl lg:text-8xl">
              Inflation,
              <br />
              <span className="italic text-signal">decoded.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg text-muted-foreground text-balance md:text-xl">
              Pick a country, pick a commodity, get a real AI-generated forecast — with
              risk narrative, business impact, and a concrete investment signal. Built
              for analysts, founders, and the curious.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/predictor"
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-all hover:glow"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Run a free prediction
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/pricing"
                className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground"
              >
                See pricing →
              </Link>
            </div>
            <div className="mt-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              3 free analyses per day · no signup
            </div>
          </div>

          {/* Big visual stat strip */}
          <div className="mt-20 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">
            {[
              { k: "8", label: "Major economies" },
              { k: "8", label: "Commodity drivers" },
              { k: "24mo", label: "Forecast horizon" },
              { k: "<3s", label: "AI analysis" },
            ].map((s) => (
              <div key={s.label} className="bg-background p-6">
                <div className="font-display text-4xl font-medium text-signal">{s.k}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="mb-12 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-widest text-signal">
              Capability
            </div>
            <h2 className="mt-3 font-display text-4xl font-medium tracking-tight md:text-5xl">
              An economist in your pocket.
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
            {[
              {
                icon: LineChart,
                title: "Forecast curves",
                body: "Mean-reverting models with confidence intervals across 8 economies and 8 commodity drivers.",
              },
              {
                icon: Cpu,
                title: "Claude-powered analysis",
                body: "Every forecast is reasoned over by Claude 3.5 Sonnet — narrative, risks, signal, all live.",
              },
              {
                icon: Globe2,
                title: "Built for fintech",
                body: "Pro tier ships a clean REST API so your app can pipe inflation intelligence into any flow.",
              },
            ].map((f) => (
              <div key={f.title} className="bg-background p-7">
                <f.icon className="h-5 w-5 text-signal" strokeWidth={2} />
                <h3 className="mt-4 font-display text-xl font-medium">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 text-center">
          <Lock className="mx-auto h-5 w-5 text-signal" />
          <h2 className="mt-5 font-display text-4xl font-medium tracking-tight md:text-5xl text-balance">
            Your personal economic
            <br />
            <span className="italic text-signal">intelligence layer.</span>
          </h2>
          <Link
            to="/predictor"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-all hover:glow"
          >
            Open the predictor
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-8 font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:flex-row">
        <div>© 2025 InflationIQ · Synthetic forecasts for demo purposes</div>
        <div className="flex gap-5">
          <Link to="/pricing">Pricing</Link>
          <Link to="/api">API</Link>
        </div>
      </footer>
    </div>
  );
}
