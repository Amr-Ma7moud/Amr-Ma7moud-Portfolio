"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import ProjectCard from "./projectcard"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = [
    {
      title: "Cross Platform Task Manager ",
      description:
        `A responsive cross-platform task manager desktop application that allows users to 
        manage and track their system efficiently.`,
      images: ["/task-manager.jpg", "/placeholder.svg", "/placeholder.svg"],
      tags: ["Python", "Psutil", "Electron", "Operating System"],
      liveUrl: "",
      githubUrl: "https://github.com/TaQsiimUwU/Task-manager-with-GUI",
    },
    {
      title: "Project U",
      description:
        "A Website that help students to find university and college that match their preferences and grades.",
      images: ["/project-U.png", "/placeholder.svg", "/placeholder.svg"],
      tags: ["Python", "Flask", "JS", "SWE"],
      liveUrl: "",
      githubUrl: "https://github.com/Amr-Ma7moud/Project_U",
    },
    {
      title: "Course Catalog",
      description:
        "A website that help student search for university courses based on normal queries or advanced filters so they can find the best match.",
      images: ["/coursecatalogue.png", "/placeholder.svg", "/placeholder.svg"],
      tags: ["PHP" ,"Laravel", "Vanilla Responsive Design"],
      liveUrl: "",
      githubUrl: "https://github.com/Amr-Ma7moud/CourseCatalogue",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing projects, skills, and contact information with a modern design.",
      images: ["portfolio.png", "/placeholder.svg", "/placeholder.svg"],
      tags: ["React", "JS", "Tailwind CSS"],
      liveUrl: "",
      githubUrl: "https://github.com/Amr-Ma7moud/My_Portfolio",
    },
  ]

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

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
                onClick={() => handleProjectClick(project)}
                key={index}
                data-aos={animationDirection}
                data-aos-duration="1800"
                data-aos-anchor-placement="left-center"
                data-aos-delay={index * 100}
                className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all cursor-pointer group"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
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
                      onClick={(e) => e.stopPropagation()}
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
                        onClick={(e) => e.stopPropagation()}
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

        {/* Project Card Popup */}
        {selectedProject && (
          <ProjectCard
            project={selectedProject}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        )}

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