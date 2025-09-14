"use client";
import { useEffect, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon, Quote } from "lucide-react";

const testimonials = [
  {
    content:
      "Amr consistently delivered high-quality code and was always willing to help team members. His problem-solving skills significantly contributed to our project's success.",
    author: "Sarah, Lead Developer at TechCorp",
    role: "Lead Developer",
    company: "TechCorp",
  },
  {
    content:
      "Working with Amr was a pleasure. His attention to detail and ability to quickly adapt to new technologies made him an invaluable member of our team.",
    author: "Michael, Project Manager at InnovateCo",
    role: "Project Manager",
    company: "InnovateCo",
  },
  {
    content:
      "Amr's full-stack development skills helped us build a robust application ahead of schedule. He communicates effectively and delivers quality work consistently.",
    author: "Emily, Product Owner at StartupXYZ",
    role: "Product Owner",
    company: "StartupXYZ",
  },
  {
    content:
      "I was impressed by Amr's ability to quickly understand complex requirements and translate them into clean, efficient code. He's a talented developer with a bright future.",
    author: "David, Senior Developer at WebSolutions Inc.",
    role: "Senior Developer",
    company: "WebSolutions Inc.",
  },
];

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("fade-up");
  const [isHovered, setIsHovered] = useState(false);

  // Initialize AOS
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const AOS = require('aos');
      require('aos/dist/aos.css');
      
      AOS.init({
        duration: 800,
        once: false,
        mirror: true,
        offset: 100,
        delay: 0,
      });
    }
  }, []);

  function handleNextSlide() {
    setAnimationDirection("fade-left");
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      // Refresh AOS to trigger animations
      if (typeof window !== 'undefined') {
        const AOS = require('aos');
        AOS.refresh();
      }
    }, 50);
  }

  function handlePreviousSlide() {
    setAnimationDirection("fade-right");
    setTimeout(() => {
      setCurrentSlide(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length,
      );
      // Refresh AOS to trigger animations
      if (typeof window !== 'undefined') {
        const AOS = require('aos');
        AOS.refresh();
      }
    }, 50);
  }

  return (
    <section id="testimonials" className="py-12 md:py-20 w-full flex justify-center items-center min-h-[400px] mb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8" data-aos="zoom-in" data-aos-duration={800}>
          <h2 className="font-medium text-3xl md:text-4xl mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            What People Say
          </h2>
          <p className="text-gray-400 text-lg">
            Feedback from colleagues and clients I've worked with
          </p>
        </div>
        
        <div 
          className="w-full max-w-4xl overflow-hidden rounded-2xl p-6 md:p-8
                       bg-gradient-to-br from-gray-800 to-gray-900 border
                     border-gray-700 mx-auto transition-all duration-300"

          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            transform: isHovered ? 'translateY(-5px) translateX(2px) scale(1.01)' : 'translateY(0) translateX(0) scale(1)',
            boxShadow: isHovered 
              ? '0 25px 50px -12px rgba(139, 92, 246, 0.25), 0 0 15px rgba(139, 92, 246, 0.1)' 
              : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          }}
          
        >
          <div className="flex flex-col md:flex-row justify-center items-center mb-6 md:mb-8"
                               data-aos="zoom-in"
                               data-aos-duration="1600">
            <button
              className="hidden md:flex group inline-flex size-10 md:size-12 items-center justify-center rounded-full bg-gray-700 p-2 mr-4 hover:bg-purple-600 transition-all duration-300 mb-4 md:mb-0 transform hover:scale-110 hover:-translate-x-1"
                          onClick={handlePreviousSlide}
              type="button"
              aria-label="Previous testimonial"
            >
              <ArrowLeftIcon className="transform-gpu stroke-white transition-colors" />
            </button>
            
            <div className="flex-1 flex justify-center min-h-[200px] relative">
              <div
                key={currentSlide}
                className="flex flex-col items-center text-center max-w-2xl"
                data-aos={animationDirection}

              >
                <div className="mb-4 text-purple-500">
                  <Quote size={32} className="opacity-70" style={{ transform: 'rotate(180deg)' }} />
                </div>
                <p className="font-medium text-lg md:text-xl text-white leading-relaxed mb-4 md:mb-6">
                  {testimonials[currentSlide].content}
                </p>
                <div>
                  <p className="text-purple-400 font-semibold text-md md:text-lg">
                    {testimonials[currentSlide].author.split(',')[0]}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {testimonials[currentSlide].role} at {testimonials[currentSlide].company}
                  </p>
                </div>
              </div>
            </div>
            
            <button
              className="hidden md:flex group inline-flex size-10 md:size-12 items-center justify-center rounded-full bg-gray-700 p-2 ml-4 hover:bg-purple-600 transition-all duration-300 mb-4 md:mb-0 transform hover:scale-110 hover:translate-x-1"
              onClick={handleNextSlide}
              type="button"
              aria-label="Next testimonial"
            >
              <ArrowRightIcon className="transform-gpu stroke-white transition-colors" />
            </button>
          </div>
          
          {/* Mobile navigation buttons */}
          <div className="flex justify-center md:hidden mb-4">
            <button
              className="group inline-flex size-10 items-center justify-center rounded-full bg-gray-700 p-2 mr-4 hover:bg-purple-600 transition-all duration-300 transform hover:scale-110 hover:-translate-x-1"
              onClick={handlePreviousSlide}
              type="button"
              aria-label="Previous testimonial"
            >
              <ArrowLeftIcon className="transform-gpu stroke-white transition-colors" />
            </button>
            <button
              className="group inline-flex size-10 items-center justify-center rounded-full bg-gray-700 p-2 ml-4 hover:bg-purple-600 transition-all duration-300 transform hover:scale-110 hover:translate-x-1"
              onClick={handleNextSlide}
              type="button"
              aria-label="Next testimonial"
            >
              <ArrowRightIcon className="transform-gpu stroke-white transition-colors" />
            </button>
          </div>
          
          <div className="flex justify-center mt-4 md:mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 mx-1 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-purple-500 w-6' : 'bg-gray-600'
                }`}
                onClick={() => {
                  setAnimationDirection(index > currentSlide ? "fade-left" : "fade-right");
                  setTimeout(() => {
                    setCurrentSlide(index);
                    if (typeof window !== 'undefined') {
                      const AOS = require('aos');
                      AOS.refresh();
                    }
                  }, 50);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

                <div className="text-center pt-20" data-aos={"zoom-in"} data-aos-duration={1000 } >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                            Let's Build Something Great
                        </span>
                    </h2>
                    <p className="text-gray-400 justify-center flex max-w-2xl mx-auto">
                        i believe in
                      <Quote className="mr-2 ml-2  rotate-180 text-purple-600 -translate-y-1/4 hover:rotate-0 transition-all duration-300" size={16}  />
            < span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">what i cant make i dont understand
            </span>
                      <Quote className="ml-2 mr-2 text-purple-600  translate-y-2/4 hover:rotate-180 transition-all duration-300" size={16} />
                  </p>
                </div>
      </div>
    </section>
  );
}

export default Testimonials;