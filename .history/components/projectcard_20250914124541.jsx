import { useState, useEffect } from "react"
import { X, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

function ProjectCard({ project, isOpen, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])
  
  if (!isOpen) return null

  // Use actual project images array
  const projectImages = project.images || [project.image || "/placeholder.svg"]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-md">
      <div className="relative bg-gray-900 rounded-xl w-full h-full max-w-[95vw] max-h-[95vh] mx-auto my-auto overflow-hidden border border-gray-700 shadow-2xl flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors border border-gray-600"
        >
          <X size={24} className="text-gray-300" />
        </button>

        {/* Image Carousel Section - Takes majority of space */}
        <div className="relative flex-1 min-h-0 bg-gray-800 overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src={projectImages[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              fill
              className="object-contain"
            />
            
            {/* Image Counter */}
            {projectImages.length > 1 && (
              <div className="absolute bottom-6 right-6 bg-black bg-opacity-70 px-4 py-2 rounded-full text-white text-base font-medium">
                {currentImageIndex + 1} / {projectImages.length}
              </div>
            )}
          </div>
          
          {/* Carousel Controls */}
          {projectImages.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 p-3 bg-black bg-opacity-60 rounded-full hover:bg-opacity-80 transition-all border border-gray-600"
              >
                <ChevronLeft size={28} className="text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 p-3 bg-black bg-opacity-60 rounded-full hover:bg-opacity-80 transition-all border border-gray-600"
              >
                <ChevronRight size={28} className="text-white" />
              </button>
            </>
          )}
        </div>

        {/* Project Content Section - Fixed height */}
        <div className="p-8 bg-gray-900 border-t border-gray-700 overflow-y-auto" style={{ maxHeight: '40%' }}>
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{project.title}</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-purple-600 bg-opacity-20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">About This Project</h3>
            <p className="text-gray-300 leading-relaxed text-lg">{project.description}</p>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300 text-lg">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-4"></span>
                Responsive cross-platform design
              </li>
              <li className="flex items-center text-gray-300 text-lg">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-4"></span>
                Real-time system monitoring
              </li>
              <li className="flex items-center text-gray-300 text-lg">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-4"></span>
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
                className="flex items-center gap-3 px-8 py-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors text-base font-medium"
              >
                <Github size={20} />
                View Source
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-gray-700 text-white rounded-xl hover:bg-gray-600 transition-colors text-base font-medium"
              >
                <ExternalLink size={20} />
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
