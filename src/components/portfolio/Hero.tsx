import { useState, useEffect } from "react";
import { MapPin, Mail, User, Github, Globe, Twitter } from "lucide-react";

const ROLES = ["Software Developer", "Curious Builder", "Product Engineer"];

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
        setIndex((i) => (i + 1) % ROLES.length);
        setVisible(true);
      }, 450);
      return () => clearTimeout(next);
    }
  }, [visible]);

  return (
    <section id="home" className="relative pt-16 pb-10">
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
        .bg-lines { background-image: repeating-linear-gradient(90deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 24px); }
      `}</style>

      <div className="flex items-center gap-3 sm:gap-4 mb-8 min-w-0">
        <img
          src="/download (2).jpg"
          alt="Bharat Dhuva"
          className="h-11 w-11 sm:h-12 sm:w-12 flex-shrink-0 rounded-md object-cover border border-border shadow-sm"
        />
        <div className="min-w-0">
          <h1 className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground leading-tight">Bharat Dhuva</h1>

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

      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="h-full w-full bg-lines opacity-60 dark:opacity-30" />
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
        <Meta label="LOCATION" icon={<MapPin className="h-3.5 w-3.5" />} value="Vadodara, India" />
        <Meta
          label="EMAIL"
          icon={<Mail className="h-3.5 w-3.5" />}
          value="bharatdhuva27@gmail.com"
          href="mailto:bharatdhuva27@gmail.com"
        />
      </div>

      <p className="text-sm text-foreground/80 leading-relaxed max-w-2xl mb-6 break-words">
        Full-stack developer with a backend-first mindset. I build APIs that don't
        break, systems that scale, and products that actually ship. Currently working
        with Node.js · Express · Redis · Cloud. <br />
        Open - Internship | Freelance | Remote | Full-Time JObs Roles.
      </p>

      <SpotifyStatus />

      <div className="flex items-center flex-wrap gap-4">
        {[
          {
            label: "X (Twitter)",
            href: "https://x.com/mrcrotes",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            ),
          },
          {
            label: "LinkedIn",
            href: "https://linkedin.com/in/bharatdhuva27",
            icon: (
              <img
                src="https://api.iconify.design/logos:linkedin-icon.svg"
                alt="LinkedIn"
                width="18"
                height="18"
                className="grayscale group-hover:grayscale-0 transition-all duration-150 opacity-80 group-hover:opacity-100"
              />
            ),
          },
          {
            label: "GitHub",
            href: "https://github.com/bharatdhuva",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            ),
          },
          {
            label: "Email",
            href: "mailto:bharatdhuva27@gmail.com",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            ),
          },
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
                  borderTop: "5px solid #27272a",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Meta({
  label,
  icon,
  value,
  href,
}: {
  label: string;
  icon: React.ReactNode;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="text-muted-foreground">{icon}</span>
      {value}
    </>
  );

  return (
    <div>
      <div className="text-[10px] font-medium tracking-[0.15em] text-muted-foreground mb-1.5">
        {label}
      </div>
      {href ? (
        <a
          href={href}
          className="flex items-center gap-1.5 text-sm text-foreground hover:underline transition-colors"
        >
          {content}
        </a>
      ) : (
        <div className="flex items-center gap-1.5 text-sm text-foreground">{content}</div>
      )}
    </div>
  );
}

function SpotifyStatus() {
  const [data, setData] = useState<{ isPlaying: boolean; title: string; artist: string } | null>({
    isPlaying: true,
    title: "El Matador",
    artist: "Seedhe Maut, Hurricane",
  });

  // TODO: Replace with your actual Spotify API call here
  // useEffect(() => {
  //   fetch('YOUR_API_ENDPOINT').then(r => r.json()).then(setData);
  // }, []);

  if (!data) return null;

  return (
    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-6">
      <span className="flex items-center gap-1.5 text-[#1DB954] font-medium">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.3 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
        </svg>
        {data.isPlaying ? "Now Playing" : "Last Played"}
      </span>
      <span>—</span>
      <span className="text-foreground/70 truncate max-w-[160px] xs:max-w-[220px] sm:max-w-[320px]">
        {data.title} · {data.artist}
      </span>
    </div>
  );
}
