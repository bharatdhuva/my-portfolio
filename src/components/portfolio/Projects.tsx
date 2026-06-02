import { Github, Globe } from "lucide-react";

const projects = [
  {
    name: "Onavix Studio",
    description:
      "A web development agency specializing in creating visually appealing, conversion-focused websites for clients.",
    gradient: "from-indigo-900 via-purple-900 to-slate-900",
    accent: "Transforming Your Ideas into Stunning Websites",
    tech: ["Nx", "Re", "Tw", "Nd", "Fg"],
    links: ["globe"],
  },
  {
    name: "Wittyr",
    description:
      "An AI-powered platform that analyzes and roasts Reddit users based on their comment history, behavior, and posting patterns.",
    gradient: "from-rose-200 via-pink-100 to-orange-200",
    accent: "Your Reddit History, Finally Judged.",
    tech: ["Nx", "Tw", "Vt", "Ex", "Mg"],
    links: ["github", "globe"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-10">
      <h2 className="text-[10px] font-medium tracking-[0.2em] text-muted-foreground mb-5">
        FEATURED PROJECTS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p) => (
          <article
            key={p.name}
            className="rounded-lg border border-border overflow-hidden bg-card hover:border-foreground/20 transition-colors"
          >
            <div className={`aspect-[16/10] bg-gradient-to-br ${p.gradient} flex items-center justify-center p-6`}>
              <div className="text-center text-white/90 font-medium text-sm leading-snug">
                {p.accent}
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-foreground">{p.name}</h3>
                <div className="flex items-center gap-1 text-muted-foreground">
                  {p.links.includes("github") && <Github className="h-3.5 w-3.5" />}
                  {p.links.includes("globe") && <Globe className="h-3.5 w-3.5" />}
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{p.description}</p>
              <div className="flex gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="h-5 w-5 rounded bg-muted text-[9px] flex items-center justify-center text-foreground/70">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
