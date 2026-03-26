import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main id="home" className="bg-[#121212] min-h-screen selection:bg-white/20">
      <Navbar />
      <ScrollyCanvas />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Education />
      <Contact />
      
      <footer className="py-6 md:py-12 text-center text-gray-500 mt-0">
        <p className="text-sm tracking-wide">
          © {new Date().getFullYear()} Shrijan. Built with Next.js & Framer Motion.
        </p>
      </footer>
    </main>
  );
}
