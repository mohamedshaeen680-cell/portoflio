"use client";

export default function HeroVisual() {
  const bars = [38, 62, 48, 80, 66, 100, 74];

  return (
    <div className="rise relative w-full max-w-lg rounded-2xl border border-slate-200/90 bg-white/90 p-5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-md sm:p-6 dark:border-white/[0.08] dark:bg-surface-elevated/95 dark:shadow-[0_8px_35px_rgba(0,0,0,0.5)]">
      {/* Top Telemetry Header */}
      <div className="flex items-center justify-between border-b border-slate-200/70 pb-3 text-xs font-mono dark:border-white/[0.06]">
        <div className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
          </span>
          <span className="tracking-wide">ANALYTICS TELEMETRY</span>
        </div>
        <span className="rounded-md border border-teal/20 bg-teal/10 px-2 py-0.5 text-[10px] font-semibold text-teal">
          SYSTEM ACTIVE
        </span>
      </div>

      {/* KPI Highlight Strip */}
      <div className="my-4 grid grid-cols-3 gap-2.5 rounded-xl border border-slate-200/60 bg-slate-50/80 p-3 sm:gap-3 dark:border-white/[0.04] dark:bg-surface-subtle/70">
        <div>
          <p className="font-mono text-base font-bold text-slate-900 sm:text-lg dark:text-white">
            10K+
          </p>
          <p className="text-[10px] font-medium text-slate-500 sm:text-[11px] dark:text-slate-400">
            Records Modeled
          </p>
        </div>
        <div>
          <p className="font-mono text-base font-bold text-teal sm:text-lg">
            94.2%
          </p>
          <p className="text-[10px] font-medium text-slate-500 sm:text-[11px] dark:text-slate-400">
            Accuracy Rate
          </p>
        </div>
        <div>
          <p className="font-mono text-base font-bold text-amber sm:text-lg">
            +38%
          </p>
          <p className="text-[10px] font-medium text-slate-500 sm:text-[11px] dark:text-slate-400">
            Conversion Lift
          </p>
        </div>
      </div>

      {/* Main Chart Graphic with Benchmark Line */}
      <div className="relative pt-2">
        {/* Floating Tooltip Indicator over peak bar */}
        <div className="absolute right-[21%] top-0 hidden -translate-y-1 sm:flex items-center gap-1 rounded-md border border-amber/30 bg-amber/10 px-2 py-0.5 text-[10px] font-mono font-medium text-amber">
          <span>★ Peak Volume</span>
        </div>

        {/* Benchmark line */}
        <div className="absolute top-[32%] w-full border-b border-dashed border-slate-300 dark:border-white/10">
          <span className="absolute right-0 -top-4 font-mono text-[9px] text-slate-400 dark:text-slate-500">
            Benchmark: 80%
          </span>
        </div>

        {/* Dynamic 7-Bar Graphic */}
        <svg
          viewBox="0 0 280 140"
          className="h-32 w-full sm:h-36"
          role="img"
          aria-label="Analytical volume distribution chart"
        >
          {bars.map((h, i) => (
            <g key={i}>
              <rect
                className="bar"
                style={{ animationDelay: `${i * 90}ms` }}
                x={14 + i * 38}
                y={130 - h * 1.15}
                width="24"
                height={h * 1.15}
                rx="4"
                fill={i === 5 ? "#E9B765" : "#35D0B0"}
                opacity={i === 5 ? 1 : 0.65}
              />
            </g>
          ))}
        </svg>

        {/* Horizontal Axis Labels */}
        <div className="flex justify-between px-3 text-[10px] font-mono text-slate-400 dark:text-slate-500">
          <span>MON</span>
          <span>TUE</span>
          <span>WED</span>
          <span>THU</span>
          <span>FRI</span>
          <span className="font-bold text-amber">SAT</span>
          <span>SUN</span>
        </div>
      </div>

      {/* Bottom Tool Tag Strip */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-1.5 border-t border-slate-200/70 pt-3 text-[11px] font-mono text-slate-500 dark:border-white/[0.06] dark:text-slate-400">
        <span className="font-medium text-slate-600 dark:text-slate-300">CORE PIPELINE:</span>
        <div className="flex items-center gap-1.5">
          <span className="rounded bg-slate-100 px-1.5 py-0.5 dark:bg-white/[0.04]">SQL</span>
          <span className="rounded bg-slate-100 px-1.5 py-0.5 dark:bg-white/[0.04]">Python</span>
          <span className="rounded bg-slate-100 px-1.5 py-0.5 text-teal dark:bg-teal/10">Power BI</span>
        </div>
      </div>
    </div>
  );
}
