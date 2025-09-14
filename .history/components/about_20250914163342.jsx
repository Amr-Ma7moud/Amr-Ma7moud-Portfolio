"use client"
import React from "react"
import { useRef, useEffect, useState } from "react"
import { ArrowDown, FileText, Mail, MapPin, Calendar, Code, Globe, Award } from "lucide-react"
import { FaDownload, FaClock, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md"
import Link from "next/link"

const contactLinks = [
    { name: MdEmail, href: "mailto:amrma7mouddev05@gmail.com", innerText: "Amr.Mahmoud.Dev05@gmail.com", catagory: "Email" },
    { name: FaWhatsapp, href: "https://wa.me/+201033050549", innerText: "+201033050549", catagory: "Phone" },
    { name: FaLinkedin, href: "https://www.linkedin.com/in/amr-mahmoud-/", innerText: "Amr Mahmoud", catagory: "LinkedIn" },
    { name: FaGithub, href: "https://github.com/Amr-Ma7moud", innerText: "Amr Mahmoud", catagory: "GitHub" },
    { name: MapPin, href: "", innerText: "Borg Al-Arab, Alexandria, Egypt", catagory: "Location" },
    { name: FaClock, href: "", innerText: "Usually Within 24 hours", catagory: "Response Time" }
];

export default function About() {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef(null)

    const PRIMARY_GRADIENT = "bg-gradient-to-r from-purple-600 to-blue-600";
    const SECONDARY_BG = "bg-gray-800 hover:bg-gray-700";
    const TEXT_PRIMARY = "text-white";
    const TEXT_SECONDARY = "text-gray-300";
    const TEXT_TERTIARY = "text-gray-400";

    // Stats data
    const stats = [
        { icon: <Code size={20} />, label: "Projects Completed", value: "+6" },
        { icon: <Calendar size={20} />, label: "Years Experience", value: "Student" },
        { icon: <Award size={20} />, label: "Technologies", value: "+5" },
    ];

    // Skills data
    const skills = [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
    ];

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
        <section id="about" className="py-20 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-20 left-40 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
                <div className="absolute top-32 right-32 w-80 h-80 bg-indigo-500 rounded-full filter blur-2xl opacity-15" style={{ animation: 'pulse 6s ease-in-out infinite 1s' }}></div>
                <div className="absolute bottom-40 left-32 w-64 h-64 bg-pink-500 rounded-full filter blur-2xl opacity-20" style={{ animation: 'pulse 5s ease-in-out infinite 2s' }}></div>
            </div>

            <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.8s ease-out forwards;
        }
      `}</style>

            <div className="container mx-auto px-4 md:px-6">
                <div
                    ref={ref}
                    className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <div className="text-center mb-12 sm:mb-16" data-aos={"fade-down"} data-aos-duration={1000} >
                        <h2 className="text-xs sm:text-sm uppercase tracking-wider text-purple-500 mb-2">Get To Know Me</h2>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            About Me
                        </h3>
                        <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 sm:mb-8"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

                        <div className="order-2 lg:order-1 flex flex-col items-center" data-aos="fade-right" >
                            {/* Profile Image */}
                            <div className="relative mb-6 sm:mb-8 w-full max-w-sm sm:max-w-md lg:max-w-lg">
                                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-xl opacity-30"></div>
                                <div className="relative bg-gray-800 bg-opacity-80 backdrop-blur-lg rounded-2xl p-1 sm:p-2 border border-gray-700 shadow-xl hover:scale-105 transition-all"
                                >
                                    <img
                                        src="/mypic.jpeg"
                                        alt="Amr Mahmoud"
                                        className="w-full aspect-square object-cover rounded-2xl border-2 sm:border-4 border-purple-600 shadow-lg"
                                    />
                                </div>
                            </div>
                            <div className=" flex-row gap-4 justify-center">
                                <Link
                                    href="/CV.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-md hover:from-purple-700 hover:to-blue-700 transition-all hover:scale-105"
                                >
                                    <FileText size={18} /> View CV
                                </Link>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="order-1 lg:order-2" data-aos="fade-left">
                            <h4 className="text-2xl md:text-3xl font-bold mb-6">
                                Computer Science student at E-JUST
                            </h4>

                            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                                Computer Science student with experience in full-stack web development, Android development and competitive programming.
                                Skilled in developing cross-platform applications using Python, JavaScript, and modern frameworks
                                including Flask and Laravel. Fast learner, adaptable, detail-oriented, and able to work well in team
                                environments, with a focus on delivering high-quality solutions efficiently.
                            </p>

                            <div className="flex flex-col gap-6 mb-10">
                                {contactLinks
                                    .filter((link) => [MdEmail, MapPin].includes(link.name))
                                    .map((link) => (<div className="flex items-center gap-3 bg-gray-600 bg-opacity-50 p-4 rounded-lg border border-gray-700 transition-all hover:bg-purple-600 hover:text-white">
                                        {React.createElement(link.name, { className: "text-white", size: 24 })}
                                        {link.href ? <a href={link.href} className="text-gray-300 hover:text-white">{link.innerText}</a>
                                            : <span className="text-gray-300">{link.innerText}</span>}
                                    </div>))
                                }
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 mb-10"  >
                                {stats.map((stat, index) => (
                                    <div className={"hover:scale-110"}>
                                        <div
                                            key={index}
                                            data-aos={"fade-up"}
                                            data-aos-duration={700 + index * 200}
                                            className="bg-gray-800 bg-opacity-50 p-4 rounded-lg hover:bg-purple-800 transition-all text-center border border-gray-700  "
                                        >
                                            <div className="text-white flex justify-center mb-2">{stat.icon}</div>
                                            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                            <div className="text-sm text-gray-400 ">{stat.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="flex justify-center gap-4 mb-10">
                                {contactLinks
                                    .filter((link) =>
                                        [FaGithub, FaLinkedin, FaWhatsapp, MdEmail].includes(link.name))
                                    .map((link, index) => (
                                        <a data-aos={"fade-up"} data-aos-duration={200 + index * 200}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-gray-800 bg-opacity-50 rounded-full border border-gray-700 text-gray-300 hover:text-white hover:bg-purple-600 hover:animate-bounce transition-all">
                                            {React.createElement(link.name, { size: 20 })}
                                        </a>))}
                            </div>

                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="flex justify-center mt-16">
                        <div className="animate-bounce flex flex-col items-center">
                            <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                                <ArrowDown size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}