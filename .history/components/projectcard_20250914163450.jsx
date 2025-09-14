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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-md p-2 sm:p-4">
      <div className="relative bg-gray-900 rounded-xl w-full h-full max-w-[95vw] max-h-[95vh] mx-auto my-auto overflow-hidden border border-gray-700 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-6 sm:right-6 z-50 p-2 sm:p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors border border-gray-600"
        >
          <X size={20} className="text-gray-300 sm:w-6 sm:h-6" />
        </button>

        {/* Side-by-side layout */}
        <div className="flex flex-col lg:flex-row h-full">
          
          {/* Left side - Image section */}
          <div className="w-full lg:w-1/2 flex flex-col bg-gray-800">
            {/* Main image carousel */}
            <div className="relative flex-1 min-h-[300px] lg:min-h-0 overflow-hidden">
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
            
            {/* Under image content - Technical details */}
            <div className="p-6 bg-gray-850 border-t border-gray-700">
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-300 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-purple-600 bg-opacity-20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Project stats */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">Status:</span>
                  <div className="flex items-center mt-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    <span className="text-gray-300">Completed</span>
                  </div>
                </div>
                <div>
                  <span className="text-gray-400">Type:</span>
                  <div className="flex items-center mt-1">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    <span className="text-gray-300">{project.tags[0] || 'Web App'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Content section */}
          <div className="w-full lg:w-1/2 flex flex-col bg-gray-900">
            <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
              {/* Header */}
              <div className="mb-6 sm:mb-8 mt-8 sm:mt-0">
                <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-3 sm:mb-4 pr-8 sm:pr-0">{project.title}</h2>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">{project.description}</p>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Responsive cross-platform design with modern UI/UX principles</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Real-time system monitoring and performance optimization</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Intuitive user interface with smooth animations and transitions</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Secure authentication and data handling mechanisms</span>
                  </li>
                </ul>
              </div>

              {/* Technical Implementation */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Technical Implementation</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-start">
                    <span className="text-purple-400 font-medium mr-2">Frontend:</span>
                    <span>Built with modern frameworks ensuring optimal performance</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 font-medium mr-2">Backend:</span>
                    <span>Robust server architecture with scalable design patterns</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 font-medium mr-2">Database:</span>
                    <span>Efficient data management and storage solutions</span>
                  </div>
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Challenges & Solutions</h3>
                <p className="text-gray-300 leading-relaxed">
                  This project presented unique challenges in balancing performance with functionality. 
                  Through careful optimization and innovative problem-solving approaches, we achieved 
                  a seamless user experience while maintaining code quality and scalability.
                </p>
              </div>
            </div>

            {/* Action buttons - Fixed at bottom */}
            <div className="p-8 border-t border-gray-700 bg-gray-900">
              <div className="flex flex-wrap gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                  >
                    <Github size={20} />
                    View Source Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
