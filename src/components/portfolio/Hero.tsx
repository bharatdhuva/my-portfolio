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

      <div className="flex items-center gap-1">
        {[
          { icon: Twitter, label: "Twitter", href: "#" },
          { icon: Github, label: "GitHub", href: "https://github.com/bharatdhuva" },
          { icon: Globe, label: "Website", href: "#" },
          { icon: Mail, label: "Email", href: "mailto:bharatdhuva27@gmail.com" },
        ].map(({ icon: Icon, label, href }) => (
          <a key={label} href={href} aria-label={label}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
            <Icon className="h-4 w-4" />
          </a>
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