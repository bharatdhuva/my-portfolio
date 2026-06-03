import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { ContributionHeatmap } from "@/components/portfolio/ContributionHeatmap";
import { TechStack } from "@/components/portfolio/TechStack";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6">
        <Hero />
        <ContributionHeatmap />
        <TechStack />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
