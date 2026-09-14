import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      
      {/* Global Background Glow */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-lime-400/10 blur-[220px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/10 blur-[220px]" />
      </div>

      {/* Fixed UI */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Certificates />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}