import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — InflationIQ" },
      {
        name: "description",
        content:
          "Free tier: 3 AI analyses/day. Pro $29/mo: unlimited + portfolio impact. Business: API access for fintech apps.",
      },
      { property: "og:title", content: "InflationIQ Pricing" },
      {
        property: "og:description",
        content: "Simple plans for individuals and fintech teams. Start free.",
      },
    ],
  }),
  component: Pricing,
});

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    blurb: "Try the intelligence layer.",
    features: [
      "3 AI analyses per day",
      "All 8 economies & commodities",
      "12-month forecast horizon",
      "Risk score & investment signal",
    ],
    cta: "Start free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    blurb: "Built for analysts & founders.",
    features: [
      "Unlimited AI analyses",
      "24-month horizon + scenario stress tests",
      "Portfolio impact analysis",
      "Export to PDF & CSV",
      "Priority Claude inference",
    ],
    cta: "Go Pro",
    highlight: true,
  },
  {
    name: "Business",
    price: "$499",
    period: "per month",
    blurb: "For fintech apps & teams.",
    features: [
      "Everything in Pro",
      "REST API access (10k calls/mo)",
      "Webhook alerts on regime shifts",
      "Custom country baselines",
      "SLA + dedicated support",
    ],
    cta: "Talk to us",
    highlight: false,
  },
];

function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-14 max-w-2xl text-center mx-auto">
          <div className="font-mono text-[11px] uppercase tracking-widest text-signal">
            Pricing
          </div>
          <h1 className="mt-3 font-display text-5xl font-medium tracking-tight text-balance md:text-6xl">
            Free for the curious. Priced for the serious.
          </h1>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative bg-background p-7 ${
                t.highlight ? "ring-1 ring-signal ring-inset" : ""
              }`}
            >
              {t.highlight && (
                <div className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-signal px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest text-signal-foreground">
                  <Sparkles className="h-2.5 w-2.5" />
                  Most popular
                </div>
              )}
              <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                {t.name}
              </div>
              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="font-display text-5xl font-medium">{t.price}</span>
                <span className="font-mono text-xs text-muted-foreground">/ {t.period}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{t.blurb}</p>
              <ul className="mt-6 space-y-2.5">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm text-foreground/90">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-signal" strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/predictor"
                className={`mt-7 block rounded-md py-2.5 text-center font-mono text-[11px] font-semibold uppercase tracking-widest transition-all ${
                  t.highlight
                    ? "bg-primary text-primary-foreground hover:glow"
                    : "border border-border bg-surface-elevated text-foreground hover:border-signal"
                }`}
              >
                {t.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Demo project · pricing illustrative · no payment processing wired
        </p>
      </section>
    </div>
  );
}
