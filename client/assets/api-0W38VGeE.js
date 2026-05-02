import{j as e,L as t}from"./index-BrhHo45i.js";import{S as r}from"./SiteHeader-Dk2NrujK.js";const o=`curl https://api.inflationiq.dev/v1/predict \\
  -H "Authorization: Bearer iq_live_xxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "country": "US",
    "commodity": "oil",
    "horizon": 12
  }'`,n=`{
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
}`;function a(){return e.jsxs("div",{className:"min-h-screen bg-background",children:[e.jsx(r,{}),e.jsxs("section",{className:"mx-auto max-w-5xl px-5 py-20",children:[e.jsxs("div",{className:"mb-12 max-w-3xl",children:[e.jsx("div",{className:"font-mono text-[11px] uppercase tracking-widest text-signal",children:"For builders"}),e.jsx("h1",{className:"mt-3 font-display text-5xl font-medium tracking-tight text-balance md:text-6xl",children:"One endpoint. Full economic intelligence."}),e.jsx("p",{className:"mt-5 max-w-2xl text-lg text-muted-foreground",children:"Pipe InflationIQ into any fintech app — neobanks, robo-advisors, treasury tools, expense forecasters. Available on the Business plan."})]}),e.jsxs("div",{className:"grid gap-5 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground",children:"Request"}),e.jsx("pre",{className:"overflow-x-auto rounded-lg border border-border bg-surface p-4 font-mono text-[12px] leading-relaxed text-foreground",children:o})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground",children:"Response"}),e.jsx("pre",{className:"overflow-x-auto rounded-lg border border-border bg-surface p-4 font-mono text-[12px] leading-relaxed text-foreground",children:n})]})]}),e.jsxs("div",{className:"mt-10 flex items-center gap-4",children:[e.jsx(t,{to:"/pricing",className:"rounded-md bg-primary px-5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-widest text-primary-foreground hover:glow",children:"See pricing"}),e.jsx(t,{to:"/predictor",className:"font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground",children:"Try the dashboard →"})]})]})]})}export{a as component};
