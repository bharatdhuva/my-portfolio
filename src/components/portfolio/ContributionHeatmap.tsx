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

function getOrdinalSuffix(day: number): string {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:  return "st";
    case 2:  return "nd";
    case 3:  return "rd";
    default: return "th";
  }
}

export function ContributionHeatmap() {
  const [data, setData] = useState<ContributionsData | null>(null);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchContributions() {
      try {
        // Step 1: Try fetching from local/Vercel serverless proxy first
        const response = await fetch("/api/github-contributions");
        if (!response.ok) {
          throw new Error(`Proxy API returned status ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (err) {
        console.warn("Local/Proxy API failed, attempting to fetch from public scraper API:", err);
        try {
          // Step 2: Fallback to public contributions scraper API (enables dev mode & zero-token client preview)
          const response = await fetch("https://github-contributions-api.jogruber.de/v4/bharatdhuva?y=last");
          if (!response.ok) {
            throw new Error(`Scraper API returned status ${response.status}`);
          }
          const json = await response.json();
          const totalContributions = json.contributions.reduce(
            (sum: number, day: any) => sum + (day.count || 0),
            0
          );
          
          setData({
            totalContributions,
            days: json.contributions.map((day: any) => ({
              date: day.date,
              count: day.count || 0,
              level: (day.level ?? 0) as Shade,
            })),
          });
        } catch (scraperErr) {
          console.error("All contribution APIs failed. Falling back to local mock data:", scraperErr);
          // Step 3: Local mock fallback (safe recovery)
          setData({
            totalContributions: fallbackTotalContributions,
            days: fallbackDays,
          });
        }
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
        <style>{`
          .bg-contrib-0 { background-color: #ebedf0; }
          .bg-contrib-1 { background-color: #9be9a8; }
          .bg-contrib-2 { background-color: #40c463; }
          .bg-contrib-3 { background-color: #30a14e; }
          .bg-contrib-4 { background-color: #216e39; }

          .dark .bg-contrib-0 { background-color: #161b22; }
          .dark .bg-contrib-1 { background-color: #0e4429; }
          .dark .bg-contrib-2 { background-color: #006d32; }
          .dark .bg-contrib-3 { background-color: #26a641; }
          .dark .bg-contrib-4 { background-color: #39d353; }
        `}</style>

        <div className="h-4 w-48 bg-zinc-200 dark:bg-zinc-800 rounded mb-4 animate-pulse" />
        <div className="overflow-x-auto scrollbar-none border border-border/40 rounded-lg p-4 bg-muted/20 dark:bg-zinc-950/40">
          <div className="min-w-[760px] pr-2">
            <div className="grid gap-[3px] mb-2 text-[10px] h-3" />
            <div className="flex gap-2">
              <div className="w-6" />
              <div
                className="grid gap-[3px] flex-1"
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
    const month = d.toLocaleDateString("en-US", { month: "long" });
    const day = d.getDate();
    return `${month} ${day}${getOrdinalSuffix(day)}`;
  };

  return (
    <section className="py-8">
      {/* GitHub Official Contribution Theme Colors */}
      <style>{`
        .bg-contrib-0 { background-color: #ebedf0; }
        .bg-contrib-1 { background-color: #9be9a8; }
        .bg-contrib-2 { background-color: #40c463; }
        .bg-contrib-3 { background-color: #30a14e; }
        .bg-contrib-4 { background-color: #216e39; }

        .dark .bg-contrib-0 { background-color: #161b22; }
        .dark .bg-contrib-1 { background-color: #0e4429; }
        .dark .bg-contrib-2 { background-color: #006d32; }
        .dark .bg-contrib-3 { background-color: #26a641; }
        .dark .bg-contrib-4 { background-color: #39d353; }
      `}</style>

      {/* Header aligned like GitHub: "288 contributions in the last year" */}
      <div className="mb-3 text-sm font-normal text-foreground select-none">
        {data.totalContributions.toLocaleString()} contributions in the last year
      </div>

      {/* Main Heatmap Container */}
      <div ref={scrollRef} className="overflow-x-auto scrollbar-none border border-border/40 rounded-lg p-4 bg-muted/20 dark:bg-zinc-950/40">
        <div className="min-w-[760px] pr-2">
          <div className="flex gap-2 items-stretch">
            {/* Weekdays Row Labels (aligned to rows) */}
            <div className="flex flex-col justify-end pt-5 pb-[2px]">
              <div
                className="grid gap-[3px] text-[9px] font-medium text-muted-foreground select-none"
                style={{
                  gridTemplateRows: "repeat(7, 1fr)",
                  height: "100%",
                }}
              >
                <div className="flex items-center h-full"></div> {/* Sun */}
                <div className="flex items-center h-full pr-1">Mon</div> {/* Mon */}
                <div className="flex items-center h-full"></div> {/* Tue */}
                <div className="flex items-center h-full pr-1">Wed</div> {/* Wed */}
                <div className="flex items-center h-full"></div> {/* Thu */}
                <div className="flex items-center h-full pr-1">Fri</div> {/* Fri */}
                <div className="flex items-center h-full"></div> {/* Sat */}
              </div>
            </div>

            {/* Heatmap Grid + Month Labels Column */}
            <div className="flex-1">
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
                {data.days.map((cell, i) => {
                  const countText = cell.count === 0 ? "No" : cell.count;
                  const contributionText = cell.count === 1 ? "contribution" : "contributions";
                  return (
                    <div
                      key={i}
                      className={`aspect-square rounded-[2px] ${shades[cell.level]} relative group cursor-pointer`}
                    >
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 hidden group-hover:block z-50 bg-zinc-900 dark:bg-zinc-800 text-zinc-100 text-[10px] font-mono py-1.5 px-3 rounded shadow-lg whitespace-nowrap pointer-events-none border border-zinc-700/50">
                        {countText} {contributionText} on {formatDate(cell.date)}.
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-[4px] border-transparent border-t-zinc-900 dark:border-t-zinc-800" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Legend */}
          <div className="flex items-center justify-end gap-1.5 mt-3 text-[10px] tracking-[0.15em] text-muted-foreground select-none">
            <span>LESS</span>
            {shades.map((s, i) => (
              <span key={i} className={`h-2.5 w-2.5 rounded-[2px] ${s}`} />
            ))}
            <span>MORE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
