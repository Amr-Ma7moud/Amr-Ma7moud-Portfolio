"use client"

import React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { MdEmail } from "react-icons/md"
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  useEffect(() => {
    const sections = document.querySelector('section[id');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { setActiveSection(entry.target.id)}
        });  
    },{
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    }
    );

  sections.forEach( (section) => {
    observer.observe(section);
  });

  return () => {
    observer.disconnect();
  };
},[]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const contactLinks = [
    { name: FaGithub, href: "https://github.com/Amr-Ma7moud" },
    { name: FaLinkedin, href: "https://www.linkedin.com/in/amr-mahmoud-/" },
    { name: FaWhatsapp, href: "https://wa.me/+201033050549" },
    { name: MdEmail, href: "mailto:amrma7mouddev05@gmail.com" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-gray-900/90 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-5"}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              {"<Amr Mahmoud />"}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const sectionID = link.href.substring(1);
              const isActive  = activeSection === sectionID;
              <div key={link.name}>
                <Link href={link.href} className={`text-gray-300 hover:text-white transition-colors relative group ${
                  isActive ? "bg-purple-600":""
                }
                  `}>
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
              })}
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {contactLinks.map((link, index) => (
              <a href={link.href} key={index} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all hover:-translate-y-1 duration-200"
              >
                {React.createElement(link.name, { size: 20 })}
              </a>))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-gray-900 shadow-lg transition-all duration-300 ${isOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden"
          }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex space-x-4 pt-4 border-t border-gray-800">
              {contactLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 mb-5 hover:text-white"
                >
                  {React.createElement(link.name, { size: 20 })}
                </a>))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

