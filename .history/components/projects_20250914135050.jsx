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
        
        <div className="grid grid-cols-1 gap-8">
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
                <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 rounded-2xl overflow-hidden border border-gray-700/50 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-purple-500/20 p-1">
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  <div className="relative bg-gray-900 rounded-xl overflow-hidden h-full">
                    {/* Side-by-side layout */}
                    <div className="flex flex-col lg:flex-row min-h-[280px]">
                      
                      {/* Left side - Image section */}
                      <div className="w-full lg:w-2/5 flex flex-col">
                        {/* Main image */}
                        <div className="relative h-48 lg:h-52 overflow-hidden">
                          <Image
                            src={project.images[0] || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                          
                          {/* Hover indicator */}
                          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="bg-black/50 rounded-full p-1.5 backdrop-blur-sm">
                              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Under image content - Tags and quick info */}
                        <div className="flex-1 p-3 lg:p-4 bg-gray-800/50">
                          <div className="mb-3">
                            <h4 className="text-xs font-semibold text-gray-300 mb-2">Technologies</h4>
                            <div className="flex flex-wrap gap-1.5">
                              {project.tags.slice(0, 4).map((tag, tagIndex) => (
                                <span 
                                  key={tagIndex} 
                                  className="px-2 py-0.5 bg-purple-600/20 backdrop-blur-sm text-purple-300 rounded-full text-xs font-medium border border-purple-400/30 hover:bg-purple-600/30 transition-colors"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          {/* Quick stats */}
                          <div className="space-y-1.5">
                            <div className="flex items-center text-xs text-gray-400">
                              <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                              Status: Completed
                            </div>
                            <div className="flex items-center text-xs text-gray-400">
                              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                              Type: {project.tags[0] || 'Web App'}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Right side - Content section */}
                      <div className="w-full lg:w-3/5 p-4 lg:p-6 flex flex-col justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                            {project.title}
                          </h3>
                          
                          <p className="text-gray-300 mb-4 leading-relaxed text-sm lg:text-base line-clamp-3">
                            {project.description}
                          </p>
                          
                          {/* Key features */}
                          <div className="mb-4">
                            <h4 className="text-base font-semibold text-white mb-2">Key Features</h4>
                            <ul className="space-y-1.5">
                              <li className="flex items-start text-gray-300">
                                <span className="w-1 h-1 bg-purple-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                <span className="text-xs">Responsive cross-platform design</span>
                              </li>
                              <li className="flex items-start text-gray-300">
                                <span className="w-1 h-1 bg-purple-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                <span className="text-xs">Modern user interface with smooth animations</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        {/* Action buttons */}
                        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-700/50">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-xs font-medium"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Github size={14} />
                              Code
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-xs font-medium"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink size={14} />
                              Demo
                            </a>
                          )}
                          
                          {/* View details button */}
                          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-600 transition-colors rounded-md text-xs font-medium ml-auto">
                            <span>Details</span>
                            <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
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