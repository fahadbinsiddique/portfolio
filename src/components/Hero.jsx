"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

const Hero = () => {
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const containerRef = useRef(null);
  const particlesRef = useRef([]);
  const particleContainerRef = useRef(null);

  // Register plugins
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

  useEffect(() => {
    // Text animation
    gsap.fromTo(
      textRef.current.querySelectorAll("span, h1"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
      }
    );

    // Button animation
    gsap.fromTo(
      buttonRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
        delay: 0.8,
      }
    );

    // Background animation
    gsap.to(containerRef.current, {
      backgroundPosition: "50% 20%",
      duration: 20,
      ease: "none",
      repeat: -1,
      yoyo: true,
    });

    // Create particles
    const particles = [];
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement("div");
      particle.className = "absolute rounded-full bg-purple-500 opacity-20";
      particle.style.width = `${Math.random() * 10 + 5}px`;
      particle.style.height = particle.style.width;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particleContainerRef.current.appendChild(particle);
      particles.push(particle);

      gsap.to(particle, {
        x: `${(Math.random() - 0.5) * 100}`,
        y: `${(Math.random() - 0.5) * 100}`,
        duration: Math.random() * 10 + 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
    particlesRef.current = particles;

    return () => {
      particles.forEach(particle => particle.remove());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-white px-6 md:px-12 overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(circle at 30% 50%, rgba(107, 33, 168, 0.2) 0%, rgba(17, 24, 39, 1) 60%)",
      }}
    >
      {/* Animated particles background */}
      <div ref={particleContainerRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div ref={textRef}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
            Transforming <span className="text-purple-400">Ideas</span> into{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Digital</span>
              <span className="absolute bottom-0 left-0 w-full h-2 md:h-3 bg-purple-500 opacity-60 -z-1"></span>
            </span>{" "}
            <span className="text-purple-500">Experiences</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Crafting elegant solutions to complex problems with modern web technologies.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="#projects"><button
            ref={buttonRef}
            className="relative px-8 py-4 cursor-pointer bg-purple-600 hover:bg-purple-700 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30 group"
          >
            <span className="relative z-10">View My Work</span>
            <span className="absolute inset-0 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-1"></span>
            <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-white group-hover:w-4/5 group-hover:left-1/10 transition-all duration-500"></span>
          </button></Link>

          <Link href='#contact'><button className="px-8 py-4 border-2 cursor-pointer border-purple-500 text-purple-400 hover:bg-purple-900/30 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Contact Me
          </button></Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-purple-400 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;