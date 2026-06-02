import { Github, Globe } from "lucide-react";
import { TechIcon } from "./TechIcon";

const projects = [
  {
    name: "InterviewOS",
    description:
      "Architected a scalable real-time collaborative interview platform featuring WebRTC P2P video, Y.js CRDT collaborative editor, shared whiteboard, room-scoped Socket.IO isolation, Monaco Editor, and a sandboxed Judge0 API code execution engine across 7 languages.",
    gradient: "from-indigo-600 via-purple-700 to-pink-600",
    accent: "Real-Time Collaborative Interview Platform",
    tech: ["Re", "Nd", "Mg", "Wc", "Io", "J0"],
    links: ["github"],
  },
  {
    name: "Outly",
    description:
      "Built an end-to-end LLM pipeline with GPT-4 that researches target companies from CSV and generates unique cold emails, auto-saved as Gmail drafts via Gmail API + OAuth 2.0. Implemented Bull + Redis distributed job queue for rate-limiting.",
    gradient: "from-amber-500 via-orange-600 to-red-600",
    accent: "AI-Powered Career & Email Automation",
    tech: ["Re", "Nd", "Rd", "Bq", "G4"],
    links: ["github"],
  },
  {
    name: "Bookstage",
    description:
      "Engineered an end-to-end booking platform with movie/event/sports discovery, seat selection, a 5-minute expiry seat locking engine, QR ticket confirmations, and modular REST API.",
    gradient: "from-teal-600 via-emerald-700 to-slate-800",
    accent: "Seat-Locking Ticketing Engine",
    tech: ["Re", "An", "Ss", "Dk", "Jw"],
    links: ["github"],
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
            <div
              className={`aspect-[16/10] bg-gradient-to-br ${p.gradient} flex items-center justify-center p-6`}
            >
              <div className="text-center text-white/90 font-medium text-sm leading-snug">
                {p.accent}
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-foreground">{p.name}</h3>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  {p.links.includes("github") && (
                    <a
                      href="https://github.com/bharatdhuva"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground transition-colors"
                    >
                      <Github className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {p.links.includes("globe") && (
                    <a href="#" className="hover:text-foreground transition-colors">
                      <Globe className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">{p.description}</p>
              <div className="flex items-center gap-3">
                {p.tech.map((t) => (
                  <div
                    key={t}
                    className="transition-transform duration-150 hover:scale-110"
                  >
                    <TechIcon name={t} className="h-5 w-5" />
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
