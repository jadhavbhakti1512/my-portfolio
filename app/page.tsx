import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"  
import FAQChatbot from "@/components/FAQChatbot"
import Projects from "@/components/Projects"
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <Projects />
      <ProjectsSection />
      <FAQChatbot /> 
       
    </main>
  )
}
