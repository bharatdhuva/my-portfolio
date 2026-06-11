import { useEffect, useRef, useState } from "react";

type Shade = 0 | 1 | 2 | 3 | 4;

interface ContributionDay {
  date: string;
  count: number;
  level: Shade;
}

interface ContributionsData {
  totalContributions: number;
  days: ContributionDay[];
}

const shades = ["bg-contrib-0", "bg-contrib-1", "bg-contrib-2", "bg-contrib-3", "bg-contrib-4"];

// Seeded pseudo-random for stable fallback output
function rand(n: number) {
  const x = Math.sin(n) * 10000;
  return x - Math.floor(x);
}

function shadeFor(i: number): Shade {
  const r = rand(i);
  if (r < 0.55) return 0;
  if (r < 0.75) return 1;
  if (r < 0.88) return 2;
  if (r < 0.96) return 3;
  return 4;
}

const fallbackDays: ContributionDay[] = [];
for (let i = 0; i < 52 * 7; i++) {
  const shade = shadeFor(i);
  const startDate = new Date(2025, 5, 1); // June 1, 2025
  startDate.setDate(startDate.getDate() + i);
  const dateStr = startDate.toISOString().split("T")[0]; // YYYY-MM-DD

  let count = 0;
  if (shade === 1) count = 1 + Math.floor(rand(i) * 5);
  else if (shade === 2) count = 6 + Math.floor(rand(i) * 5);
  else if (shade === 3) count = 11 + Math.floor(rand(i) * 5);
  else if (shade === 4) count = 16 + Math.floor(rand(i) * 10);

  fallbackDays.push({
    date: dateStr,
    count,
    level: shade,
  });
}
const fallbackTotalContributions = fallbackDays.reduce((a, b) => a + b.count, 0);

