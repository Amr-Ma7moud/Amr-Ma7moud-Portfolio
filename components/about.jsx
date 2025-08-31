"use client"

import { useRef, useEffect, useState } from "react"
import {ArrowDown, FileText, Mail, MapPin} from "lucide-react"
import Link from "next/link"
import {FaDownload} from "react-icons/fa";

export default function About() {
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
      { threshold: 0.3 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => ref.current && observer.unobserve(ref.current)
  }, [])

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-10">
            <h2 className="text-sm uppercase tracking-wider text-purple-500 mb-2">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Computer Science student at E-JUST
            </h3>
            <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
          </div>

          <p className="text-gray-300 mb-8 text-lg leading-relaxed text-center">
            I specialize in building responsive, accessible, and performant web applications using modern technologies.
            With a keen eye for design and a commitment to code quality, I create solutions that are both beautiful and
            functional.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 max-w-xl mx-auto">
            <div className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg">
              <MapPin className="text-purple-500" size={24} />
              <span className="text-gray-300">Alexandria, Egypt</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg w-max">
              <Mail className="text-purple-500" size={24} />
              <span className="text-gray-300">Amr.Mahmoud.dev05@gmail.com</span>
            </div>
          </div>

          <div className="text-center">
              <a
                  href="/CV.pdf"
                  download="Amr-Mahmoud-CV.pdf"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-purple-500 text-white font-medium hover:bg-purple-600 transition-all hover:scale-105"
              >
                  <FaDownload size={16} /> Download CV
              </a>

              <Link
                  href="/CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex ml-4 items-center gap-2 px-8 py-4 rounded-lg bg-purple-500 text-white font-medium hover:bg-purple-600 transition-all hover:scale-105"
              >
                  <FileText size={18} /> View CV
              </Link>
          </div>
            <div className="absolute bottom-0 right-10 animate-bounce">
                <a href="#skills" className={`${TEXT_TERTIARY} hover:${TEXT_PRIMARY} transition-colors`}>
                    <ArrowDown size={24} />
                </a>
            </div>
          </div>
      </div>
    </section>
  )
}

