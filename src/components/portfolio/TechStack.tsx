import { TechIcon } from "./TechIcon";

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
  { name: "Pm", fullName: "Postman" },
];

export function TechStack() {
  return (
    <section id="about" className="py-10">
      <h2 className="text-[10px] font-medium tracking-[0.2em] text-muted-foreground mb-5">
        TECH STACK
      </h2>
      <div className="flex flex-wrap gap-x-5 gap-y-4">
        {techs.map((t, i) => (
          <div
            key={i}
            className="relative inline-flex group transition-transform duration-200 hover:-translate-y-1 hover:scale-110 cursor-pointer"
          >
            <TechIcon name={t.name} className="h-8 w-8" />
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 text-[11px] font-medium font-sans rounded-md whitespace-nowrap pointer-events-none transition-all duration-150 ease-out z-50 opacity-0 translate-y-1 bg-zinc-800 text-zinc-100 shadow-md group-hover:opacity-100 group-hover:translate-y-0 border border-zinc-700/50">
              {t.fullName}
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
