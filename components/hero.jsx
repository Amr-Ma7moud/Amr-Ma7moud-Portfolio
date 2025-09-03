"use client";

import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import NameSplit from "./namesplit";
import AOS from 'aos';
import 'aos/dist/aos.css';

const PRIMARY_GRADIENT = "bg-gradient-to-r from-purple-600 to-blue-600";
const SECONDARY_BG = "bg-gray-800 hover:bg-gray-700";
const TEXT_PRIMARY = "text-white";
const TEXT_SECONDARY = "text-gray-300";
const TEXT_TERTIARY = "text-gray-400";

export default function Hero() {
  const textRef = useRef(null);
  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const roles = [
      "an Android App Developer",
      "a Full-Stack Web Developer",
      "a Computer Science Student",
      "an Arch Linux Enthusiast",
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
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      <div className="container px-4 md:px-6 z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <NameSplit/>
        </h1>

        <div className={`text-2xl md:text-2xl ${TEXT_SECONDARY} mb-8 h-8`}>
          I'm <span ref={textRef} className={`${TEXT_PRIMARY} font-medium`}></span>
        </div>

        {/* <div className={`text-2xl md:text-2xl ${TEXT_PRIMARY} </p>font-bold mb-8 ml-3 h-8`}>
            <CoolTextSwitch className={`${TEXT_PRIMARY} font-medium`} />
        </div> */}
        {/* this is cool but noone liked it so i think it will not see production */}

        <p className={`max-w-2xl ${TEXT_TERTIARY} mb-10 mx-auto`}>
          I create engaging, responsive, and user-friendly web experiences and android apps
          with modern technologies and clean code.
        </p>

        <div  className="flex justify-center items-center flex-col sm:flex-row gap-4">
          <Link data-aos={"fade-up"} data-aos-duration={1500}
            href="#projects"
            className={`px-6 py-3 rounded-lg ${PRIMARY_GRADIENT} ${TEXT_PRIMARY} font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all hover:scale-105`}
          >
            View My Work
          </Link>
          <Link data-aos={"fade-up"} data-aos-duration={1800}
            href="#contact"
            className={`px-6 py-3 rounded-lg ${SECONDARY_BG} ${TEXT_PRIMARY} font-medium transition-all hover:scale-105`}
          >
            Contact Me
          </Link>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className={`${TEXT_TERTIARY} hover:${TEXT_PRIMARY} transition-colors`}>
          <ArrowDown size={24} />
        </a>
      </div> 
    </section>
  );
}
