import { cn } from "@/lib/utils";

function WindowChrome({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-border/60 bg-secondary/50 px-3 py-2">
      <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
      <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
      <span className="ml-3 truncate rounded-md bg-background/60 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

/** Animated candlestick + signal feed mock for the trading platform. */
function TraderMock() {
  const candles = [
    [40, 22],
    [30, 30],
    [52, 18],
    [26, 40],
    [44, 26],
    [20, 46],
    [54, 20],
    [34, 32],
    [48, 24],
    [28, 38],
    [50, 22],
    [38, 28],
  ];
  return (
    <div className="grid grid-cols-3 gap-3 p-4">
      <div className="col-span-2 rounded-lg border border-border/50 bg-background/40 p-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] font-medium text-foreground">
            NIFTY · 1m
          </span>
          <span className="rounded bg-green-500/15 px-1.5 py-0.5 text-[9px] font-medium text-green-400">
            ▲ 0.62%
          </span>
        </div>
        <div className="flex h-20 items-end gap-1">
          {candles.map(([h, t], i) => (
            <div
              key={i}
              className="relative flex flex-1 flex-col items-center justify-end"
            >
              <span
                className={cn(
                  "w-px",
                  i % 3 === 1 ? "bg-red-400/60" : "bg-green-400/60",
                )}
                style={{ height: `${t}%` }}
              />
              <span
                className={cn(
                  "w-full rounded-[1px]",
                  i % 3 === 1 ? "bg-red-400/70" : "bg-green-400/70",
                )}
                style={{ height: `${h}%` }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {[
          { t: "BUY", s: "RELIANCE", c: "text-green-400 bg-green-500/15" },
          { t: "SELL", s: "TCS", c: "text-red-400 bg-red-500/15" },
          { t: "BUY", s: "HDFCBANK", c: "text-green-400 bg-green-500/15" },
        ].map((sig) => (
          <div
            key={sig.s}
            className="flex items-center justify-between rounded-md border border-border/50 bg-background/40 px-2 py-1.5"
          >
            <span className="font-mono text-[9px] text-muted-foreground">
              {sig.s}
            </span>
            <span
              className={cn(
                "rounded px-1.5 py-0.5 text-[8px] font-semibold",
                sig.c,
              )}
            >
              {sig.t}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Metric gauges + line graph mock for the monitoring platform. */
function SystemLensMock() {
  const metrics = [
    { label: "CPU", value: 62, color: "stroke-primary" },
    { label: "MEM", value: 78, color: "stroke-indigo-400" },
    { label: "DISK", value: 41, color: "stroke-cyan-400" },
  ];
  return (
    <div className="space-y-3 p-4">
      <div className="grid grid-cols-3 gap-3">
        {metrics.map((m) => {
          const r = 16;
          const circ = 2 * Math.PI * r;
          return (
            <div
              key={m.label}
              className="flex flex-col items-center rounded-lg border border-border/50 bg-background/40 p-2"
            >
              <svg viewBox="0 0 44 44" className="h-12 w-12 -rotate-90">
                <circle
                  cx="22"
                  cy="22"
                  r={r}
                  className="stroke-border"
                  strokeWidth="4"
                  fill="none"
                />
                <circle
                  cx="22"
                  cy="22"
                  r={r}
                  className={m.color}
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={circ}
                  strokeDashoffset={circ * (1 - m.value / 100)}
                />
              </svg>
              <span className="mt-1 text-[10px] font-semibold text-foreground">
                {m.value}%
              </span>
              <span className="text-[8px] text-muted-foreground">
                {m.label}
              </span>
            </div>
          );
        })}
      </div>
      <div className="rounded-lg border border-border/50 bg-background/40 p-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] font-medium text-foreground">
            Throughput
          </span>
          <span className="flex items-center gap-1 text-[9px] text-green-400">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            live
          </span>
        </div>
        <svg viewBox="0 0 200 48" className="h-12 w-full" preserveAspectRatio="none">
          <polyline
            points="0,38 20,30 40,34 60,20 80,26 100,12 120,22 140,8 160,18 180,6 200,14"
            fill="none"
            className="stroke-primary"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polygon
            points="0,38 20,30 40,34 60,20 80,26 100,12 120,22 140,8 160,18 180,6 200,14 200,48 0,48"
            className="fill-primary/10"
          />
        </svg>
      </div>
    </div>
  );
}

const MOCKS: Record<
  string,
  { label: string; render: () => React.ReactNode }
> = {
  "ai-trader": { label: "ai-trader · live dashboard", render: () => <TraderMock /> },
  systemlens: {
    label: "systemlens · observability",
    render: () => <SystemLensMock />,
  },
};

export function ProjectMockup({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const mock = MOCKS[slug];
  if (!mock) return null;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border/60 bg-card/80 shadow-2xl shadow-black/20 backdrop-blur-sm",
        className,
      )}
    >
      <WindowChrome label={mock.label} />
      {mock.render()}
    </div>
  );
}
