"use client";

import { motion } from "framer-motion";
import StatusClock from "./StatusClock";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        flex
        items-center
        min-h-[85vh]
        pt-16
        pb-20
        overflow-hidden
      "
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-lime-400/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-500/10 blur-[180px] rounded-full" />

     <div className="max-w-7xl mx-auto px-8 lg:px-20 w-full">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-6 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-blue-400 text-lg font-medium mb-5">
              👋 Welcome to my portfolio
            </p>

            <h1 className="font-black leading-[0.9] text-5xl md:text-7xl lg:text-[90px]">
              Sk.
              <br />
              <span className="text-lime-400">
                Injamamul
              </span>
              <br />
              Haque
            </h1>

            <h2 className="mt-6 text-3xl md:text-5xl italic font-light">
              Full Stack{" "}
              <span className="text-purple-400">
                Developer
              </span>
            </h2>

            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-400/10 border border-lime-400/20">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>

              <span className="text-green-400 text-sm font-medium">
                Available for freelance work
              </span>
            </div>

            <p className="mt-8 text-gray-400 text-lg max-w-lg leading-relaxed">
              I build modern web applications,
              AI-powered solutions and startup-focused
              products that solve real-world problems.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="
                  px-6
                  py-4
                  bg-red-400
                  text-black
                  rounded-xl
                  font-bold
                  hover:scale-105
                  transition-all
                "
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-4
                  py-4
                  border
                  border-white/20
                  rounded-xl
                  hover:bg-white/5
                  transition-all
                "
              >
                Download Resume
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-xl">
              <div className="bg-white/5 border border-white/10 rounded-xl py-5 text-center">
                <h3 className="text-3xl font-bold text-lime-400">
                  8+
                </h3>
                <p className="text-gray-400 text-sm">
                  Projects
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl py-5 text-center">
                <h3 className="text-3xl font-bold text-lime-400">
                  12+
                </h3>
                <p className="text-gray-400 text-sm">
                  Technologies
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl py-5 text-center">
                <h3 className="text-3xl font-bold text-lime-400">
                  100%
                </h3>
                <p className="text-gray-400 text-sm">
                  Learning
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-center lg:-mt-8"
          >
            {/* Clock */}
            <StatusClock />

            {/* Profile Image */}
            <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex justify-center"
                >
              <div className="absolute inset-0 bg-lime-400/20 blur-[120px] rounded-full" />

              <div
                className="
                  relative
                  w-[260px]
                  h-[260px]
                  md:w-[320px]
                  md:h-[320px]
                  rounded-full
                  overflow-hidden
                  border-4
                  border-lime-400
                  shadow-[0_0_70px_rgba(163,230,53,0.35)]
                "
              >
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}