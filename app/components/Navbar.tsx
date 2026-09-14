"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-4 z-50 w-full px-4 flex justify-center">
     <nav
  className="
    w-full
    max-w-4xl
    flex items-center justify-between
    bg-[#161B22]/80
    backdrop-blur-xl
    border border-white/10
    rounded-full
    px-6 py-4
    shadow-lg
  "
>
        {/* Logo */}
        <Link
          href="/"
          className="
            text-4xl
            font-black
            text-lime-400
          "
        >
          SIH
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-10 text-gray-300">
          <a href="#about" className="hover:text-lime-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-lime-400 transition">
            Skills
          </a>

          <a href="#journey" className="hover:text-lime-400 transition">
            Journey
          </a>

          <a href="#projects" className="hover:text-lime-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-lime-400 transition">
            Contact
          </a>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="
            px-8
            py-4
            rounded-full
            bg-lime-400
            text-black
            font-bold
            hover:scale-105
            transition-all
            duration-300
          "
        >
          Let's Talk
        </a>
      </nav>
    </header>
  );
}