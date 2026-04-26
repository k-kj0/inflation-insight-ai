import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { Ticker } from "@/components/Ticker";
import { InflationChart } from "@/components/InflationChart";
import { PredictionStats } from "@/components/PredictionStats";
import { InfluxAIPanel } from "@/components/InfluxAIPanel";
import {
  COUNTRIES,
  COMMODITIES,
  buildPrediction,
  type CountryCode,
  type Commodity,
} from "@/lib/inflation-data";

export const Route = createFileRoute("/predictor")({
  head: () => ({
    meta: [
      { title: "Predictor — InflationIQ" },
      {
        name: "description",
        content:
          "Generate AI inflation forecasts by country and commodity. Get risk analysis and investment signals in seconds.",
      },
      { property: "og:title", content: "InflationIQ Predictor" },
      {
        property: "og:description",
        content:
          "Real Claude-powered inflation analysis: pick a country, pick a commodity, ship a signal.",
      },
    ],
  }),
  component: Predictor,
});

const FREE_LIMIT = 3;

function Predictor() {
  const [country, setCountry] = useState<CountryCode>("US");
  const [commodity, setCommodity] = useState<Commodity>("general");
  const [horizon, setHorizon] = useState(12);
  const [used, setUsed] = useState(0);

  // Read from localStorage on mount (client-only to avoid SSR mismatch)
  useEffect(() => {
    try {
      const today = new Date().toISOString().slice(0, 10);
      const raw = localStorage.getItem("iq-usage");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.date === today) setUsed(parsed.used);
      }
    } catch {
      // ignore
    }
  }, []);

  const consumeCredit = () => {
    setUsed((u) => {
      const next = u + 1;
      try {
        const today = new Date().toISOString().slice(0, 10);
        localStorage.setItem("iq-usage", JSON.stringify({ date: today, used: next }));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const prediction = useMemo(
    () => buildPrediction(country, commodity, horizon),
    [country, commodity, horizon],
  );

  const remaining = Math.max(0, FREE_LIMIT - used);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Ticker />

      <div className="mx-auto max-w-7xl px-5 py-10">
        {/* Header row */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-signal">
              Predictor · v1
            </div>
            <h1 className="mt-2 font-display text-4xl font-medium tracking-tight md:text-5xl">
              {prediction.countryName}
              <span className="text-muted-foreground"> · </span>
              <span className="italic">{prediction.commodityLabel}</span>
            </h1>
            <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {horizon}-month forecast · bias: {prediction.bias}
            </p>
          </div>
          <div className="rounded-md border border-border bg-surface px-3 py-2 font-mono text-[10px] uppercase tracking-widest">
            <span className="text-muted-foreground">Free tier · </span>
            <span className={remaining > 0 ? "text-signal" : "text-risk"}>
              {remaining}/{FREE_LIMIT} analyses left
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="mb-6 grid gap-3 rounded-lg border border-border bg-surface p-4 lg:grid-cols-3">
          <div>
            <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Country
            </label>
            <div className="flex flex-wrap gap-1.5">
              {COUNTRIES.map((c) => (
                <button
                  key={c.code}
                  onClick={() => setCountry(c.code)}
                  className={`rounded border px-2.5 py-1.5 font-mono text-[11px] transition-colors ${
                    country === c.code
                      ? "border-signal bg-signal/10 text-signal"
                      : "border-border bg-surface-elevated text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="mr-1">{c.flag}</span>
                  {c.code}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Driver
            </label>
            <div className="flex flex-wrap gap-1.5">
              {COMMODITIES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCommodity(c.id)}
                  className={`rounded border px-2.5 py-1.5 font-mono text-[11px] transition-colors ${
                    commodity === c.id
                      ? "border-signal bg-signal/10 text-signal"
                      : "border-border bg-surface-elevated text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="mr-1">{c.emoji}</span>
                  {c.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Horizon · {horizon} months
            </label>
            <input
              type="range"
              min={3}
              max={24}
              step={1}
              value={horizon}
              onChange={(e) => setHorizon(Number(e.target.value))}
              className="mt-3 w-full accent-signal"
            />
            <div className="mt-1 flex justify-between font-mono text-[10px] text-muted-foreground">
              <span>3mo</span>
              <span>24mo</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <PredictionStats
          current={prediction.current}
          predicted={prediction.predicted}
          delta={prediction.delta}
          riskScore={prediction.riskScore}
          volatility={prediction.volatility}
        />

        {/* Chart */}
        <div className="mt-6 rounded-lg border border-border bg-surface p-5">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                YoY % · historical + forecast
              </div>
              <div className="mt-0.5 font-display text-lg">Inflation curve</div>
            </div>
            <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="h-0.5 w-4 bg-foreground" /> actual
              </span>
              <span className="flex items-center gap-1.5">
                <span
                  className="h-0.5 w-4 bg-signal"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, var(--signal) 0 4px, transparent 4px 8px)",
                  }}
                />
                forecast
              </span>
            </div>
          </div>
          <InflationChart data={prediction.series} />
        </div>

        {/* INFLUX AI */}
        <div className="mt-6">
          <InfluxAIPanel
            country={prediction.countryName}
            commodity={prediction.commodityLabel}
            horizon={horizon}
            current={prediction.current}
            predicted={prediction.predicted}
            delta={prediction.delta}
            riskScore={prediction.riskScore}
            volatility={prediction.volatility}
            remaining={remaining}
            onConsumeCredit={consumeCredit}
          />
        </div>
      </div>
    </div>
  );
}
