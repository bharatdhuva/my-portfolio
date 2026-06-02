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
  "bg-muted",
  "bg-green-200 dark:bg-green-900",
  "bg-green-400 dark:bg-green-700",
  "bg-green-500 dark:bg-green-600",
  "bg-green-600 dark:bg-green-400",
];

export function ContributionHeatmap() {
  const total = cells.reduce<number>((a, b) => a + b * 3, 0);
  return (
    <section className="py-8">
      <div className="grid grid-cols-12 gap-0 mb-2 text-[10px] tracking-[0.15em] text-muted-foreground">
        {MONTHS.map((m) => (
          <div key={m}>{m}</div>
        ))}
      </div>
      <div className="overflow-x-auto scrollbar-none">
        <div
          className="grid gap-[3px] min-w-[720px] pr-2"
          style={{
            gridTemplateColumns: "repeat(52, minmax(0, 1fr))",
            gridTemplateRows: "repeat(7, 1fr)",
            gridAutoFlow: "column",
          }}
        >
          {cells.map((v, i) => (
            <div key={i} className={`aspect-square rounded-[2px] ${shades[v]}`} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between mt-3 text-[10px] tracking-[0.15em] text-muted-foreground">
        <span>{total} CONTRIBUTIONS · 2025-26</span>
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
