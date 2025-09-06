import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"  
import FAQChatbot from "@/components/FAQChatbot"

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <FAQChatbot />   {/* ✅ chatbot is placed at the bottom */}
    </main>
  )
}
