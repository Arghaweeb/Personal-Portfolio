"use client";

import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/skills";
import Experience from "@/components/Experience";
import Reviews from "@/components/Reviews";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Reviews />
      <Projects />
      <Contact />
    </div>
  );
}
