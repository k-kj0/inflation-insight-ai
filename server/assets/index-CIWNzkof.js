import { V as jsxRuntimeExports } from "./worker-entry-C6G48CJd.js";
import { L as Link } from "./router-9K8hjxIZ.js";
import { c as createLucideIcon, S as SiteHeader } from "./SiteHeader-DNF5wM7S.js";
import { T as Ticker } from "./Ticker-BQAjdyS5.js";
import { S as Sparkles } from "./sparkles-DwhU3Gsh.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$4 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "m19 9-5 5-4-4-3 3", key: "2osh9i" }]
];
const ChartLine = createLucideIcon("chart-line", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M17 20v2", key: "1rnc9c" }],
  ["path", { d: "M17 2v2", key: "11trls" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M2 17h2", key: "7oei6x" }],
  ["path", { d: "M2 7h2", key: "asdhe0" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "M20 17h2", key: "1fpfkl" }],
  ["path", { d: "M20 7h2", key: "1o8tra" }],
  ["path", { d: "M7 20v2", key: "4gnj0m" }],
  ["path", { d: "M7 2v2", key: "1i4yhu" }],
  ["rect", { x: "4", y: "4", width: "16", height: "16", rx: "2", key: "1vbyd7" }],
  ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "1", key: "z9xiuo" }]
];
const Cpu = createLucideIcon("cpu", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54", key: "1djwo0" }],
  [
    "path",
    {
      d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",
      key: "1tzkfa"
    }
  ],
  ["path", { d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05", key: "14pb5j" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
];
const Earth = createLucideIcon("earth", __iconNode$1);
const __iconNode = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = createLucideIcon("lock", __iconNode);
function Landing() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ticker, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid-bg pointer-events-none absolute inset-0 opacity-60" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-signal/10 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 py-20 lg:py-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pulse-dot h-1.5 w-1.5 rounded-full bg-signal" }),
            "Live · powered by Claude 3.5 Sonnet"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl font-medium leading-[1.05] tracking-tight text-balance md:text-7xl lg:text-8xl", children: [
            "Inflation,",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-signal", children: "decoded." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-7 max-w-2xl text-lg text-muted-foreground text-balance md:text-xl", children: "Pick a country, pick a commodity, get a real AI-generated forecast — with risk narrative, business impact, and a concrete investment signal. Built for analysts, founders, and the curious." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/predictor", className: "group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-all hover:glow", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
              "Run a free prediction",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/pricing", className: "font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground", children: "See pricing →" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: "3 free analyses per day · no signup" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4", children: [{
          k: "8",
          label: "Major economies"
        }, {
          k: "8",
          label: "Commodity drivers"
        }, {
          k: "24mo",
          label: "Forecast horizon"
        }, {
          k: "<3s",
          label: "AI analysis"
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl font-medium text-signal", children: s.k }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: s.label })
        ] }, s.label)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[11px] uppercase tracking-widest text-signal", children: "Capability" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl font-medium tracking-tight md:text-5xl", children: "An economist in your pocket." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3", children: [{
        icon: ChartLine,
        title: "Forecast curves",
        body: "Mean-reverting models with confidence intervals across 8 economies and 8 commodity drivers."
      }, {
        icon: Cpu,
        title: "Claude-powered analysis",
        body: "Every forecast is reasoned over by Claude 3.5 Sonnet — narrative, risks, signal, all live."
      }, {
        icon: Earth,
        title: "Built for fintech",
        body: "Pro tier ships a clean REST API so your app can pipe inflation intelligence into any flow."
      }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "h-5 w-5 text-signal", strokeWidth: 2 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-xl font-medium", children: f.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: f.body })
      ] }, f.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-20 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "mx-auto h-5 w-5 text-signal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-display text-4xl font-medium tracking-tight md:text-5xl text-balance", children: [
        "Your personal economic",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-signal", children: "intelligence layer." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/predictor", className: "mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-all hover:glow", children: [
        "Open the predictor",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-8 font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "© 2025 InflationIQ · Synthetic forecasts for demo purposes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/pricing", children: "Pricing" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/api", children: "API" })
      ] })
    ] })
  ] });
}
export {
  Landing as component
};
