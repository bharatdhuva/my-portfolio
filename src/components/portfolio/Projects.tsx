import { Github, Globe } from "lucide-react";
import { TechIcon } from "./TechIcon";
import interviewosImg from "../assets/interviewos.png";
import outlyImg from "../assets/outly.png";

interface Project {
  name: string;
  description: string;
  gradient: string;
  accent: string;
  image?: string;
  tech: string[];
  github?: string;
  globe?: string;
}

const projects: Project[] = [
  {
    name: "InterviewOS",
    description:
      "Architected a scalable real-time collaborative interview platform featuring WebRTC P2P video, Y.js CRDT collaborative editor, shared whiteboard, room-scoped Socket.IO isolation, Monaco Editor, and a sandboxed Judge0 API code execution engine across 7 languages.",
    gradient: "from-indigo-600 via-purple-700 to-pink-600",
    accent: "Real-Time Collaborative Interview Platform",
    image: interviewosImg,
    tech: ["Re", "Nd", "Mg", "Wc", "Io", "J0"],
    github: "https://github.com/bharatdhuva/Interview-OS",
  },
  {
    name: "Outly",
    description:
      "Built an end-to-end LLM pipeline with GPT-4 that researches target companies from CSV and generates unique cold emails, auto-saved as Gmail drafts via Gmail API + OAuth 2.0. Implemented Bull + Redis distributed job queue for rate-limiting.",
    gradient: "from-amber-500 via-orange-600 to-red-600",
    accent: "AI-Powered Career & Email Automation",
    image: outlyImg,
    tech: ["Re", "Nd", "Rd", "Bq", "G4"],
    github: "https://github.com/bharatdhuva/Outly",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-4 my-6 bg-background">
      <h2 className="text-[10px] font-medium tracking-[0.2em] text-muted-foreground mb-5">
        FEATURED PROJECTS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((p) => (
          <article
            key={p.name}
            className="rounded-xl border border-border bg-card hover:border-foreground/20 transition-all duration-200 group overflow-hidden"
          >
            {/* ── Thumbnail ── */}
            <div className="bg-muted/50 border-b border-border p-3">
              {p.image ? (
                <div className="overflow-hidden rounded-md border border-border/60 shadow-sm">
                  <img
                    src={p.image}
                    alt={`${p.name} screenshot`}
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              ) : (
                /* Gradient fallback for Bookstage */
                <div
                  className={`rounded-md aspect-[16/10] bg-gradient-to-br ${p.gradient} flex items-center justify-center`}
                >
                  <span className="text-white/90 font-medium text-sm text-center px-4 leading-snug">
                    {p.accent}
                  </span>
                </div>
              )}
            </div>

            {/* ── Card body ── */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-foreground">{p.name}</h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.name} GitHub`}
                      className="hover:text-foreground transition-colors"
                    >
                      <Github className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {p.globe && (
                    <a
                      href={p.globe}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.name} live site`}
                      className="hover:text-foreground transition-colors"
                    >
                      <Globe className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed mb-4">{p.description}</p>

              <div className="flex items-center gap-2.5 flex-wrap">
                {p.tech.map((t) => (
                  <div key={t} className="transition-transform duration-150 hover:scale-110">
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