export function ContributionHeatmap() {
  const [data, setData] = useState<ContributionsData | null>(null);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchContributions() {
      try {
        const response = await fetch("/api/github-contributions");
        if (!response.ok) {
          throw new Error(`API returned status ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (err) {
        console.warn("GitHub contributions API failed, using fallback mock data:", err);
        setData({
          totalContributions: fallbackTotalContributions,
          days: fallbackDays,
        });
      } finally {
        setLoading(false);
      }
    }

    fetchContributions();
  }, []);

  useEffect(() => {
    if (!loading && scrollRef.current) {
      // Scroll to the right end on mount so most recent activity shows first on mobile
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, [loading]);

  if (loading) {
    return (
      <section className="py-8">
        {/* Custom styles for intermediate zinc values in tailwind v4 context if needed, otherwise fallback */}
        <style>{`
          .bg-contrib-0 { background-color: #f1f5f9; }
          .bg-contrib-1 { background-color: #cbd5e1; }
          .bg-contrib-2 { background-color: #94a3b8; }
          .bg-contrib-3 { background-color: #64748b; }
          .bg-contrib-4 { background-color: #475569; }

          .dark .bg-contrib-0 { background-color: #1e293b; }
          .dark .bg-contrib-1 { background-color: #334155; }
          .dark .bg-contrib-2 { background-color: #475569; }
          .dark .bg-contrib-3 { background-color: #94a3b8; }
          .dark .bg-contrib-4 { background-color: #cbd5e1; }
        `}</style>

        {/* Shimmer layout matching the heatmap grid */}
        <div className="h-4 w-48 bg-zinc-200 dark:bg-zinc-800 rounded mb-4 animate-pulse" />
        <div className="overflow-x-auto scrollbar-none">
          <div className="min-w-[720px] pr-2">
            <div className="grid gap-[3px] mb-2 text-[10px] h-3" />
            <div
              className="grid gap-[3px]"
              style={{
                gridTemplateColumns: "repeat(52, minmax(0, 1fr))",
                gridTemplateRows: "repeat(7, 1fr)",
                gridAutoFlow: "column",
              }}
            >
              {Array.from({ length: 52 * 7 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-[2px] bg-zinc-200 dark:bg-zinc-800 animate-pulse"
                  style={{
                    animationDelay: `${(i % 13) * 80}ms`,
                    animationDuration: "1.2s",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-3 text-[10px] tracking-[0.15em] text-muted-foreground">
          <div className="h-3.5 w-48 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
          <div className="h-3.5 w-32 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
        </div>
      </section>
    );
  }

  if (!data) return null;

  const totalDays = data.days.length;
  const totalWeeks = Math.ceil(totalDays / 7);

  const monthLabels: { colIndex: number; label: string }[] = [];
  let lastMonth = "";
  for (let c = 0; c < totalWeeks; c++) {
    const dayIndex = c * 7;
    if (dayIndex < data.days.length) {
      const dateStr = data.days[dayIndex].date;
      const d = new Date(dateStr + "T00:00:00");
      const m = d.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
      if (m !== lastMonth) {
        monthLabels.push({ colIndex: c, label: m });
        lastMonth = m;
      }
    }
  }

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const startDay = data.days[0];
  const endDay = data.days[data.days.length - 1];
  let yearRange = "2025-26";
  if (startDay && endDay) {
    const startYear = new Date(startDay.date + "T00:00:00").getFullYear();
    const endYear = new Date(endDay.date + "T00:00:00").getFullYear();
    yearRange = `${startYear}-${(endYear % 100).toString().padStart(2, "0")}`;
  }

  return (
    <section className="py-8">
      {/* Custom styles for intermediate zinc values in tailwind v4 context if needed, otherwise fallback */}
      <style>{`
        .bg-contrib-0 { background-color: #f1f5f9; }
        .bg-contrib-1 { background-color: #cbd5e1; }
        .bg-contrib-2 { background-color: #94a3b8; }
        .bg-contrib-3 { background-color: #64748b; }
        .bg-contrib-4 { background-color: #475569; }

        .dark .bg-contrib-0 { background-color: #1e293b; }
        .dark .bg-contrib-1 { background-color: #334155; }
        .dark .bg-contrib-2 { background-color: #475569; }
        .dark .bg-contrib-3 { background-color: #94a3b8; }
        .dark .bg-contrib-4 { background-color: #cbd5e1; }
      `}</style>

      <div ref={scrollRef} className="overflow-x-auto scrollbar-none">
        <div className="min-w-[720px] pr-2">
          {/* Month Labels aligned to grid columns */}
          <div
            className="grid gap-[3px] mb-2 text-[10px] tracking-[0.15em] text-muted-foreground select-none"
            style={{
              gridTemplateColumns: `repeat(${totalWeeks}, minmax(0, 1fr))`,
            }}
          >
            {monthLabels.map(({ colIndex, label }, idx) => (
              <div
                key={`${label}-${idx}`}
                style={{
                  gridColumnStart: colIndex + 1,
                  gridColumnEnd: "span 4",
                }}
                className="text-left"
              >
                {label}
              </div>
            ))}
          </div>

          {/* Heatmap Grid */}
          <div
            className="grid gap-[3px]"
            style={{
              gridTemplateColumns: `repeat(${totalWeeks}, minmax(0, 1fr))`,
              gridTemplateRows: "repeat(7, 1fr)",
              gridAutoFlow: "column",
            }}
          >
            {data.days.map((cell, i) => (
              <div
                key={i}
                className={`aspect-square rounded-[2px] ${shades[cell.level]} relative group cursor-pointer`}
              >
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 hidden group-hover:block z-50 bg-zinc-900 dark:bg-zinc-800 text-zinc-100 text-[10px] font-mono py-1.5 px-3 rounded shadow-lg whitespace-nowrap pointer-events-none border border-zinc-700/50">
                  {cell.count} contribution{cell.count === 1 ? "" : "s"} on {formatDate(cell.date)}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-[4px] border-transparent border-t-zinc-900 dark:border-t-zinc-800" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 items-start sm:items-center justify-between mt-3 text-[10px] tracking-[0.15em] text-muted-foreground select-none">
        <span>{data.totalContributions.toLocaleString()} CONTRIBUTIONS · {yearRange}</span>
        <div className="flex items-center gap-1.5">
          <span>LESS</span>
          {shades.map((s, i) => (
            <span key={i} className={`h-2.5 w-2.5 rounded-[2px] ${s}`} />
          ))}
          <span>MORE</span>
        </div>
      </div>
    </section>
  );
}
