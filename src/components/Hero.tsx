"use client";

import { useState, useEffect, useMemo } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = useMemo(() => [
    "React Native Developer",
    "Mobile App Developer", 
    "Cross-Platform Expert",
    "JavaScript Developer"
  ], []);

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % titles.length;
      const fullText = titles[current];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, titles]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Vũ Hoàng Phong
        </h1>
        
        <div className="text-xl md:text-3xl mb-8 h-12 flex items-center justify-center">
          <span className="border-r-2 border-white pr-1 animate-pulse">
            {text}
          </span>
        </div>
        
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
          Mobile Developer with <span className="font-semibold text-blue-400">4 years of experience</span> building 
          scalable, high-performance cross-platform mobile applications for iOS and Android. 
          Passionate about delivering impactful products and optimizing user experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="#projects" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-18 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
