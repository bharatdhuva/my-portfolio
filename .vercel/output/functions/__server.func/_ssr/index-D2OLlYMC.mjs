import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as Sun, M as Moon, a as MapPin, b as Mail, G as Github, c as Globe, L as Linkedin, A as ArrowUpRight, C as Clock, d as Check, e as ArrowRight, Q as Quote } from "../_libs/lucide-react.mjs";
const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" }
];
function Navbar() {
  const [dark, setDark] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored === "dark";
    if (stored == null) {
      localStorage.setItem("theme", "light");
    }
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "glass-nav", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex items-center gap-4 sm:gap-6 text-sm", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: l.href,
        className: "text-foreground/80 hover:text-foreground transition-colors",
        children: l.label
      }
    ) }, l.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: toggle,
        "aria-label": "Toggle theme",
        className: "p-2 rounded-md hover:bg-muted transition-colors text-foreground/70",
        children: dark ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" })
      }
    )
  ] }) });
}
const ROLES = ["Software Developer", "Curious Buffilder", "Product Engineer"];
function Hero() {
  const [index, setIndex] = reactExports.useState(0);
  const [visible, setVisible] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const show = setTimeout(() => setVisible(false), 3e3);
    return () => clearTimeout(show);
  }, [index]);
  reactExports.useEffect(() => {
    if (!visible) {
      const next = setTimeout(() => {
        setIndex((i) => (i + 1) % ROLES.length);
        setVisible(true);
      }, 450);
      return () => clearTimeout(next);
    }
  }, [visible]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "home", className: "relative pt-16 pb-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
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
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 sm:gap-4 mb-8 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/download (2).jpg",
          alt: "Bharat Dhuva",
          className: "h-11 w-11 sm:h-12 sm:w-12 flex-shrink-0 rounded-md object-cover border border-border shadow-sm"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl sm:text-3xl font-medium tracking-tight text-foreground leading-tight", children: "Bharat Dhuva" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-0.5", style: { height: "1.25rem" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: `absolute left-0 top-0 text-sm font-medium text-muted-foreground whitespace-nowrap ${visible ? "role-in" : "role-out"}`,
            children: ROLES[index]
          },
          `${index}-${visible}`
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none -z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-full bg-lines opacity-60 dark:opacity-30" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Meta, { label: "LOCATION", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5" }), value: "Vadodara, India" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Meta,
        {
          label: "EMAIL",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5" }),
          value: "bharatdhuva27@gmail.com",
          href: "mailto:bharatdhuva27@gmail.com"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground/80 leading-relaxed max-w-2xl mb-6 break-words", children: [
      "Full-stack developer with a backend-first mindset. I build APIs that don't break, systems that scale, and products that actually ship. Currently working with Node.js · Express · Redis · Cloud. ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "Open - Internship | Freelance | Remote | Full-Time Roles."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SpotifyStatus, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center flex-wrap gap-4", children: [
      {
        label: "X (Twitter)",
        href: "https://x.com/mrcrotes",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" })
          }
        )
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/bharatdhuva27",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "https://api.iconify.design/logos:linkedin-icon.svg",
            alt: "LinkedIn",
            width: "18",
            height: "18",
            className: "grayscale group-hover:grayscale-0 transition-all duration-150 opacity-80 group-hover:opacity-100"
          }
        )
      },
      {
        label: "GitHub",
        href: "https://github.com/bharatdhuva",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" })
          }
        )
      },
      {
        label: "Email",
        href: "mailto:bharatdhuva27@gmail.com",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" })
            ]
          }
        )
      }
    ].map(({ label, href, icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-flex group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href,
          target: href.startsWith("mailto:") ? void 0 : "_blank",
          rel: "noopener noreferrer",
          "aria-label": label,
          className: "text-[#737373] dark:text-[#a0a0a0] hover:text-[#111111] dark:hover:text-[#f0f0f0] transition-colors duration-150",
          children: icon
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 text-[11px] font-medium font-sans rounded-md whitespace-nowrap pointer-events-none transition-all duration-150 ease-out z-50 opacity-0 translate-y-1 bg-zinc-800 text-zinc-100 shadow-md group-hover:opacity-100 group-hover:translate-y-0 border border-zinc-700/50", children: [
        label,
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-full left-1/2 -translate-x-1/2 -mt-px",
            style: {
              width: 0,
              height: 0,
              borderLeft: "5px solid transparent",
              borderRight: "5px solid transparent",
              borderTop: "5px solid #27272a"
            }
          }
        )
      ] })
    ] }, label)) })
  ] });
}
function Meta({
  label,
  icon,
  value,
  href
}) {
  const content = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: icon }),
    value
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-medium tracking-[0.15em] text-muted-foreground mb-1.5", children: label }),
    href ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href,
        className: "flex items-center gap-1.5 text-sm text-foreground hover:underline transition-colors",
        children: content
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5 text-sm text-foreground", children: content })
  ] });
}
function SpotifyStatus() {
  const [data, setData] = reactExports.useState({
    isPlaying: true,
    title: "El Matador",
    artist: "Seedhe Maut, Hurricane"
  });
  if (!data) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-muted-foreground mb-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-[#1DB954] font-medium", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: "w-3.5 h-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.3 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" }) }),
      data.isPlaying ? "Now Playing" : "Last Played"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "—" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground/70 truncate max-w-[160px] xs:max-w-[220px] sm:max-w-[320px]", children: [
      data.title,
      " · ",
      data.artist
    ] })
  ] });
}
const MONTHS = ["JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC", "JAN", "FEB", "MAR", "APR", "MAY"];
function rand(n) {
  const x = Math.sin(n) * 1e4;
  return x - Math.floor(x);
}
function shadeFor(i) {
  const r = rand(i);
  if (r < 0.55) return 0;
  if (r < 0.75) return 1;
  if (r < 0.88) return 2;
  if (r < 0.96) return 3;
  return 4;
}
const cells = [];
for (let i = 0; i < 52 * 7; i++) cells.push(shadeFor(i));
const shades = [
  "bg-muted",
  "bg-green-200 dark:bg-green-900",
  "bg-green-400 dark:bg-green-700",
  "bg-green-500 dark:bg-green-600",
  "bg-green-600 dark:bg-green-400"
];
function ContributionHeatmap() {
  const total = cells.reduce((a, b) => a + b * 3, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-12 gap-0 mb-2 text-[10px] tracking-[0.15em] text-muted-foreground", children: MONTHS.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: m }, m)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid gap-[3px] min-w-[720px] pr-2",
        style: {
          gridTemplateColumns: "repeat(52, minmax(0, 1fr))",
          gridTemplateRows: "repeat(7, 1fr)",
          gridAutoFlow: "column"
        },
        children: cells.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `aspect-square rounded-[2px] ${shades[v]}` }, i))
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-3 text-[10px] tracking-[0.15em] text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        total,
        " CONTRIBUTIONS · 2025-26"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "LESS" }),
        shades.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-2.5 w-2.5 rounded-[2px] ${s}` }, i)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "MORE" })
      ] })
    ] })
  ] });
}
const deviconMap = {
  JS: "javascript/javascript-original",
  JAVASCRIPT: "javascript/javascript-original",
  TS: "typescript/typescript-original",
  TYPESCRIPT: "typescript/typescript-original",
  JV: "java/java-original",
  JAVA: "java/java-original",
  "C#": "csharp/csharp-original",
  CS: "csharp/csharp-original",
  CSHARP: "csharp/csharp-original",
  RE: "react/react-original",
  REACT: "react/react-original",
  "REACT.JS": "react/react-original",
  ND: "nodejs/nodejs-original",
  NODE: "nodejs/nodejs-original",
  "NODE.JS": "nodejs/nodejs-original",
  EX: "express/express-original",
  EXPRESS: "express/express-original",
  "EXPRESS.JS": "express/express-original",
  MG: "mongodb/mongodb-original",
  MONGODB: "mongodb/mongodb-original",
  MY: "mysql/mysql-original",
  MYSQL: "mysql/mysql-original",
  RD: "redis/redis-original",
  REDIS: "redis/redis-original",
  DK: "docker/docker-original",
  DOCKER: "docker/docker-original",
  K8S: "kubernetes/kubernetes-original",
  KUBERNETES: "kubernetes/kubernetes-original",
  GH: "github/github-original",
  GITHUB: "github/github-original",
  PM: "postman/postman-original",
  POSTMAN: "postman/postman-original",
  SS: "microsoftsqlserver/microsoftsqlserver-original",
  "SQL SERVER": "microsoftsqlserver/microsoftsqlserver-original",
  MICROSOFTSQLSERVER: "microsoftsqlserver/microsoftsqlserver-original"
};
const slugMap = {
  JS: "javascript",
  JAVASCRIPT: "javascript",
  TS: "typescript",
  TYPESCRIPT: "typescript",
  PY: "python",
  PYTHON: "python",
  JV: "java",
  JAVA: "java",
  SQ: "sqlite",
  SQL: "sqlite",
  "C#": "csharp",
  CS: "csharp",
  CSHARP: "csharp",
  RE: "react",
  REACT: "react",
  "REACT.JS": "react",
  ND: "nodedotjs",
  NODE: "nodedotjs",
  "NODE.JS": "nodedotjs",
  EX: "express",
  EXPRESS: "express",
  "EXPRESS.JS": "express",
  AN: "dotnet",
  "ASP.NET": "dotnet",
  "ASP.NET CORE": "dotnet",
  IO: "socketdotio",
  "SOCKET.IO": "socketdotio",
  WC: "webrtc",
  WEBRTC: "webrtc",
  MG: "mongodb",
  MONGODB: "mongodb",
  PG: "postgresql",
  POSTGRESQL: "postgresql",
  MY: "mysql",
  MYSQL: "mysql",
  RD: "redis",
  REDIS: "redis",
  SS: "microsoftsqlserver",
  "SQL SERVER": "microsoftsqlserver",
  G4: "openai",
  "GPT-4": "openai",
  OPENAI: "openai",
  GQ: "groq",
  GROQ: "groq",
  GM: "gmail",
  GMAIL: "gmail",
  O2: "openid",
  "OAUTH 2.0": "openid",
  JW: "jsonwebtokens",
  JWT: "jsonwebtokens",
  GT: "git",
  GIT: "git",
  GH: "github",
  GITHUB: "github",
  DK: "docker",
  DOCKER: "docker",
  PM: "postman",
  POSTMAN: "postman",
  K8S: "kubernetes",
  KUBERNETES: "kubernetes"
};
const darkInvertSlugs = ["express", "socketdotio", "webrtc", "jsonwebtokens", "github", "openai", "express/express-original", "github/github-original"];
const fullNameMap = {
  JS: "JavaScript",
  JAVASCRIPT: "JavaScript",
  TS: "TypeScript",
  TYPESCRIPT: "TypeScript",
  PY: "Python",
  PYTHON: "Python",
  JV: "Java",
  JAVA: "Java",
  SQ: "SQL",
  SQL: "SQL",
  "C#": "C#",
  CS: "C#",
  CSHARP: "C#",
  RE: "React.js",
  REACT: "React.js",
  "REACT.JS": "React.js",
  ND: "Node.js",
  NODE: "Node.js",
  "NODE.JS": "Node.js",
  EX: "Express.js",
  EXPRESS: "Express.js",
  "EXPRESS.JS": "Express.js",
  AN: "ASP.NET Core",
  IO: "Socket.IO",
  WC: "WebRTC",
  MG: "MongoDB",
  MONGODB: "MongoDB",
  PG: "PostgreSQL",
  POSTGRESQL: "PostgreSQL",
  MY: "MySQL",
  MYSQL: "MySQL",
  RD: "Redis",
  REDIS: "Redis",
  SS: "SQL Server",
  G4: "GPT-4",
  GQ: "Groq API",
  J0: "Judge0",
  JUDGE0: "Judge0",
  GM: "Gmail API",
  O2: "OAuth 2.0",
  JW: "JWT",
  JWT: "JWT",
  GT: "Git",
  GIT: "Git",
  GH: "GitHub",
  GITHUB: "GitHub",
  DK: "Docker",
  DOCKER: "Docker",
  PM: "Postman",
  POSTMAN: "Postman",
  K8S: "Kubernetes",
  KUBERNETES: "Kubernetes",
  BQ: "Bull Queue"
};
function TechIcon({ name, className = "h-5 w-5", showTooltip = true }) {
  const norm = name.trim().toUpperCase();
  const fullName = fullNameMap[norm] || name;
  let iconNode;
  const deviconPath = deviconMap[norm];
  if (deviconPath) {
    const isInverted = darkInvertSlugs.includes(deviconPath);
    iconNode = /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${deviconPath}.svg`,
        alt: name,
        className: `${className} ${isInverted ? "dark:invert" : ""}`,
        loading: "lazy"
      }
    );
  } else {
    const slug = slugMap[norm];
    if (slug) {
      const isInverted = darkInvertSlugs.includes(slug);
      let bgStyle = "";
      if (slug === "javascript") {
        bgStyle = "bg-black rounded-[4px]";
      } else if (slug === "typescript") {
        bgStyle = "bg-white rounded-[4px]";
      }
      if (slug === "openai") {
        iconNode = /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/openai.svg",
            alt: name,
            className: `${className} dark:invert`,
            loading: "lazy"
          }
        );
      } else {
        iconNode = /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: `https://cdn.simpleicons.org/${slug}`,
            alt: name,
            className: `${className} ${isInverted ? "dark:invert" : ""} ${bgStyle}`,
            loading: "lazy"
          }
        );
      }
    } else if (norm === "J0" || norm === "JUDGE0") {
      iconNode = /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { role: "img", viewBox: "0 0 24 24", className, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          d: "M4 2h16c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm2 6v8l4-4zm6 5.5l1-1h6v1zm0-3h7v1h-7zm0-3h7v1h-7z",
          fill: "#607D8B"
        }
      ) });
    } else if (norm === "BQ" || norm === "BULL QUEUE" || norm === "BULL") {
      iconNode = /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { role: "img", viewBox: "0 0 24 24", className, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14H7v-2h6v2zm4-4H7v-2h10v2zm0-4H7V6h10v2z",
          fill: "#6A7B83"
        }
      ) });
    } else {
      iconNode = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-muted-foreground tracking-tighter", children: name.slice(0, 2).toUpperCase() });
    }
  }
  if (!showTooltip) {
    return iconNode;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group inline-flex items-center justify-center", children: [
    iconNode,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 text-[11px] font-medium font-sans rounded bg-zinc-900 dark:bg-zinc-800 text-zinc-100 shadow-md opacity-0 translate-y-1 pointer-events-none transition-all duration-150 ease-out z-50 group-hover:opacity-100 group-hover:translate-y-0 border border-zinc-800 dark:border-zinc-700/50 whitespace-nowrap", children: [
      fullName,
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-full left-1/2 -translate-x-1/2 border-[4px] border-transparent border-t-zinc-900 dark:border-t-zinc-800" })
    ] })
  ] });
}
const techs = [
  // Web Tech Stack (JS, TS, React, Node, Express)
  { name: "JS", fullName: "JavaScript" },
  { name: "TS", fullName: "TypeScript" },
  { name: "Re", fullName: "React.js" },
  { name: "Nd", fullName: "Node.js" },
  { name: "Ex", fullName: "Express.js" },
  // Other Languages
  { name: "Jv", fullName: "Java" },
  { name: "Cs", fullName: "C#" },
  // Databases
  { name: "Mg", fullName: "MongoDB" },
  { name: "My", fullName: "MySQL" },
  { name: "Rd", fullName: "Redis" },
  // DevOps & Developer Tools
  { name: "Dk", fullName: "Docker" },
  { name: "K8s", fullName: "Kubernetes" },
  { name: "Gh", fullName: "GitHub" },
  { name: "Pm", fullName: "Postman" }
];
function TechStack() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "about", className: "py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[10px] font-medium tracking-[0.2em] text-muted-foreground mb-5", children: "TECH STACK" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-x-5 gap-y-4", children: techs.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "transition-transform duration-200 hover:-translate-y-1 hover:scale-110 cursor-pointer",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(TechIcon, { name: t.name, className: "h-8 w-8" })
      },
      i
    )) })
  ] });
}
const interviewosImg = "/assets/interviewos-DpKkvGfS.png";
const outlyImg = "/assets/outly-DmrMUOiy.png";
const projects = [
  {
    name: "InterviewOS",
    description: "Architected a scalable real-time collaborative interview platform featuring WebRTC P2P video, Y.js CRDT collaborative editor, shared whiteboard, room-scoped Socket.IO isolation, Monaco Editor, and a sandboxed Judge0 API code execution engine across 7 languages.",
    gradient: "from-indigo-600 via-purple-700 to-pink-600",
    accent: "Real-Time Collaborative Interview Platform",
    image: interviewosImg,
    tech: ["Re", "Nd", "Mg", "Wc", "Io", "J0"],
    links: ["github"]
  },
  {
    name: "Outly",
    description: "Built an end-to-end LLM pipeline with GPT-4 that researches target companies from CSV and generates unique cold emails, auto-saved as Gmail drafts via Gmail API + OAuth 2.0. Implemented Bull + Redis distributed job queue for rate-limiting.",
    gradient: "from-amber-500 via-orange-600 to-red-600",
    accent: "AI-Powered Career & Email Automation",
    image: outlyImg,
    tech: ["Re", "Nd", "Rd", "Bq", "G4"],
    links: ["github"]
  },
  {
    name: "Bookstage",
    description: "Engineered an end-to-end booking platform with movie/event/sports discovery, seat selection, a 5-minute expiry seat locking engine, QR ticket confirmations, and modular REST API.",
    gradient: "from-teal-600 via-emerald-700 to-slate-800",
    accent: "Seat-Locking Ticketing Engine",
    image: null,
    tech: ["Re", "An", "Ss", "Dk", "Jw"],
    links: ["github"]
  }
];
function Projects() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "projects", className: "py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[10px] font-medium tracking-[0.2em] text-muted-foreground mb-5", children: "FEATURED PROJECTS" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: projects.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "article",
      {
        className: "rounded-xl border border-border bg-card hover:border-foreground/20 transition-all duration-200 group overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/50 border-b border-border p-3", children: p.image ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-md border border-border/60 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: p.image,
              alt: `${p.name} screenshot`,
              className: "w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
            }
          ) }) : (
            /* Gradient fallback for Bookstage */
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `rounded-md aspect-[16/10] bg-gradient-to-br ${p.gradient} flex items-center justify-center`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/90 font-medium text-sm text-center px-4 leading-snug", children: p.accent })
              }
            )
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground", children: p.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
                p.links.includes("github") && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "https://github.com/bharatdhuva",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label": `${p.name} GitHub`,
                    className: "hover:text-foreground transition-colors",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-3.5 w-3.5" })
                  }
                ),
                p.links.includes("globe") && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "#",
                    "aria-label": `${p.name} live site`,
                    className: "hover:text-foreground transition-colors",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-3.5 w-3.5" })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed mb-4", children: p.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2.5 flex-wrap", children: p.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "transition-transform duration-150 hover:scale-110",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(TechIcon, { name: t, className: "h-5 w-5" })
              },
              t
            )) })
          ] })
        ]
      },
      p.name
    )) })
  ] });
}
const items = [
  {
    title: "Software Development Intern",
    company: "YV Thinkers",
    location: "Onsite",
    range: "Jul 2023 — Sep 2023",
    active: false,
    description: "MERN | REST APIs | JWT | MongoDB",
    bullets: [
      "Built full-stack CRM using MERN stack for Admin and Customer-facing workflows — designed scalable REST APIs for order tracking, data management, and admin controls handling concurrent requests.",
      "Implemented role-based JWT authentication with dual-token strategy and applied SOLID principles with clean architecture — fully reviewable and maintainable by a team.",
      "Automated customer record lifecycle via MongoDB aggregation pipelines — reducing manual data entry by ~70% across core CRM workflows."
    ],
    tech: ["JS", "Re", "Nd", "Ex", "Mg", "Jw"]
  }
];
function Experience() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[10px] font-medium tracking-[0.2em] text-muted-foreground mb-6", children: "EXPERIENCE" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[auto_1fr] gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: `block h-2 w-2 rounded-full ${it.active ? "bg-green-500" : "bg-muted-foreground/40"}`
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between gap-4 flex-wrap mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: it.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: " · " }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80", children: it.company })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: it.range })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-3", children: it.location }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80 leading-relaxed mb-3", children: it.description }),
        it.bullets.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5 mb-4 list-disc pl-5", children: it.bullets.map((b, j) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-sm text-foreground/80", children: b }, j)) }),
        it.tech.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: it.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "transition-transform duration-150 hover:scale-110",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(TechIcon, { name: t, className: "h-5 w-5" })
          },
          t
        )) })
      ] })
    ] }, i)) })
  ] });
}
const educationItems = [
  {
    degree: "Bachelor of Engineering in Computer Science & Engineering",
    institution: "The Maharaja Sayajirao University of Baroda, Vadodara",
    range: "2024 — 2027",
    extra: "Expected Graduation: May 2027"
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "(GTU) Government Polytechnic, Jamnagar",
    range: "2021 — 2024",
    extra: "CGPA: 7.51"
  }
];
function Education() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-10 border-t border-border/50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[10px] font-medium tracking-[0.2em] text-muted-foreground mb-6", children: "EDUCATION" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: educationItems.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[auto_1fr] gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-2 w-2 rounded-full bg-muted-foreground/40" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between gap-4 flex-wrap mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium block", children: item.degree }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/80 text-xs", children: item.institution })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: item.range })
        ] }),
        item.extra && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground italic", children: item.extra })
      ] })
    ] }, i)) })
  ] });
}
const options = [
  {
    icon: Mail,
    title: "bharatdhuva27@gmail.com",
    subtitle: "Quick inquiries & questions",
    href: "mailto:bharatdhuva27@gmail.com"
  },
  {
    icon: Linkedin,
    title: "Connect on LinkedIn",
    subtitle: "linkedin.com/in/bharatdhuva27",
    href: "https://linkedin.com/in/bharatdhuva27"
  },
  {
    icon: Github,
    title: "Follow on GitHub",
    subtitle: "github.com/bharatdhuva",
    href: "https://github.com/bharatdhuva"
  }
];
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[10px] font-medium tracking-[0.2em] text-muted-foreground mb-6", children: "LET'S WORK TOGETHER" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-medium text-foreground mb-1", children: "Get in Touch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: "Choose your preferred method to connect and let's discuss your project." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: options.map(({ icon: Icon, title, subtitle, href }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href,
            className: "flex items-center gap-3 p-3 rounded-md border border-border hover:bg-muted transition-colors group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-foreground", children: title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: subtitle })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground" })
            ]
          },
          title
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-1.5 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
            " Replies within 24 hours"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3" }),
            " Open to remote, freelance & Full-time"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: (e) => e.preventDefault(),
          className: "rounded-lg border border-border p-5 flex flex-col",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-medium text-foreground mb-1", children: "Send a Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: "Prefer to write? Fill out the form and I'll get back to you within 24 hours." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Full Name",
                  className: "w-full px-3 py-2.5 text-sm rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-foreground/20"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "email",
                  placeholder: "Email Address",
                  className: "w-full px-3 py-2.5 text-sm rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-foreground/20"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  rows: 5,
                  placeholder: "Your Message",
                  className: "w-full px-3 py-2.5 text-sm rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-foreground/20 resize-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "submit",
                className: "mt-3 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-md bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors",
                children: [
                  "Send Message ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
                ]
              }
            )
          ]
        }
      )
    ] })
  ] });
}
const socialLinks = [
  { Icon: Linkedin, href: "https://linkedin.com/in/bharatdhuva27" },
  { Icon: Mail, href: "mailto:bharatdhuva27@gmail.com" },
  { Icon: Github, href: "https://github.com/bharatdhuva" }
];
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "pt-12 pb-8 border-t border-border mt-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-start mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-5 w-5 text-muted-foreground/60 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm italic text-foreground/80 leading-relaxed max-w-md", children: "The only impossible journey is the one you never begin. Start building your digital presence today." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2", children: "— Tony Robbins" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground md:text-right", children: [
        "You are the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(VisitorCounter, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("sup", { children: "th" }),
        " visitor"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-border text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "© 2026 Bharat Dhuva." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex items-center gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#about", className: "hover:text-foreground transition-colors", children: "About" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#projects", className: "hover:text-foreground transition-colors", children: "Projects" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1", children: socialLinks.map(({ Icon, href }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href,
          target: href.startsWith("mailto:") ? void 0 : "_blank",
          rel: "noopener noreferrer",
          className: "p-1.5 rounded-md hover:bg-muted hover:text-foreground transition-colors",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5" })
        },
        i
      )) })
    ] })
  ] });
}
function VisitorCounter() {
  const [count, setCount] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      sessionStorage.setItem("hasVisited", "true");
    }
    const endpoint = hasVisited ? "https://api.counterapi.dev/v1/bharatdhuva/portfolio" : "https://api.counterapi.dev/v1/bharatdhuva/portfolio/up";
    fetch(endpoint).then((res) => res.json()).then((data) => {
      if (data && typeof data.count === "number") {
        const finalCount = data.count + 66;
        setCount(finalCount);
        localStorage.setItem("visitorCount", finalCount.toString());
      } else {
        throw new Error("Invalid response format");
      }
    }).catch((err) => {
      console.error("Counter API error (likely blocked by AdBlocker):", err);
      const cached = localStorage.getItem("visitorCount");
      setCount(cached ? parseInt(cached, 10) : 67);
    });
  }, []);
  if (count === null) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium animate-pulse", children: "..." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: count.toLocaleString() });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground antialiased", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "max-w-4xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContributionHeatmap, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TechStack, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Experience, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Education, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] })
  ] });
}
export {
  Index as component
};
