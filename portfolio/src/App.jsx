import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Blog from "./Components/Blog"; // Import the new component
import Contact from "./Components/Contact";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-700 ${
        isDark ? "bg-slate-950 text-white" : "bg-white text-slate-900"
      }`}>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      
      <main>
        <Hero isDark={isDark} />
        <About isDark={isDark} />
        <Skills isDark={isDark} />
        <Projects isDark={isDark} />
        <Blog isDark={isDark} /> {/* Clean and modular */}
        <Contact isDark={isDark} />
      </main>

      <footer className={`text-center py-20 border-t ${
          isDark ? "border-white/5 text-slate-500" : "border-slate-100 text-slate-400"
        }`}>
        <p className="text-xs uppercase tracking-[0.3em]">© 2026 Crafted by RP</p>
      </footer>
    </div>
  );
}