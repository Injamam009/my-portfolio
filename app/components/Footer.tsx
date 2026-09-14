"use client";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative py-16 mt-20">
      {/* Decorative Line */}
      <div className="max-w-5xl mx-auto border-t border-white/10 mb-10"></div>

      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6 mb-8">
          <a
            href="https://instagram.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-12 h-12
              rounded-full
              flex items-center justify-center
              border border-white/20
              hover:border-pink-500
              hover:text-pink-500
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            <FaInstagram size={20} />
          </a>

          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-12 h-12
              rounded-full
              flex items-center justify-center
              border border-white/20
              hover:border-lime-400
              hover:text-lime-400
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://linkedin.com/in/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-12 h-12
              rounded-full
              flex items-center justify-center
              border border-white/20
              hover:border-blue-500
              hover:text-blue-500
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            <FaLinkedinIn size={20} />
          </a>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-12 h-12
              rounded-full
              flex items-center justify-center
              border border-white/20
              hover:border-green-500
              hover:text-green-500
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            <FaWhatsapp size={20} />
          </a>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-8 text-gray-400 mb-8">
          <a href="#home" className="hover:text-lime-400 transition">
            Home
          </a>

          <a href="#about" className="hover:text-lime-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-lime-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-lime-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-lime-400 transition">
            Contact
          </a>
        </div>

        {/* Name */}
        <h3 className="text-2xl font-bold text-lime-400 mb-2">
          Sheikh Injamamul Haque
        </h3>

        <p className="text-gray-500 text-sm mb-6">
          Full Stack Developer • AI Enthusiast
        </p>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Sheikh Injamamul Haque.
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}