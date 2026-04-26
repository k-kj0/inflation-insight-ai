import { useState } from "react";
import { Sparkles, Loader2, TrendingUp, TrendingDown, Shield, AlertTriangle } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { analyzeInflation, type AnalysisResult } from "@/server/ai.functions";

interface Props {
  country: string;
  commodity: string;
  horizon: number;
  current: number;
  predicted: number;
  delta: number;
  riskScore: number;
  volatility: number;
  remaining: number;
  onConsumeCredit: () => void;
}

const ACTION_TONE: Record<string, { color: string; icon: React.ComponentType<{ className?: string }> }> = {
  BUY: { color: "text-signal", icon: TrendingUp },
  SELL: { color: "text-risk", icon: TrendingDown },
  HEDGE: { color: "text-foreground", icon: Shield },
  HOLD: { color: "text-muted-foreground", icon: Shield },
};

export function InfluxAIPanel(props: Props) {
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const analyze = useServerFn(analyzeInflation);

  const run = async () => {
    if (props.remaining <= 0) {
      setError("Free tier limit reached. Upgrade to Pro for unlimited analyses.");
      return;
    }
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await analyze({
        data: {
          country: props.country,
          commodity: props.commodity,
          horizon: props.horizon,
          current: props.current,
          predicted: props.predicted,
          delta: props.delta,
          riskScore: props.riskScore,
          volatility: props.volatility,
        },
      });
      if (res.error) {
        setError(res.narrative || "Analysis failed");
      } else {
        setResult(res);
        props.onConsumeCredit();
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Network error");
    } finally {
      setLoading(false);
    }
  };

  const Action = result ? ACTION_TONE[result.investmentSignal.action] ?? ACTION_TONE.HOLD : null;

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-surface">
      <div className="flex items-center justify-between border-b border-border bg-surface-elevated px-5 py-3">
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <Sparkles className="h-4 w-4 text-signal" />
            <div className="pulse-dot absolute -right-1 -top-1 h-1.5 w-1.5 rounded-full bg-signal" />
          </div>
          <div className="font-mono text-xs uppercase tracking-widest text-foreground">
            Ask INFLUX AI
          </div>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          claude-3.5-sonnet · {props.remaining} left today
        </div>
      </div>

      <div className="p-5">
        {!result && !loading && !error && (
          <div className="flex flex-col items-start gap-4">
            <p className="max-w-xl text-sm text-muted-foreground">
              Generate a real-time macro analysis: risk narrative, business impact, and a
              concrete investment signal — produced live by Claude on your selected
              {" "}
              <span className="font-mono text-foreground">{props.country}</span> ·{" "}
              <span className="font-mono text-foreground">{props.commodity}</span> forecast.
            </p>
            <button
              onClick={run}
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-all hover:glow"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Analyze with Claude
            </button>
          </div>
        )}

        {loading && (
          <div className="flex items-center gap-3 py-8 text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin text-signal" />
            <span className="font-mono text-xs uppercase tracking-widest">
              INFLUX AI is reasoning over the forecast…
            </span>
          </div>
        )}

        {error && (
          <div className="flex items-start gap-3 rounded-md border border-risk/40 bg-risk/5 p-4">
            <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-risk" />
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-risk">
                Analysis halted
              </div>
              <div className="mt-1 text-sm text-foreground">{error}</div>
              <button
                onClick={run}
                className="mt-3 font-mono text-[10px] uppercase tracking-widest text-signal hover:underline"
              >
                Retry →
              </button>
            </div>
          </div>
        )}

        {result && Action && (
          <div className="space-y-5">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-signal">
                Headline
              </div>
              <h3 className="mt-1.5 font-display text-2xl font-medium leading-tight text-balance">
                {result.headline}
              </h3>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Macro narrative
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-foreground/90">
                {result.narrative}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Key risk factors
                </div>
                <ul className="mt-2 space-y-1.5">
                  {result.riskFactors.map((r, i) => (
                    <li key={i} className="flex gap-2 text-sm text-foreground/90">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-risk" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Business & consumer impact
                </div>
                <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                  {result.businessImpact}
                </p>
              </div>
            </div>

            <div className="rounded-md border border-border bg-surface-elevated p-4">
              <div className="flex items-center justify-between">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Investment signal
                </div>
                <div className={`flex items-center gap-2 font-mono text-sm font-bold ${Action.color}`}>
                  <Action.icon className="h-4 w-4" />
                  {result.investmentSignal.action}
                </div>
              </div>
              <p className="mt-2 text-sm text-foreground/90">{result.investmentSignal.rationale}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {result.investmentSignal.instruments.map((inst) => (
                  <span
                    key={inst}
                    className="rounded border border-signal/40 bg-signal/10 px-2 py-1 font-mono text-[11px] font-medium text-signal"
                  >
                    {inst}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={run}
              className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-signal"
            >
              ↻ Re-analyze
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
