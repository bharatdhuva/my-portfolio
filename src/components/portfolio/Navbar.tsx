import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  // { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    // Default to light mode on first visit; only go dark if the user explicitly chose it before.
    const isDark = stored === "dark";
    if (stored == null) {
      localStorage.setItem("theme", "light");
    }
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const next = !dark;
    const doc = document as any;

    // Fallback if View Transitions API is not supported or user prefers reduced motion
    if (
      !doc.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDark(next);
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return;
    }

    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = doc.startViewTransition(() => {
      setDark(next);
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];
      document.documentElement.animate(
        {
          clipPath,
        },
        {
          duration: 500,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <header className="glass-nav">
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <ul className="flex items-center gap-4 sm:gap-6 text-sm">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="p-2 rounded-md hover:bg-muted transition-colors text-foreground/70"
        >
          {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
      </nav>
    </header>
  );
}
