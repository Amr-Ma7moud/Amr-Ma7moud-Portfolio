"use client"

import { useRef, useEffect, useState } from "react"
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGitAlt,
    FaGithub,
    FaFigma,
    FaNpm,
    FaWordpress,
    FaJava, FaPython, FaPhp, FaLaravel, FaFlask, FaLinux, FaNode, FaDocker
} from "react-icons/fa"
import {
  SiNextdotjs,
  SiTailwindcss,
  SiGraphql,
  SiRedux,
  SiJest,
  SiWebpack,
  SiVercel,
  SiFirebase,
  SiFramer,
  SiSass,
} from "react-icons/si"
import { TbBrandReactNative } from "react-icons/tb"
import { MdDesignServices } from "react-icons/md"
import {ArrowDown} from "lucide-react";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
    const PRIMARY_GRADIENT = "bg-gradient-to-r from-purple-600 to-blue-600";
    const SECONDARY_BG = "bg-gray-800 hover:bg-gray-700";
    const TEXT_PRIMARY = "text-white";
    const TEXT_SECONDARY = "text-gray-300";
    const TEXT_TERTIARY = "text-gray-400";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.2,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" size={36} /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" size={36} /> },
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" size={36} /> },
      { name: "Java", icon: <FaJava className="text-[#E34F26]" size={36} /> },
      { name: "Kotlin", icon: <img src={"/Kotlin_logo.svg"} alt={"Kotlin Logo"} width={36} height={36} /> },
      { name: "Python", icon: <img src={"python-5.svg"} alt={"CPP Logo"} width={36} height={36} /> },
      { name: "C++", icon:  <img src={"c++.svg"} alt={"CPP Logo"} width={36} height={36} /> },
      { name: "MATLAB", icon: <img src={"matlab.svg"} alt={"MATLAB Logo"} width={36} height={36} /> },
      { name: "PHP", icon: <img src={"php.svg"} alt={"PHP Logo"} width={36} height={36} /> },
  ]

  const technologies = [
      { name: "React", icon: <FaReact className="text-[#61DAFB]" size={36} /> },
      { name: "Laravel", icon: <FaLaravel className="text-[#F24E1E]" size={36} /> },
      { name: "Node.JS", icon: <FaNode className="text-[#215732]" size={46}/> },
      { name: "Electron", icon: <img src={"electron.svg"} alt={"Electron Logo"} width={36} height={36} /> },
      { name: "Flask",  icon: <img src={"flask.svg"} alt={"Flask Logo"} width={36} height={36} /> },
      { name: "Gradle", icon: <img src={"gradle.svg"} alt={"Gradle Logo"} width={100} height={100} /> },
      { name: "Android Studio", icon: <img src={"android-studio.svg"} alt={"Android Studio Logo"} width={36} height={36} /> },
      { name: "VS Code", icon: <img src={"vsc.svg"} alt={"VSCode Logo"} width={36} height={36} /> },
      { name: "Git", icon: <FaGitAlt className="text-[#F05032]" size={36} /> },
      { name: "GitHub", icon: <FaGithub size={24} /> },
      { name: "Docker", icon: <FaDocker className="text-[Blue]" size={24} /> },
      { name: "Linux", icon: <FaLinux  className={"text-[black]"} size={24} /> },

  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16" data-aos={"fade-down"} data-aos-duration={1000}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development and android development worlds. Here's an overview of my technical
            skills and expertise.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 gap-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Core Skills with icons */}
          <div>
            <h3 className="text-xl font-semibold mb-8 text-center">Core Competencies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <div data-aos={"fade-up"} data-aos-duration={800 + index * 300}
                  key={index}
                  className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="mb-4">{skill.icon}</div>
                  <h4 className="font-medium text-center">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Other technologies */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-8 text-center">Technologies & Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {technologies.map((tech, index) => (
                <div
                data-aos={"fade-up"} data-aos-duration={800 + index * 300}
                  key={index}
                  className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-2">{tech.icon}</div>
                  <span className="text-sm text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
            <div className="absolute bottom-0 right-10 animate-bounce">
                <a href="#projects" className={`${TEXT_TERTIARY} hover:${TEXT_PRIMARY} transition-colors`}>
                    <ArrowDown size={24} />
                </a>
            </div>
        </div>
      </div>
    </section>
  )
}

