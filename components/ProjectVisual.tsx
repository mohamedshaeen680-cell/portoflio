interface ProjectVisualProps {
  slug: string;
  category: string;
}

export default function ProjectVisual({ slug, category }: ProjectVisualProps) {
  switch (slug) {
    case "crm-sales-opportunities-dashboard":
      return (
        <div className="relative flex aspect-video w-full flex-col justify-between overflow-hidden rounded-t-2xl border-b border-slate-200/80 bg-gradient-to-br from-slate-100 via-teal/[0.04] to-slate-200/50 p-5 dark:border-white/[0.06] dark:from-[#0E1217] dark:via-teal/[0.03] dark:to-[#151B22]">
          {/* Top Bar Indicators */}
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5 font-semibold text-teal">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              PIPELINE FUNNEL
            </span>
            <span>WIN RATE: 64.8%</span>
          </div>

          {/* Funnel Stage Bars */}
          <div className="my-auto space-y-2.5">
            <div>
              <div className="mb-1 flex justify-between text-[10px] font-mono text-slate-600 dark:text-slate-400">
                <span>1. Lead Qualification</span>
                <span>1,240 Deals ($4.2M)</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/[0.06]">
                <div className="h-full w-full rounded-full bg-teal opacity-90" />
              </div>
            </div>

            <div>
              <div className="mb-1 flex justify-between text-[10px] font-mono text-slate-600 dark:text-slate-400">
                <span>2. Proposal Sent</span>
                <span>820 Deals ($2.8M)</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/[0.06]">
                <div className="h-full w-[68%] rounded-full bg-teal opacity-75" />
              </div>
            </div>

            <div>
              <div className="mb-1 flex justify-between text-[10px] font-mono text-slate-600 dark:text-slate-400">
                <span>3. Negotiation Stage</span>
                <span>490 Deals ($1.9M)</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/[0.06]">
                <div className="h-full w-[44%] rounded-full bg-amber opacity-90" />
              </div>
            </div>

            <div>
              <div className="mb-1 flex justify-between text-[10px] font-mono text-slate-600 dark:text-slate-400">
                <span>4. Closed / Won</span>
                <span>320 Deals ($1.4M)</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/[0.06]">
                <div className="h-full w-[28%] rounded-full bg-teal opacity-100" />
              </div>
            </div>
          </div>

          {/* Bottom Metric Strip */}
          <div className="flex items-center justify-between border-t border-slate-200/60 pt-2 text-[10px] font-mono text-slate-500 dark:border-white/[0.06] dark:text-slate-400">
            <span>SQL CTE Aggregation</span>
            <span className="text-teal font-medium">Power BI Model</span>
          </div>
        </div>
      );

    case "coffee-shop-sales-dashboard":
      return (
        <div className="relative flex aspect-video w-full flex-col justify-between overflow-hidden rounded-t-2xl border-b border-slate-200/80 bg-gradient-to-br from-slate-100 via-amber/[0.04] to-slate-200/50 p-5 dark:border-white/[0.06] dark:from-[#0E1217] dark:via-amber/[0.03] dark:to-[#151B22]">
          {/* Top Bar Indicators */}
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5 font-semibold text-amber">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              HOURLY REVENUE HEATMAP
            </span>
            <span>PEAK: 08:00 - 10:30 AM</span>
          </div>

          {/* Multi-Bar Hourly Profile */}
          <div className="my-auto flex h-28 items-end justify-between gap-1.5 px-2 pt-4">
            {[
              { h: "35%", t: "6am", c: "bg-teal/40" },
              { h: "55%", t: "7am", c: "bg-teal/60" },
              { h: "92%", t: "8am", c: "bg-amber" },
              { h: "100%", t: "9am", c: "bg-amber shadow-[0_0_12px_rgba(233,183,101,0.5)]" },
              { h: "78%", t: "10am", c: "bg-amber/80" },
              { h: "62%", t: "11am", c: "bg-teal/60" },
              { h: "70%", t: "12pm", c: "bg-teal/70" },
              { h: "50%", t: "1pm", c: "bg-teal/50" },
              { h: "45%", t: "2pm", c: "bg-teal/40" },
              { h: "68%", t: "3pm", c: "bg-teal/60" },
              { h: "40%", t: "4pm", c: "bg-teal/30" },
            ].map((bar, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
                <div
                  className={`w-full rounded-t-md transition-all duration-300 ${bar.c}`}
                  style={{ height: bar.h }}
                />
                <span className="text-[9px] font-mono text-slate-400 dark:text-slate-500">
                  {bar.t}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Metric Strip */}
          <div className="flex items-center justify-between border-t border-slate-200/60 pt-2 text-[10px] font-mono text-slate-500 dark:border-white/[0.06] dark:text-slate-400">
            <span>3 Retail Stores &bull; 6 Months</span>
            <span className="text-amber font-medium">+22% Beverage Attach</span>
          </div>
        </div>
      );

    case "uk-railway-analytics":
      return (
        <div className="relative flex aspect-video w-full flex-col justify-between overflow-hidden rounded-t-2xl border-b border-slate-200/80 bg-gradient-to-br from-slate-100 via-teal/[0.04] to-slate-200/50 p-5 dark:border-white/[0.06] dark:from-[#0E1217] dark:via-teal/[0.03] dark:to-[#151B22]">
          {/* Top Bar Indicators */}
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5 font-semibold text-teal">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              PUNCTUALITY TREND
            </span>
            <span>ON-TIME: 84.1%</span>
          </div>

          {/* SVG Line / Journey Route Visual */}
          <div className="my-auto px-1">
            <svg viewBox="0 0 320 80" className="w-full" fill="none">
              <defs>
                <linearGradient id="railGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#35D0B0" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#35D0B0" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Background Grid Lines */}
              <line x1="0" y1="20" x2="320" y2="20" stroke="currentColor" strokeOpacity="0.08" strokeDasharray="3 3" />
              <line x1="0" y1="50" x2="320" y2="50" stroke="currentColor" strokeOpacity="0.08" strokeDasharray="3 3" />
              {/* Area fill */}
              <path
                d="M10 55 Q 60 20, 110 35 T 210 25 T 310 15 L 310 75 L 10 75 Z"
                fill="url(#railGrad)"
              />
              {/* Main curve */}
              <path
                d="M10 55 Q 60 20, 110 35 T 210 25 T 310 15"
                stroke="#35D0B0"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Key Nodes */}
              <circle cx="10" cy="55" r="4" fill="#35D0B0" />
              <circle cx="110" cy="35" r="4" fill="#35D0B0" />
              <circle cx="210" cy="25" r="4" fill="#E9B765" />
              <circle cx="310" cy="15" r="4" fill="#35D0B0" />
            </svg>
          </div>

          {/* Bottom Metric Strip */}
          <div className="flex items-center justify-between border-t border-slate-200/60 pt-2 text-[10px] font-mono text-slate-500 dark:border-white/[0.06] dark:text-slate-400">
            <span>Major UK Routes</span>
            <span className="text-teal font-medium">Tableau &bull; Python</span>
          </div>
        </div>
      );

    case "home-price-analysis":
      return (
        <div className="relative flex aspect-video w-full flex-col justify-between overflow-hidden rounded-t-2xl border-b border-slate-200/80 bg-gradient-to-br from-slate-100 via-teal/[0.04] to-slate-200/50 p-5 dark:border-white/[0.06] dark:from-[#0E1217] dark:via-teal/[0.03] dark:to-[#151B22]">
          {/* Top Bar Indicators */}
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5 font-semibold text-teal">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              REGRESSION ANALYSIS
            </span>
            <span>R² = 0.814</span>
          </div>

          {/* Scatter Plot Simulation */}
          <div className="relative my-auto h-24 w-full">
            <svg viewBox="0 0 300 75" className="h-full w-full" fill="none">
              {/* Trendline */}
              <line x1="20" y1="65" x2="280" y2="12" stroke="#35D0B0" strokeWidth="2" strokeDasharray="4 4" />
              {/* Scatter Points */}
              {[
                [35, 60], [50, 52], [65, 58], [80, 48], [95, 42],
                [110, 46], [125, 38], [140, 32], [155, 35], [170, 28],
                [185, 24], [200, 26], [215, 20], [230, 22], [245, 16],
                [260, 14], [275, 10], [130, 50], [90, 60], [210, 35]
              ].map(([cx, cy], i) => (
                <circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r="2.5"
                  className={i === 10 || i === 16 ? "fill-amber" : "fill-teal"}
                  opacity="0.85"
                />
              ))}
            </svg>
          </div>

          {/* Bottom Metric Strip */}
          <div className="flex items-center justify-between border-t border-slate-200/60 pt-2 text-[10px] font-mono text-slate-500 dark:border-white/[0.06] dark:text-slate-400">
            <span>80+ Explanatory Features</span>
            <span className="text-teal font-medium">Pandas &bull; Seaborn</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="aspect-video w-full rounded-t-2xl border-b border-slate-200 bg-gradient-to-br from-teal/20 via-surface-elevated to-amber/15 p-6 dark:border-white/[0.06]" />
      );
  }
}
