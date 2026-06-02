const techs = [
  { name: "TS", bg: "bg-blue-500", color: "text-white" },
  { name: "JS", bg: "bg-yellow-400", color: "text-black" },
  { name: "Py", bg: "bg-sky-600", color: "text-white" },
  { name: "Jv", bg: "bg-orange-600", color: "text-white" },
  { name: "Nd", bg: "bg-green-600", color: "text-white" },
  { name: "Re", bg: "bg-cyan-500", color: "text-white" },
  { name: "Nx", bg: "bg-black", color: "text-white" },
  { name: "Tw", bg: "bg-teal-500", color: "text-white" },
  { name: "Ex", bg: "bg-zinc-700", color: "text-white" },
  { name: "Fb", bg: "bg-amber-500", color: "text-white" },
  { name: "Gt", bg: "bg-orange-500", color: "text-white" },
  { name: "Gh", bg: "bg-zinc-900", color: "text-white" },
  { name: "Mg", bg: "bg-green-700", color: "text-white" },
  { name: "Pr", bg: "bg-cyan-700", color: "text-white" },
  { name: "Fg", bg: "bg-pink-500", color: "text-white" },
  { name: "Cu", bg: "bg-orange-400", color: "text-white" },
  { name: "Ns", bg: "bg-red-600", color: "text-white" },
  { name: "Bn", bg: "bg-stone-200", color: "text-stone-900" },
  { name: "Zd", bg: "bg-indigo-600", color: "text-white" },
  { name: "Ho", bg: "bg-purple-600", color: "text-white" },
  { name: "Vc", bg: "bg-black", color: "text-white" },
  { name: "Vt", bg: "bg-violet-500", color: "text-white" },
];

export function TechStack() {
  return (
    <section id="about" className="py-10">
      <h2 className="text-[10px] font-medium tracking-[0.2em] text-muted-foreground mb-5">TECH STACK</h2>
      <div className="flex flex-wrap gap-2.5">
        {techs.map((t, i) => (
          <div
            key={i}
            title={t.name}
            className={`h-8 w-8 rounded-md ${t.bg} ${t.color} flex items-center justify-center text-[10px] font-semibold transition-transform hover:-translate-y-0.5`}
          >
            {t.name}
          </div>
        ))}
      </div>
    </section>
  );
}
