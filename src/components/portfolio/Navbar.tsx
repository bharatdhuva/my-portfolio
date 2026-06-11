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
  const [clickedLabel, setClickedLabel] = useState<string | null>(null);

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

  const handleLinkClick = (label: string) => {
    setClickedLabel(label);
    setTimeout(() => {
      setClickedLabel(null);
    }, 550);
  };

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
          {links.map((l) => {
            const isClicked = clickedLabel === l.label;
            return (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => handleLinkClick(l.label)}
                  className={`relative pb-1 inline-block text-foreground/80 hover:text-foreground transition-all duration-150 active:scale-95 active:opacity-90 cursor-pointer ${
                    isClicked
                      ? "animate-click-underline"
                      : "after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300 after:origin-bottom-right hover:after:origin-bottom-left hover:after:scale-x-100"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="p-2 rounded-md hover:bg-muted transition-all duration-150 active:scale-90 text-foreground/70 cursor-pointer"
        >
          {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
      </nav>
    </header>
  );
}
