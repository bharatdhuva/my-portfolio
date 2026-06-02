import { Quote, Linkedin, Mail, Github } from "lucide-react";
import { useEffect, useState } from "react";

const socialLinks = [
  { Icon: Linkedin, href: "https://linkedin.com/in/bharatdhuva27" },
  { Icon: Mail, href: "mailto:bharatdhuva27@gmail.com" },
  { Icon: Github, href: "https://github.com/bharatdhuva" },
];

export function Footer() {
  return (
    <footer className="pt-12 pb-8 border-t border-border mt-12">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-start mb-10">
        <div className="flex gap-3">
          <Quote className="h-5 w-5 text-muted-foreground/60 shrink-0" />
          <div>
            <p className="text-sm italic text-foreground/80 leading-relaxed max-w-md">
              The only impossible journey is the one you never begin. Start building your digital
              presence today.
            </p>
            <p className="text-xs text-muted-foreground mt-2">— Tony Robbins</p>
          </div>
        </div>
        <div className="text-xs text-muted-foreground md:text-right">
          You are the <VisitorCounter /><sup>th</sup> visitor
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-border text-xs text-muted-foreground">
        <div>© 2026 Bharat Dhuva.</div>
        <nav className="flex items-center gap-5">
          <a href="#about" className="hover:text-foreground transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-foreground transition-colors">
            Projects
          </a>
        </nav>
        <div className="flex items-center gap-1">
          {socialLinks.map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="p-1.5 rounded-md hover:bg-muted hover:text-foreground transition-colors"
            >
              <Icon className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Check if they've already visited in this specific tab/session
    const hasVisited = sessionStorage.getItem("hasVisited");
    
    // Set it immediately so React Strict Mode double-mounts don't fire twice
    if (!hasVisited) {
      sessionStorage.setItem("hasVisited", "true");
    }

    // If new session, call '/up' to increment. If just refreshing, fetch current count without incrementing.
    const endpoint = hasVisited
      ? "https://api.counterapi.dev/v1/bharatdhuva/portfolio"
      : "https://api.counterapi.dev/v1/bharatdhuva/portfolio/up";

    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.count === "number") {
          const finalCount = data.count + 66;
          setCount(finalCount);
          // Cache the latest count locally so it persists if they reload with an adblocker on
          localStorage.setItem("visitorCount", finalCount.toString());
        } else {
          throw new Error("Invalid response format");
        }
      })
      .catch((err) => {
        console.error("Counter API error (likely blocked by AdBlocker):", err);
        // If Brave Shields or an ad-blocker blocks the request, fallback to the cached value or 67
        const cached = localStorage.getItem("visitorCount");
        setCount(cached ? parseInt(cached, 10) : 67);
      });
  }, []);

  if (count === null) {
    return <span className="text-foreground font-medium animate-pulse">...</span>;
  }

  return <span className="text-foreground font-medium">{count.toLocaleString()}</span>;
}
