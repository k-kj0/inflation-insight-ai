import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface Props {
  current: number;
  predicted: number;
  delta: number;
  riskScore: number;
  volatility: number;
}

function StatCard({
  label,
  value,
  hint,
  tone = "default",
}: {
  label: string;
  value: string;
  hint?: string;
  tone?: "default" | "signal" | "risk";
}) {
  const valueColor =
    tone === "signal"
      ? "text-signal"
      : tone === "risk"
      ? "text-risk"
      : "text-foreground";
  return (
    <div className="rounded-md border border-border bg-surface-elevated p-4">
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
      <div className={`mt-2 font-display text-3xl font-semibold ${valueColor}`}>
        {value}
      </div>
      {hint && (
        <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          {hint}
        </div>
      )}
    </div>
  );
}

export function PredictionStats({ current, predicted, delta, riskScore, volatility }: Props) {
  const Icon = delta > 0.1 ? TrendingUp : delta < -0.1 ? TrendingDown : Minus;
  const deltaTone = delta > 0.1 ? "risk" : delta < -0.1 ? "signal" : "default";
  const riskTone = riskScore > 60 ? "risk" : riskScore > 30 ? "default" : "signal";

  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      <StatCard label="Current YoY" value={`${current.toFixed(2)}%`} hint="last actual print" />
      <StatCard
        label="Forecast"
        value={`${predicted.toFixed(2)}%`}
        hint="end of horizon"
        tone="signal"
      />
      <div className="rounded-md border border-border bg-surface-elevated p-4">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Δ Change
        </div>
        <div
          className={`mt-2 flex items-center gap-2 font-display text-3xl font-semibold ${
            deltaTone === "risk"
              ? "text-risk"
              : deltaTone === "signal"
              ? "text-signal"
              : "text-foreground"
          }`}
        >
          <Icon className="h-6 w-6" strokeWidth={2.4} />
          {delta > 0 ? "+" : ""}
          {delta.toFixed(2)}
        </div>
        <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          percentage points
        </div>
      </div>
      <StatCard
        label="Risk Score"
        value={`${riskScore}/100`}
        hint={`vol idx ${volatility.toFixed(2)}`}
        tone={riskTone}
      />
    </div>
  );
}
