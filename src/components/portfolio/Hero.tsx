import { useState, useEffect } from "react";
import { MapPin, Mail, User, Github, Globe, Twitter } from "lucide-react";

const ROLES = [
  "Software Engineer",
  "Full-Stack Developer",
  "Product Engineer",
  "Curious Builder",
  "Detail Oriented",
  "Freelancer",
];

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [animState, setAnimState] = useState<"idle" | "exit" | "enter">("idle");
  const [displayWord, setDisplayWord] = useState(ROLES[0]);

  useEffect(() => {
    if (animState === "idle") {
      const timer = setTimeout(() => {
        setAnimState("exit");
      }, 3000);
      return () => clearTimeout(timer);
    }

    if (animState === "exit") {
      const timer = setTimeout(() => {
        const nextIndex = (currentRoleIndex + 1) % ROLES.length;
        setCurrentRoleIndex(nextIndex);
        setDisplayWord(ROLES[nextIndex]);
        setAnimState("enter");
      }, 850); // Allow time for stagger exit animation (delays + transition)
      return () => clearTimeout(timer);
    }

    if (animState === "enter") {
      const timer = setTimeout(() => {
        setAnimState("idle");
      }, 950); // Allow time for stagger enter animation (delays + transition)
      return () => clearTimeout(timer);
    }
  }, [animState, currentRoleIndex]);

  return (
    <section id="home" className="pt-16 pb-10">
      {/* Keyframe Stagger Blur Animations */}
      <style>{`
        @keyframes blurOut {
          0% {
            filter: blur(0px);
            opacity: 1;
            transform: scale(1);
          }
          100% {
            filter: blur(12px);
            opacity: 0;
            transform: scale(0.92);
          }
        }

        @keyframes blurIn {
          0% {
            filter: blur(12px);
            opacity: 0;
            transform: scale(0.92);
          }
          100% {
            filter: blur(0px);
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-blur-out {
          animation: blurOut 450ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .animate-blur-in {
          animation: blurIn 500ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>

      <div className="flex items-center gap-4 mb-8">
        <div className="h-12 w-12 rounded-md bg-gradient-to-br from-amber-200 to-rose-300 flex items-center justify-center text-lg">
          🐱
        </div>
        <div>
          <h1 className="text-3xl font-medium tracking-tight text-foreground">Bharat Dhuva</h1>
          <div className="inline-grid font-medium align-baseline text-left text-sm text-muted-foreground mt-0.5 select-none">
            {/* Invisible spacer layers for all words to prevent layout shift */}
            {ROLES.map((role) => (
              <span
                key={role}
                className="invisible col-start-1 row-start-1 block whitespace-nowrap"
                aria-hidden="true"
              >
                {role}
              </span>
            ))}

            {/* The actual visible animated word */}
            <span className="col-start-1 row-start-1 block whitespace-nowrap">
              {displayWord.split("").map((char, charIdx) => {
                let animClass = "";
                if (animState === "exit") animClass = "animate-blur-out";
                else if (animState === "enter") animClass = "animate-blur-in";

                return (
                  <span
                    key={`${displayWord}-${charIdx}`}
                    className={`inline-block whitespace-pre ${animClass}`}
                    style={{
                      animationDelay: animState !== "idle" ? `${charIdx * 20}ms` : undefined,
                    }}
                  >
                    {char}
                  </span>
                );
              })}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <Meta label="LOCATION" icon={<MapPin className="h-3.5 w-3.5" />} value="Vadodara, India" />
        <Meta label="EMAIL" icon={<Mail className="h-3.5 w-3.5" />} value="bharatdhuva27@gmail.com" />
        <Meta label="PRONOUNS" icon={<User className="h-3.5 w-3.5" />} value="he/him" />
      </div>

      <p className="text-sm text-foreground/80 leading-relaxed max-w-2xl mb-6">
        I build full-stack web products end-to-end, obsessing over small details that make software
        feel right to use. Currently working with TypeScript, React, Next.js and Tailwind CSS.
      </p>

      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-6">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          Last played
        </span>
        <span>—</span>
        <span className="text-foreground/70">LEGACY · PIXY</span>
      </div>

      <div className="flex items-center gap-1">
        {[
          { icon: Twitter, label: "Twitter", href: "#" },
          { icon: Github, label: "GitHub", href: "https://github.com/bharatdhuva" },
          { icon: Globe, label: "Website", href: "#" },
          { icon: Mail, label: "Email", href: "mailto:bharatdhuva27@gmail.com" },
        ].map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </section>
  );
}

function Meta({ label, icon, value }: { label: string; icon: React.ReactNode; value: string }) {
  return (
    <div>
      <div className="text-[10px] font-medium tracking-[0.15em] text-muted-foreground mb-1.5">{label}</div>
      <div className="flex items-center gap-1.5 text-sm text-foreground">
        <span className="text-muted-foreground">{icon}</span>
        {value}
      </div>
    </div>
  );
}
