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
    <section id="about" className="py-4 my-6 bg-background">
      <h2 className="text-[10px] font-medium tracking-[0.2em] text-muted-foreground mb-5">
        TECH STACK
      </h2>
      <div className="flex flex-wrap gap-x-5 gap-y-4">
        {techs.map((t, i) => (
          <div
            key={i}
            className="transition-transform duration-200 hover:-translate-y-1 hover:scale-110 cursor-pointer"
          >
            <TechIcon name={t.name} className="h-8 w-8" />
          </div>
        ))}
      </div>
    </section>
  );
}
