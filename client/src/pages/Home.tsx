import { useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Contact from "@/sections/Contact";

export default function Home() {
  useEffect(() => {
    // Set document title
    document.title = "Harshvardhansinh Sarvaiya | Portfolio";
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="overflow-hidden"
    >
      <div id="top" className="h-0" aria-hidden="true"></div>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </motion.div>
  );
}
