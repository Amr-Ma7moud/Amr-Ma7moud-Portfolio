import { useState } from "react"
import { X, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useEmblaCarousel } from "embla-carousel-react"

function ProjectCard({ project, isOpen, onClose }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  
  if (!isOpen) return null

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
  const scrollNext = () => emblaApi && emblaApi.scrollNext()

  // Create multiple images for carousel (placeholder for now, can be extended)
  const projectImages = [project.image, project.image, project.image] // Replace with actual multiple images

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="relative bg-gray-900 rounded-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
        >
          <X size={20} className="text-gray-400" />
        </button>

        {/* Image Carousel */}
        <div className="relative h-80 md:h-96 bg-gray-800 rounded-t-2xl overflow-hidden">
          <div className="embla overflow-hidden h-full" ref={emblaRef}>
            <div className="embla__container flex h-full">
              {projectImages.map((img, index) => (
                <div className="embla__slide flex-[0_0_100%] min-w-0" key={index}>
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Controls */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 transition-all"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 transition-all"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>

        {/* Project Content */}
        <div className="p-8">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-purple-600 bg-opacity-20 text-purple-300 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">About This Project</h3>
            <p className="text-gray-300 leading-relaxed">{project.description}</p>
          </div>

          {/* Features (Placeholder - can be added to project data) */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Responsive cross-platform design
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Real-time system monitoring
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Modern and intuitive user interface
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Github size={18} />
                View Source
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
