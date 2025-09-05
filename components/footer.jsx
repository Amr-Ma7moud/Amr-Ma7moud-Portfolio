"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { FaDownload, FaGithub, FaLinkedin, FaWhatsapp, FaClock } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md"


  const contactLinks = [
    { name: MdEmail, href: "mailto:amrma7mouddev05@gmail.com", innerText: "Amr.Mahmoud.Dev05@gmail.com", catagory: "Email" },
    { name: FaWhatsapp, href: "https://wa.me/+201033050549", innerText: "+201033050549", catagory: "Phone" },
    { name: FaLinkedin, href: "https://www.linkedin.com/in/amr-mahmoud-/", innerText: "Amr Mahmoud", catagory: "LinkedIn" },
    { name: FaGithub, href: "https://github.com/Amr-Ma7moud", innerText: "Amr Mahmoud", catagory: "GitHub" },
    { name: MdLocationOn, href: "", innerText: "Borg Al-Arab, Alexandria, Egypt", catagory: "Location" },
    { name: FaClock, href: "", innerText: "Usually Within 24 hours", catagory: "Response Time" }
  ];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-bold mb-4 inline-block">
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Dev<span className="text-white">Portfolio</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md"
              data-aos={"zoom-out"} data-aos-duration={1200}
            >
                Computer Science student with experience in full-stack web development and competitive programming.
                Skilled in developing cross-platform applications using Python, JavaScript, and modern frameworks
                including Flask and Laravel. Fast learner, adaptable, detail-oriented, and able to work well in team
                environments, with a focus on delivering high-quality solutions efficiently.
            </p>
          </div>

          <div   data-aos={"zoom-out"} data-aos-duration={800}  >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              {contactLinks
              .filter((link) =>
                  [FaGithub, FaLinkedin, FaWhatsapp, MdEmail, MdLocationOn].includes(link.name))
              .map((link, index) => 
                <li className="flex items-center gap-2" key={link.name}
                  data-aos={"zoom-out"} data-aos-duration={800 + index * 300} 
                >
                  <span className="text-purple-500">
                    {React.createElement(link.name, { size: 24 })}
                  </span>
                  <div className="text-white">
                    { link.href ?
                    <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    >
                        {link.innerText}
                    </a> : link.innerText}
                      </div>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Amr Mahmoud. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
