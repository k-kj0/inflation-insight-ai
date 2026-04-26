export function Ticker() {
  const items = [
    { sym: "US CPI", val: "2.9%", chg: "+0.2" },
    { sym: "EU HICP", val: "2.4%", chg: "+0.2" },
    { sym: "UK CPI", val: "2.6%", chg: "+0.6" },
    { sym: "JP CPI", val: "2.3%", chg: "+0.1" },
    { sym: "BR IPCA", val: "4.2%", chg: "−0.6" },
    { sym: "TR CPI", val: "45.0%", chg: "−4.4" },
    { sym: "Brent", val: "$78.4", chg: "+1.2%" },
    { sym: "Gold", val: "$2,664", chg: "+0.8%" },
    { sym: "Wheat", val: "$5.84", chg: "−0.3%" },
    { sym: "Copper", val: "$4.12", chg: "+1.4%" },
    { sym: "DXY", val: "104.2", chg: "−0.1" },
    { sym: "10Y UST", val: "4.21%", chg: "+3bp" },
  ];
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border bg-surface">
      <div className="ticker-track flex w-max gap-8 py-2.5">
        {row.map((it, i) => {
          const up = !it.chg.startsWith("−");
          return (
            <div key={i} className="flex items-center gap-2 font-mono text-[11px] tracking-wide">
              <span className="text-muted-foreground">{it.sym}</span>
              <span className="text-foreground">{it.val}</span>
              <span className={up ? "text-signal" : "text-risk"}>{it.chg}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
