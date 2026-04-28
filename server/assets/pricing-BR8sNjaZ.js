import { T as jsxRuntimeExports } from "./worker-entry-BGTTXPO5.js";
import { L as Link } from "./router-CXsUoBOm.js";
import { c as createLucideIcon, S as SiteHeader } from "./SiteHeader-B-kPMEQX.js";
import { S as Sparkles } from "./sparkles-Bww9dFvZ.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode);
const tiers = [{
  name: "Free",
  price: "$0",
  period: "forever",
  blurb: "Try the intelligence layer.",
  features: ["3 AI analyses per day", "All 8 economies & commodities", "12-month forecast horizon", "Risk score & investment signal"],
  cta: "Start free",
  highlight: false
}, {
  name: "Pro",
  price: "$29",
  period: "per month",
  blurb: "Built for analysts & founders.",
  features: ["Unlimited AI analyses", "24-month horizon + scenario stress tests", "Portfolio impact analysis", "Export to PDF & CSV", "Priority Claude inference"],
  cta: "Go Pro",
  highlight: true
}, {
  name: "Business",
  price: "$499",
  period: "per month",
  blurb: "For fintech apps & teams.",
  features: ["Everything in Pro", "REST API access (10k calls/mo)", "Webhook alerts on regime shifts", "Custom country baselines", "SLA + dedicated support"],
  cta: "Talk to us",
  highlight: false
}];
function Pricing() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-5 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-14 max-w-2xl text-center mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[11px] uppercase tracking-widest text-signal", children: "Pricing" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-display text-5xl font-medium tracking-tight text-balance md:text-6xl", children: "Free for the curious. Priced for the serious." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3", children: tiers.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative bg-background p-7 ${t.highlight ? "ring-1 ring-signal ring-inset" : ""}`, children: [
        t.highlight && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-signal px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest text-signal-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-2.5 w-2.5" }),
          "Most popular"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[11px] uppercase tracking-widest text-muted-foreground", children: t.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-baseline gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-5xl font-medium", children: t.price }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs text-muted-foreground", children: [
            "/ ",
            t.period
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: t.blurb }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-2.5", children: t.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2.5 text-sm text-foreground/90", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mt-0.5 h-4 w-4 flex-shrink-0 text-signal", strokeWidth: 2.5 }),
          f
        ] }, f)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/predictor", className: `mt-7 block rounded-md py-2.5 text-center font-mono text-[11px] font-semibold uppercase tracking-widest transition-all ${t.highlight ? "bg-primary text-primary-foreground hover:glow" : "border border-border bg-surface-elevated text-foreground hover:border-signal"}`, children: t.cta })
      ] }, t.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-10 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: "Demo project · pricing illustrative · no payment processing wired" })
    ] })
  ] });
}
export {
  Pricing as component
};
