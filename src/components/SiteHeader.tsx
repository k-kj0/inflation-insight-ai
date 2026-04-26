import { Link } from "@tanstack/react-router";
import { Activity } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative">
            <Activity className="h-5 w-5 text-signal" strokeWidth={2.5} />
            <div className="pulse-dot absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-signal" />
          </div>
          <span className="font-display text-lg font-semibold tracking-tight">
            Inflation<span className="text-signal">IQ</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 font-mono text-[11px] uppercase tracking-widest text-muted-foreground md:flex">
          <Link to="/" className="hover:text-foreground">Overview</Link>
          <Link to="/predictor" className="hover:text-foreground">Predictor</Link>
          <Link to="/pricing" className="hover:text-foreground">Pricing</Link>
          <Link to="/api" className="hover:text-foreground">API</Link>
        </nav>
        <Link
          to="/predictor"
          className="rounded-md bg-primary px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-widest text-primary-foreground transition-all hover:glow"
        >
          Launch app
        </Link>
      </div>
    </header>
  );
}
