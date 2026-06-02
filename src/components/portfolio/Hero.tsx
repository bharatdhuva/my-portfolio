import { MapPin, Mail, User, Github, Globe, Twitter } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="pt-16 pb-10">
      <div className="flex items-center gap-4 mb-8">
        <div className="h-12 w-12 rounded-md bg-gradient-to-br from-amber-200 to-rose-300 flex items-center justify-center text-lg">
          🐱
        </div>
        <div>
          <h1 className="text-3xl font-medium tracking-tight text-foreground">Bharat Dhuva</h1>
          <p className="text-sm text-muted-foreground mt-0.5">Full Stack Developer</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <Meta label="LOCATION" icon={<MapPin className="h-3.5 w-3.5" />} value="Jaipur, India" />
        <Meta label="EMAIL" icon={<Mail className="h-3.5 w-3.5" />} value="hello@example.com" />
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
          { icon: Twitter, label: "Twitter" },
          { icon: Github, label: "GitHub" },
          { icon: Globe, label: "Website" },
          { icon: Mail, label: "Email" },
        ].map(({ icon: Icon, label }) => (
          <a
            key={label}
            href="#"
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
