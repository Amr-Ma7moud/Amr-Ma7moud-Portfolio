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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                className="group cursor-pointer"
              >
                <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 rounded-2xl overflow-hidden border border-gray-700/50 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/20 p-1">
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  <div className="relative bg-gray-900 rounded-xl overflow-hidden h-full">
                    {/* Image with overlay */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.images[0] || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
                      
                      {/* Project tags overlay */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span 
                            key={tagIndex} 
                            className="px-3 py-1 bg-purple-600/80 backdrop-blur-sm text-white rounded-full text-xs font-medium border border-purple-400/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Hover indicator */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="bg-black/50 rounded-full p-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Action buttons */}
                      <div className="flex gap-3 pt-4 border-t border-gray-800/50">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors px-3 py-2 rounded-lg hover:bg-purple-600/10"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={16} />
                            Code
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors px-3 py-2 rounded-lg hover:bg-blue-600/10"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={16} />
                            Demo
                          </a>
                        )}
                        
                        {/* View details button */}
                        <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-gray-700/50 ml-auto">
                          <span>View Details</span>
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
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