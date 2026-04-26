// Synthetic but realistic inflation series. Anchored on rough real CPI YoY %
// patterns 2019-2024, then forecast forward with mean-reversion + commodity bias.

export type CountryCode = "US" | "EU" | "UK" | "JP" | "BR" | "IN" | "TR" | "AR";
export type Commodity =
  | "general"
  | "oil"
  | "wheat"
  | "natgas"
  | "copper"
  | "coffee"
  | "gold"
  | "semiconductors";

export const COUNTRIES: { code: CountryCode; name: string; flag: string }[] = [
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "EU", name: "Eurozone", flag: "🇪🇺" },
  { code: "UK", name: "United Kingdom", flag: "🇬🇧" },
  { code: "JP", name: "Japan", flag: "🇯🇵" },
  { code: "BR", name: "Brazil", flag: "🇧🇷" },
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "TR", name: "Türkiye", flag: "🇹🇷" },
  { code: "AR", name: "Argentina", flag: "🇦🇷" },
];

export const COMMODITIES: { id: Commodity; label: string; emoji: string }[] = [
  { id: "general", label: "Headline CPI", emoji: "📊" },
  { id: "oil", label: "Crude Oil", emoji: "🛢️" },
  { id: "wheat", label: "Wheat", emoji: "🌾" },
  { id: "natgas", label: "Natural Gas", emoji: "🔥" },
  { id: "copper", label: "Copper", emoji: "🟠" },
  { id: "coffee", label: "Coffee", emoji: "☕" },
  { id: "gold", label: "Gold", emoji: "🥇" },
  { id: "semiconductors", label: "Semiconductors", emoji: "💾" },
];

// Approximate historical YoY headline inflation by country (2020-2025 monthly trend points).
const HISTORICAL: Record<CountryCode, number[]> = {
  US: [1.5, 1.4, 2.6, 5.4, 7.0, 9.1, 6.5, 3.7, 3.1, 2.4, 2.7, 2.9],
  EU: [1.3, 0.3, 1.9, 5.0, 8.6, 10.6, 8.6, 5.5, 2.4, 2.0, 2.2, 2.4],
  UK: [1.8, 0.7, 2.5, 5.4, 9.4, 11.1, 8.7, 4.6, 4.0, 2.3, 2.0, 2.6],
  JP: [0.5, -0.2, -0.2, 0.6, 2.4, 3.7, 4.3, 3.2, 2.5, 2.7, 2.2, 2.3],
  BR: [4.3, 4.5, 6.1, 10.7, 12.1, 11.9, 5.8, 4.7, 3.9, 4.5, 4.8, 4.2],
  IN: [3.7, 6.6, 5.5, 6.3, 7.0, 7.4, 5.7, 5.1, 4.8, 4.9, 5.5, 5.2],
  TR: [11.8, 12.3, 14.6, 19.6, 36.1, 64.3, 85.5, 64.8, 64.9, 75.4, 49.4, 45.0],
  AR: [53.8, 36.1, 50.9, 50.9, 64.1, 94.8, 211.0, 254.0, 287.0, 236.0, 166.0, 117.0],
};

const COMMODITY_BIAS: Record<Commodity, { vol: number; drift: number; label: string }> = {
  general: { vol: 0.4, drift: 0, label: "Headline inflation" },
  oil: { vol: 2.2, drift: 0.4, label: "Energy-driven" },
  wheat: { vol: 1.8, drift: 0.3, label: "Food/agriculture" },
  natgas: { vol: 2.5, drift: 0.6, label: "Energy-driven" },
  copper: { vol: 1.4, drift: 0.2, label: "Industrial demand" },
  coffee: { vol: 1.6, drift: 0.5, label: "Soft commodity" },
  gold: { vol: 0.9, drift: -0.2, label: "Safe-haven" },
  semiconductors: { vol: 1.1, drift: -0.3, label: "Tech supply chain" },
};

function seededRandom(seed: number) {
  let x = seed;
  return () => {
    x = (x * 9301 + 49297) % 233280;
    return x / 233280;
  };
}

export interface PredictionPoint {
  label: string;
  actual: number | null;
  forecast: number | null;
  upper: number | null;
  lower: number | null;
}

export interface PredictionResult {
  series: PredictionPoint[];
  current: number;
  predicted: number;
  delta: number;
  riskScore: number; // 0-100
  volatility: number;
  bias: string;
  countryName: string;
  commodityLabel: string;
}

export function buildPrediction(
  country: CountryCode,
  commodity: Commodity,
  horizonMonths: number,
): PredictionResult {
  const hist = HISTORICAL[country];
  const bias = COMMODITY_BIAS[commodity];
  const rand = seededRandom(
    country.charCodeAt(0) * 31 + commodity.length * 17 + horizonMonths,
  );

  // Build labels: last 12 months historical + N forecast
  const now = new Date();
  const series: PredictionPoint[] = [];

  for (let i = hist.length - 1; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const label = d.toLocaleDateString("en", { month: "short", year: "2-digit" });
    const actual = +(hist[hist.length - 1 - i] + (rand() - 0.5) * bias.vol * 0.3).toFixed(2);
    series.push({ label, actual, forecast: null, upper: null, lower: null });
  }

  // Anchor forecast on the last actual point
  const last = series[series.length - 1].actual!;
  series[series.length - 1].forecast = last;
  series[series.length - 1].upper = last;
  series[series.length - 1].lower = last;

  let cur = last;
  for (let i = 1; i <= horizonMonths; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
    const label = d.toLocaleDateString("en", { month: "short", year: "2-digit" });

    // Mean-revert toward 2.5% target with commodity drift + noise
    const target = 2.5 + bias.drift * 2;
    const revert = (target - cur) * 0.18;
    const noise = (rand() - 0.5) * bias.vol;
    cur = +(cur + revert + noise).toFixed(2);

    const ciWidth = bias.vol * Math.sqrt(i) * 0.7;
    series.push({
      label,
      actual: null,
      forecast: cur,
      upper: +(cur + ciWidth).toFixed(2),
      lower: +(cur - ciWidth).toFixed(2),
    });
  }

  const current = last;
  const predicted = cur;
  const delta = +(predicted - current).toFixed(2);
  const volatility = +(bias.vol * 1.4).toFixed(2);

  // Risk: weighted on absolute predicted level + volatility + delta direction
  const levelRisk = Math.min(100, Math.abs(predicted) * 6);
  const volRisk = Math.min(100, volatility * 18);
  const riskScore = Math.round(Math.min(100, levelRisk * 0.6 + volRisk * 0.4));

  const country_obj = COUNTRIES.find((c) => c.code === country)!;
  const commodity_obj = COMMODITIES.find((c) => c.id === commodity)!;

  return {
    series,
    current,
    predicted,
    delta,
    riskScore,
    volatility,
    bias: bias.label,
    countryName: country_obj.name,
    commodityLabel: commodity_obj.label,
  };
}
