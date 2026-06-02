import { Quote, Twitter, Mail, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="pt-12 pb-8 border-t border-border mt-12">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-start mb-10">
        <div className="flex gap-3">
          <Quote className="h-5 w-5 text-muted-foreground/60 shrink-0" />
          <div>
            <p className="text-sm italic text-foreground/80 leading-relaxed max-w-md">
              The only impossible journey is the one you never begin. Start building your digital presence today.
            </p>
            <p className="text-xs text-muted-foreground mt-2">— Tony Robbins</p>
          </div>
        </div>
        <div className="text-xs text-muted-foreground md:text-right">
          You are the <span className="text-foreground font-medium">17,366</span><sup>th</sup> visitor
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-border text-xs text-muted-foreground">
        <div>© 2026 Bharat.</div>
        <nav className="flex items-center gap-5">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#" className="hover:text-foreground transition-colors">Services</a>
          <a href="#projects" className="hover:text-foreground transition-colors">Components</a>
        </nav>
        <div className="flex items-center gap-1">
          {[Twitter, Mail, Github].map((Icon, i) => (
            <a key={i} href="#" className="p-1.5 rounded-md hover:bg-muted hover:text-foreground transition-colors">
              <Icon className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
