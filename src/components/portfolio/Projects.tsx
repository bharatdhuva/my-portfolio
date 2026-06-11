import { Github, ArrowUpRight } from "lucide-react";
import { TechIcon } from "./TechIcon";
import interviewosImg from "../../assets/interviewos.gif";
import khetseImg from "../../assets/khetse.gif";
import outlyImg from "../../assets/outly.png";
import bookstageImg from "../../assets/image.png";

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
    globe: "https://interviewos-bharatdhuva.vercel.app/",
  },
  {
    name: "Khetse",
    description:
      "Direct-to-consumer farm-fresh delivery platform connecting local farmers directly with urban consumers for fresh vegetables and dairy products. Built with a React Native mobile application and a robust Node.js/Express backend.",
    gradient: "from-green-600 via-emerald-700 to-teal-600",
    accent: "Farm-to-Home Fresh Produce & Dairy Platform",
    image: khetseImg,
    tech: ["RN", "Nd", "Ex", "Mg", "Fb", "Au", "As"],
    github: "https://github.com/bharatdhuva/Khetse---Farm-to-Home-",
    globe: "https://khetse-fresh.vercel.app/",
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
  {
    name: "Bookstage",
    description:
      "Built an end-to-end booking platform featuring movie/event/sports discovery, seat selection, and QR ticket confirmation with PDF download. Engineered a custom seat locking engine with a 5-minute expiry and auto-cleanup, and a modular REST API across 10+ modules with JWT authentication and Dockerized deployment.",
    gradient: "from-blue-600 via-indigo-700 to-cyan-600",
    accent: "Full-Stack Ticket Booking Platform",
    image: bookstageImg,
    tech: ["Re", "An", "Ss", "Dk", "Jw"],
    github: "https://github.com/bharatdhuva/Bookstage",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-10">
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
                <div className="flex items-center gap-3 text-muted-foreground">
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
                      className="flex items-center gap-0.5 hover:text-foreground transition-colors text-xs font-medium"
                    >
                      <span>Live</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
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
