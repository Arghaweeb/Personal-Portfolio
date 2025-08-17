"use client";

import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/skills";
import Experience from "@/components/Experience";


export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Skills />
    </div>
  );
}
