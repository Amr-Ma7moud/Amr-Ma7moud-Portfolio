"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

export default function Projects() {


  const projects = [
    {
      title: "Cross Platform Task Manager ",
      description:
        "A responsive admin dashboard for an e-commerce platform with analytics, inventory management, and order processing.",
      image: "/task-manager.jpg",
      tags: ["Python", "Psutil", "Electron", "Operating System"],
      liveUrl: "",
      githubUrl: "https://github.com/TaQsiimUwU/Task-manager-with-GUI",
    },
    {
      title: "Project U",
      description:
        "A modern travel booking application with destination search, booking management, and user authentication.",
      image: "/project-U.png",
      tags: ["Python", "Flask", "JS", "SWE"],
      liveUrl: "",
      githubUrl: "https://github.com/Amr-Ma7moud/Project_U",
    },
    {
      title: "Course Catalog",
      description:
        "A web application that allows users to search for recipes based on ingredients, dietary restrictions, and meal types.",
      image: "",
      tags: ["PHP" ,"Laravel", "API Integration", "Vanilla Responsive Design"],
      liveUrl: "",
      githubUrl: "https://github.com/Amr-Ma7moud/CourseCatalogue",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing projects, skills, and contact information with a modern design.",
      image: "portfolio.png",
      tags: ["React", "JS", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/Amr-Ma7moud/My_Portfolio",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2
            data-aos="fade-down"
            data-aos-duration="1000"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p
            data-aos="fade-down"
            data-aos-duration="1000"
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Here are some of my recent projects. Each project showcases different skills and technologies I've worked
            with.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            // Determine animation direction based on index
            const animationDirection = index % 2 === 0 ? "fade-right" : "fade-left";
            
            return (
              <div
                key={index}
                data-aos={animationDirection}
                data-aos-duration="1800"
                data-aos-anchor-placement="left-center"
                data-aos-delay={index * 100}
                className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-700 rounded-full text-xs cursor-default
                      hover:translate-y-[-2px] hover:bg-purple-600 hover:text-white transition-all">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 hover:translate-x-[2px] hover:translate-y-[-2px] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 hover:translate-y-[-2px] hover:translate-x-[2px] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div 
          data-aos="fade-up"
          data-aos-delay="500"
          className="text-center mt-12"
        >
          {projects.length > 4 && (
            <a
              href="#"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              View All Projects
              <ArrowRight size={16}/>
            </a>
          )}
        </div>
      </div>
    </section>
  )
}