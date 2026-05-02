import { a1 as TSS_SERVER_FUNCTION, a2 as createServerFn } from "./worker-entry-C6G48CJd.js";
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
const COMMODITY_RISKS = {
  oil: ["OPEC+ supply discipline tightening crude balances", "Middle East shipping disruptions lifting freight premia", "Strategic Petroleum Reserve refill pressure", "Refining margin spillover into core CPI"],
  natgas: ["European storage refill cycle ahead of winter", "LNG export terminal outages compressing US supply", "Weather-driven heating demand variance", "Industrial demand re-acceleration in Asia"],
  wheat: ["Black Sea export corridor fragility", "El Niño / La Niña yield variance in key exporters", "Fertilizer cost pass-through from natgas", "Food protectionism and export bans"],
  copper: ["China property and grid investment cycle", "Chilean and Peruvian mine supply disruptions", "Energy transition demand from EVs and grid", "Inventory destock at LME warehouses"],
  coffee: ["Brazilian arabica frost and drought risk", "Vietnamese robusta export tightness", "Shipping container rates from origin markets", "Specialty roaster pass-through to consumers"],
  gold: ["Real yields and DXY trajectory", "Central bank reserve diversification flows", "Geopolitical hedging demand", "ETF positioning unwind risk"],
  semiconductors: ["Taiwan Strait geopolitical premium", "AI capex driving leading-edge node tightness", "Memory cycle bottoming and pricing power return", "Export controls reshaping supply chains"],
  general: ["Wage growth stickiness in services", "Shelter and rent disinflation pace", "Goods deflation reversal from supply normalization", "Currency pass-through from FX volatility"]
};
const COUNTRY_CONTEXT = {
  US: "Federal Reserve dual mandate posture and labor market resilience",
  EU: "ECB policy divergence and energy import dependency",
  UK: "BoE services inflation focus and post-Brexit trade frictions",
  JP: "BoJ policy normalization and yen pass-through",
  BR: "BCB real rate cushion and fiscal dominance fears",
  IN: "RBI inflation targeting and food weight in CPI basket",
  TR: "CBRT credibility rebuild and lira stabilization arc",
  AR: "Currency regime transition and price liberalization shocks"
};
const COUNTRY_INSTRUMENTS = {
  US: ["TIPS", "SCHP", "GLD"],
  EU: ["DBEZ", "FEZ", "EUFN"],
  UK: ["EWU", "FLGB", "INXG.L"],
  JP: ["DXJ", "EWJ", "FLJP"],
  BR: ["EWZ", "BRZU", "ILF"],
  IN: ["INDA", "EPI", "SMIN"],
  TR: ["TUR"],
  AR: ["ARGT"]
};
function pick(arr, rand, n) {
  const copy = [...arr];
  const out = [];
  for (let i = 0; i < n && copy.length; i++) {
    const idx = Math.floor(rand() * copy.length);
    out.push(copy.splice(idx, 1)[0]);
  }
  return out;
}
function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = a + 1831565813 >>> 0;
    let t = a;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function generateMock(data) {
  const seed = data.country.charCodeAt(0) * 131 + data.commodity.length * 977 + Math.round(data.predicted * 100) + data.horizon;
  const rand = mulberry32(seed);
  const direction = data.delta > 0.3 ? "rising" : data.delta < -0.3 ? "easing" : "range-bound";
  const ctx = COUNTRY_CONTEXT[data.country] ?? "domestic monetary policy stance";
  const risks = pick(COMMODITY_RISKS[data.commodity] ?? COMMODITY_RISKS.general, rand, 3 + Math.floor(rand() * 2));
  let action;
  if (data.predicted > 6 || data.riskScore > 70) action = "HEDGE";
  else if (data.delta > 0.8) action = "BUY";
  else if (data.delta < -0.8) action = "SELL";
  else action = "HOLD";
  const headlineMap = {
    HEDGE: `Elevated ${direction} inflation in ${data.country} demands portfolio hedges now`,
    BUY: `${data.country} reflation print supports real-asset and inflation-linked exposure`,
    SELL: `Disinflation in ${data.country} opens room to fade defensive inflation trades`,
    HOLD: `${data.country} inflation drift stays orderly — stay patient, stay positioned`
  };
  const narrative = `Our ${data.horizon}-month forecast for ${data.country} lands at ${data.predicted}% versus a current ${data.current}%, a ${data.delta > 0 ? "+" : ""}${data.delta}pp move shaped largely by ${data.commodity === "general" ? "headline basket dynamics" : data.commodity + " transmission"}. The path is anchored by ${ctx}, with a volatility index of ${data.volatility} signalling ${data.volatility > 1.8 ? "fat-tailed" : "contained"} dispersion around the central case. Risk score ${data.riskScore}/100 places this regime in the ${data.riskScore > 70 ? "high-alert" : data.riskScore > 40 ? "watchful" : "benign"} bucket for asset allocators.`;
  const businessImpact = action === "HEDGE" ? `Margin pressure intensifies for import-heavy and labor-intensive sectors; pricing-power leaders outperform laggards. Households face renewed real-income squeeze, biasing discretionary spend down and staples up.` : action === "SELL" ? `Disinflation restores real wages and unlocks discretionary consumption, particularly for big-ticket and credit-sensitive categories. Corporates regain input-cost relief but lose top-line pricing tailwinds.` : action === "BUY" ? `Reflation rewards firms with proven pass-through and asset-heavy balance sheets. Consumers feel sticker shock in food and energy, accelerating private-label substitution.` : `Stable inflation underwrites planning visibility for capex and consumer durables. Wage-price loops remain dormant, keeping real-rate paths predictable.`;
  const baseInstruments = COUNTRY_INSTRUMENTS[data.country] ?? ["TIPS", "GLD"];
  const commodityInstruments = {
    oil: ["USO", "XLE"],
    natgas: ["UNG", "FCG"],
    wheat: ["WEAT", "DBA"],
    copper: ["CPER", "COPX"],
    coffee: ["JO"],
    gold: ["GLD", "GDX"],
    semiconductors: ["SOXX", "SMH"],
    general: ["TIP", "SCHP"]
  };
  const instruments = [...pick(baseInstruments, rand, Math.min(2, baseInstruments.length)), ...pick(commodityInstruments[data.commodity] ?? ["TIP"], rand, 1)];
  const rationaleMap = {
    HEDGE: `Tail risk on the upside justifies real-asset overlays and breakeven longs into the print.`,
    BUY: `Forward path skews higher; inflation-linked and real-asset beta should outperform nominal duration.`,
    SELL: `Path-of-least-resistance is lower CPI; trim defensive inflation hedges and add duration selectively.`,
    HOLD: `Risk-reward is symmetric — wait for a regime break before resizing the inflation book.`
  };
  return {
    headline: headlineMap[action],
    narrative,
    riskFactors: risks,
    businessImpact,
    investmentSignal: {
      action,
      rationale: rationaleMap[action],
      instruments
    }
  };
}
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
  await new Promise((r) => setTimeout(r, 900 + Math.random() * 700));
  return generateMock(data);
});
export {
  analyzeInflation_createServerFn_handler
};
