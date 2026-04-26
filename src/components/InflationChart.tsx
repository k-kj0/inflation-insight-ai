import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { PredictionPoint } from "@/lib/inflation-data";

interface Props {
  data: PredictionPoint[];
}

export function InflationChart({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height={340}>
      <ComposedChart data={data} margin={{ top: 16, right: 12, left: -12, bottom: 0 }}>
        <defs>
          <linearGradient id="ciFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.92 0.21 125)" stopOpacity={0.25} />
            <stop offset="100%" stopColor="oklch(0.92 0.21 125)" stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="oklch(1 0 0 / 8%)" strokeDasharray="2 4" vertical={false} />
        <XAxis
          dataKey="label"
          stroke="oklch(0.7 0.02 250)"
          tick={{ fontSize: 11, fontFamily: "JetBrains Mono, monospace" }}
          tickLine={false}
          axisLine={{ stroke: "oklch(1 0 0 / 12%)" }}
          interval="preserveStartEnd"
        />
        <YAxis
          stroke="oklch(0.7 0.02 250)"
          tick={{ fontSize: 11, fontFamily: "JetBrains Mono, monospace" }}
          tickLine={false}
          axisLine={false}
          tickFormatter={(v) => `${v}%`}
          width={48}
        />
        <Tooltip
          contentStyle={{
            background: "oklch(0.20 0.02 250)",
            border: "1px solid oklch(1 0 0 / 12%)",
            borderRadius: 8,
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 12,
          }}
          labelStyle={{ color: "oklch(0.92 0.21 125)", fontWeight: 600 }}
          formatter={(v, name) => {
            if (v == null) return ["—", name as string];
            return [`${Number(v).toFixed(2)}%`, name as string];
          }}
        />
        <Area
          type="monotone"
          dataKey="upper"
          stroke="none"
          fill="url(#ciFill)"
          name="Upper CI"
          isAnimationActive={false}
        />
        <Area
          type="monotone"
          dataKey="lower"
          stroke="none"
          fill="oklch(0.16 0.018 250)"
          name="Lower CI"
          isAnimationActive={false}
        />
        <Line
          type="monotone"
          dataKey="actual"
          stroke="oklch(0.97 0.01 90)"
          strokeWidth={2.4}
          dot={false}
          name="Historical"
        />
        <Line
          type="monotone"
          dataKey="forecast"
          stroke="oklch(0.92 0.21 125)"
          strokeWidth={2.4}
          strokeDasharray="6 4"
          dot={false}
          name="Forecast"
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
