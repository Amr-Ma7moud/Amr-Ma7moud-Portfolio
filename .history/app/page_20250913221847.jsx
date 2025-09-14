"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Background from "@/components/background"
import Testimonials from "@/components/testmonials"
import Hero1 from "../components/hero1.1";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])
  const LoadingSpinner = () => (
    <div className="spinner" aria-label="Loading">
      <div className="spinner-circle"></div>
    </div>
  );

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-quad',
      offset: 100,
      once: false,
      mirror: true,
      anchorPlacement: 'top-bottom'
    });

    // Refresh AOS when window is resized or orientation changes
    const refreshAOS = () => AOS.refresh();
    window.addEventListener('resize', refreshAOS);
    window.addEventListener('orientationchange', refreshAOS);

    return () => {
      window.removeEventListener('resize', refreshAOS);
      window.removeEventListener('orientationchange', refreshAOS);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Background />
      <Navbar />
      <div className={`transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        {/* <Testimonials /> */}
        <Footer />
      </div>
    </main>
  )
}

export default Home