import { useState, useEffect } from "react";
import { MapPin, Mail, User, Github, Globe, Twitter } from "lucide-react";

const ROLES = [
  "Software Engineer",
  "Full-Stack Developer",
  "Product Engineer",
  "Curious Builder",
  "Detail Oriented",
  "Freelancer"
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const show = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(show);
  }, [index]);

  useEffect(() => {
    if (!visible) {
      const next = setTimeout(() => {
        setIndex(i => (i + 1) % ROLES.length);
        setVisible(true);
      }, 450);
      return () => clearTimeout(next);
    }
  }, [visible]);

  return (
    <section id="home" className="pt-16 pb-10">
      <style>{`
        @keyframes roleIn {
          from { opacity: 0; filter: blur(6px); transform: translateY(6px); }
          to   { opacity: 1; filter: blur(0px); transform: translateY(0px); }
        }
        @keyframes roleOut {
          from { opacity: 1; filter: blur(0px); transform: translateY(0px); }
          to   { opacity: 0; filter: blur(6px); transform: translateY(-6px); }
        }
        .role-in  { animation: roleIn  420ms cubic-bezier(0,0,0.2,1) forwards; }
        .role-out { animation: roleOut 380ms cubic-bezier(0.4,0,1,1) forwards; }
      `}</style>

      <div className="flex items-center gap-4 mb-8">
        <div className="h-12 w-12 rounded-md bg-gradient-to-br from-amber-200 to-rose-300 flex items-center justify-center text-lg">
          🐱
        </div>
        <div>
          <h1 className="text-3xl font-medium tracking-tight text-foreground">Bharat Dhuva</h1>

          <div className="relative mt-0.5" style={{ height: "1.25rem" }}>
            <span
              key={`${index}-${visible}`}
              className={`absolute left-0 top-0 text-sm font-medium text-muted-foreground whitespace-nowrap ${visible ? "role-in" : "role-out"}`}
            >
              {ROLES[index]}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <Meta label="LOCATION" icon={<MapPin className="h-3.5 w-3.5" />} value="Vadodara, India" />
        <Meta
          label="EMAIL"
          icon={<Mail className="h-3.5 w-3.5" />}
          value="bharatdhuva27@gmail.com"
          href="mailto:bharatdhuva27@gmail.com"
        />
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

      <div className="flex items-center gap-4">
        {[
          {
            label: "X (Twitter)",
            href: "#",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            )
          },
          {
            label: "GitHub",
            href: "https://github.com/bharatdhuva",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            )
          },
          {
            label: "Website",
            href: "#",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            )
          },
          {
            label: "Email",
            href: "mailto:bharatdhuva27@gmail.com",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            )
          }
        ].map(({ label, href, icon }) => (
          <div key={label} className="relative inline-flex group">
            <a
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#737373] dark:text-[#a0a0a0] hover:text-[#111111] dark:hover:text-[#f0f0f0] transition-colors duration-150"
            >
              {icon}
            </a>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 text-[11px] font-medium font-sans rounded-md whitespace-nowrap pointer-events-none transition-all duration-150 ease-out z-50 opacity-0 translate-y-1 bg-zinc-800 text-zinc-100 shadow-md group-hover:opacity-100 group-hover:translate-y-0 border border-zinc-700/50">
              {label}
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 -mt-px"
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "5px solid transparent",
                  borderRight: "5px solid transparent",
                  borderTop: "5px solid #27272a"
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Meta({ label, icon, value, href }: { label: string; icon: React.ReactNode; value: string; href?: string }) {
  const content = (
    <>
      <span className="text-muted-foreground">{icon}</span>
      {value}
    </>
  );

  return (
    <div>
      <div className="text-[10px] font-medium tracking-[0.15em] text-muted-foreground mb-1.5">{label}</div>
      {href ? (
        <a href={href} className="flex items-center gap-1.5 text-sm text-foreground hover:underline transition-colors">
          {content}
        </a>
      ) : (
        <div className="flex items-center gap-1.5 text-sm text-foreground">
          {content}
        </div>
      )}
    </div>
  );
}