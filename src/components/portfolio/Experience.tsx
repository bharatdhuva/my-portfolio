const items = [
  {
    title: "Founder & Developer",
    company: "Stealth",
    location: "Stealth, Full-Time",
    range: "May 2026 — Present",
    active: true,
    description: "Currently building something new. Details under wraps for now.",
    bullets: [],
    tech: [],
  },
  {
    title: "Founder & Developer",
    company: "Onavix Studio",
    location: "Remote, Part-Time",
    range: "Feb 2024 — May 2026",
    active: false,
    description:
      "Founded and scaled a web development studio, leading end-to-end delivery of production websites and applications for clients across multiple industries.",
    bullets: [
      "Worked with 30+ clients end to end, from discovery and design to launch and ongoing iteration",
      "Drove up to 2x increase in conversions and volume by optimizing performance, SEO, and UX",
    ],
    tech: ["Nx", "Re", "Tw", "Nd", "Fg", "TS"],
  },
  {
    title: "Software Engineer",
    company: "Stealth Startup",
    location: "Denmark, Full-Time",
    range: "Mar 2025 — Feb 2026",
    active: false,
    description:
      "Joined as the founding engineer to architect and ship a live video streaming platform with real-time chat, taking the product from zero to a growing user base single-handedly.",
    bullets: [
      "Solo-built and scaled the platform to 40,000+ monthly unique visitors with sub-second start times",
      "Designed real-time chat over WebSockets supporting thousands of concurrent connections per stream",
      "Built an in house CDN network from scratch to cut cloud and bandwidth costs by ~80%",
    ],
    tech: ["Nd", "Ex", "Nx", "Re", "Pr", "TS"],
  },
];

export function Experience() {
  return (
    <section className="py-10">
      <h2 className="text-[10px] font-medium tracking-[0.2em] text-muted-foreground mb-6">EXPERIENCE</h2>
      <div className="space-y-8">
        {items.map((it, i) => (
          <div key={i} className="grid grid-cols-[auto_1fr] gap-4">
            <div className="pt-1.5">
              <span className={`block h-2 w-2 rounded-full ${it.active ? "bg-green-500" : "bg-muted-foreground/40"}`} />
            </div>
            <div>
              <div className="flex items-baseline justify-between gap-4 flex-wrap mb-1">
                <div className="text-sm text-foreground">
                  <span className="font-medium">{it.title}</span>
                  <span className="text-muted-foreground"> · </span>
                  <a href="#" className="text-foreground/80 hover:underline">{it.company}</a>
                </div>
                <div className="text-xs text-muted-foreground">{it.range}</div>
              </div>
              <div className="text-xs text-muted-foreground mb-3">{it.location}</div>
              <p className="text-sm text-foreground/80 leading-relaxed mb-3">{it.description}</p>
              {it.bullets.length > 0 && (
                <ul className="space-y-1.5 mb-4 list-disc pl-5">
                  {it.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-foreground/80">{b}</li>
                  ))}
                </ul>
              )}
              {it.tech.length > 0 && (
                <div className="flex gap-1.5">
                  {it.tech.map((t) => (
                    <span key={t} className="h-5 w-5 rounded bg-muted text-[9px] flex items-center justify-center text-foreground/70">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
