"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import Hero from "./components/section/hero"
import About from "./components/section/about"
import Skills from "./components/section/skills"
import Experience from "./components/section/experience"
import Projects from "./components/section/projects"
import Contact from "./components/section/contact"
import Navigation from "./components/navigation"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="bg-slate-950 text-white">
      <Navigation isScrolled={isScrolled} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

     
    </main>
  )
}
