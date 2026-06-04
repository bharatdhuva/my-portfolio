const MONTHS = ["JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC", "JAN", "FEB", "MAR", "APR", "MAY"];

// Seeded pseudo-random for stable output
function rand(n: number) {
  const x = Math.sin(n) * 10000;
  return x - Math.floor(x);
}

type Shade = 0 | 1 | 2 | 3 | 4;
function shadeFor(i: number): Shade {
  const r = rand(i);
  if (r < 0.55) return 0;
  if (r < 0.75) return 1;
  if (r < 0.88) return 2;
  if (r < 0.96) return 3;
  return 4;
}

const cells: Shade[] = [];
for (let i = 0; i < 52 * 7; i++) cells.push(shadeFor(i));

const shades = [
  "bg-contrib-0",
  "bg-contrib-1",
  "bg-contrib-2",
  "bg-contrib-3",
  "bg-contrib-4",
];

// Pre-calculate cell details for performance
const cellData = cells.map((v, i) => {
  const startDate = new Date(2025, 5, 1); // June 1, 2025
  startDate.setDate(startDate.getDate() + i);
  const dateStr = startDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  let count = 0;
  if (v === 1) count = 1 + Math.floor(rand(i) * 5);
  else if (v === 2) count = 6 + Math.floor(rand(i) * 5);
  else if (v === 3) count = 11 + Math.floor(rand(i) * 5);
  else if (v === 4) count = 16 + Math.floor(rand(i) * 10);

  return {
    shade: v,
    count,
    date: dateStr,
  };
});

const totalContributions = cellData.reduce((a, b) => a + b.count, 0);

export function ContributionHeatmap() {
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

      <div className="grid grid-cols-12 gap-0 mb-2 text-[10px] tracking-[0.15em] text-muted-foreground select-none">
        {MONTHS.map((m) => (
          <div key={m}>{m}</div>
        ))}
      </div>
      <div className="overflow-x-auto scrollbar-none pt-8 -mt-8">
        <div
          className="grid gap-[3px] min-w-[720px] pr-2"
          style={{
            gridTemplateColumns: "repeat(52, minmax(0, 1fr))",
            gridTemplateRows: "repeat(7, 1fr)",
            gridAutoFlow: "column",
          }}
        >
          {cellData.map((cell, i) => (
            <div
              key={i}
              className={`aspect-square rounded-[2px] ${shades[cell.shade]} relative group cursor-pointer`}
            >
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 hidden group-hover:block z-50 bg-zinc-900 dark:bg-zinc-800 text-zinc-100 text-[10px] font-mono py-1.5 px-3 rounded shadow-lg whitespace-nowrap pointer-events-none border border-zinc-700/50">
                {cell.count} contribution{cell.count === 1 ? "" : "s"} on {cell.date}
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-[4px] border-transparent border-t-zinc-900 dark:border-t-zinc-800"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between mt-3 text-[10px] tracking-[0.15em] text-muted-foreground select-none">
        <span>{totalContributions.toLocaleString()} CONTRIBUTIONS · 2025-26</span>
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
