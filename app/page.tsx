import ContactMe from "@/components/contact-me";
import Footer from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import ProjectsSection from "@/components/project-section";
import SkillsSection from "@/components/skills";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto max-w-3xl px-4 container">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <SkillsSection />
      <ContactMe />
      <Footer />
    </div>
  );
}
