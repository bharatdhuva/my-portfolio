import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { ContributionHeatmap } from "@/components/portfolio/ContributionHeatmap";
import { TechStack } from "@/components/portfolio/TechStack";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollReveal } from "@/components/portfolio/ScrollReveal";

function App() {
  return (
    <div className="min-h-screen text-foreground antialiased relative">
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <svg className="absolute w-0 h-0">
          <defs>
            <pattern id="grid-pattern" width="70" height="70" patternUnits="userSpaceOnUse">
              <path d="M 70 0 L 0 0 0 70" fill="none" stroke="var(--grid-color)" strokeWidth="1" />
            </pattern>
          </defs>
        </svg>
        <svg className="absolute inset-0 w-full h-full">
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <ScrollReveal duration={600}>
          <Hero />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <TechStack />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <ContributionHeatmap />
        </ScrollReveal>
        <ScrollReveal>
          <Projects />
        </ScrollReveal>
        <ScrollReveal>
          <Experience />
        </ScrollReveal>
        <ScrollReveal>
          <Education />
        </ScrollReveal>
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
        <ScrollReveal>
          <Footer />
        </ScrollReveal>
      </main>
    </div>
  );
}

export default App;
