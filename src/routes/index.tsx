import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { ContributionHeatmap } from "@/components/portfolio/ContributionHeatmap";
import { TechStack } from "@/components/portfolio/TechStack";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bharat Dhuva — Full Stack Developer" },
      {
        name: "description",
        content:
          "Personal portfolio of Bharat Dhuva, a full-stack developer building polished web products.",
      },
      { property: "og:title", content: "Bharat Dhuva — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Personal portfolio of Bharat Dhuva, a full-stack developer building polished web products.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6">
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
