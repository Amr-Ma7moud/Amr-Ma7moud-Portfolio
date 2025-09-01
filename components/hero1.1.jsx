import React, {useEffect, useRef, useState} from 'react';
import {ArrowDown} from "lucide-react";
import {FaPhone} from "react-icons/fa";
import NameSplit from "./namesplit";

const PRIMARY_GRADIENT = "bg-gradient-to-r from-purple-600 to-blue-600";
const SECONDARY_BG = "bg-gray-800 hover:bg-gray-700";
const TEXT_PRIMARY = "text-white";
const TEXT_SECONDARY = "text-gray-300";
const TEXT_TERTIARY = "text-gray-400";

function Hero1() {
    const textRef = useRef(null);

    useEffect(() => {
        const textElement = textRef.current;
        if (!textElement) return;

        const roles = [
            "an Android App Developer",
            "a Full-Stack Web Developer",
            "a Computer Science Student",
        ];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        const type = () => {
            const currentRole = roles[roleIndex];
            textElement.textContent = isDeleting
                ? currentRole.substring(0, charIndex - 1)
                : currentRole.substring(0, charIndex + 1);

            charIndex += isDeleting ? -1 : 1;
            typingSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentRole.length) {
                isDeleting = true;
                typingSpeed = 1000;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }

            setTimeout(type, typingSpeed);
        };

        setTimeout(type, 1000);
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* Text Content */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <div className="rounded-2xl border bg-opacity-0 border-gray-950 shadow-xl">
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                                    <NameSplit />
                                </h1>
                            <div className={`text-xl md:text-2xl ${TEXT_SECONDARY} h-8`}>
                                I'm <span ref={textRef} className={`${TEXT_PRIMARY} font-medium`}></span>
                            </div>
                            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl">
                                I create engaging, responsive, and user-friendly web experiences and mobile apps with modern technologies and clean code.
                            </p>

                            <div className="mt-10 flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
                                <a href="#projects" className="flex items-center justify-center px-8 py-3.5 text-lg font-semibold text-gray-300 hover:text-white transition-colors">
                                    <span className="mr-3">👀</span>
                                    View Projects
                                </a>
                                <div className="relative group">
                                    <a href="#contact" className="relative flex items-center justify-center px-8 py-3.5 text-lg font-semibold text-white  rounded-lg">
                                        <span className="mr-3">
                                        <FaPhone />
                                        </span>
                                        Get in Contact
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="relative bg-gray-900 bg-opacity-15 backdrop-blur-lg rounded-2xl p-6 border border-gray-800 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 bg-opacity-10 to-purple-500/10"></div>
                                <img
                                    className="w-full max-w-md mx-auto rounded-2xl transform transition-transform duration-700 hover:scale-105"
                                    src="/mypic.jpeg"
                                    alt="Profile Picture"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <a href="#about" className={`${TEXT_TERTIARY} hover:${TEXT_PRIMARY} transition-colors`}>
                        <ArrowDown size={24} />
                    </a>
                </div>
            </div>
        </section>);}
export default Hero1;