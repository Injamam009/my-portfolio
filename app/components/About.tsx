"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 bg-[#0B0F14] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-20 w-72 h-72 bg-lime-400/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-20 w-72 h-72 bg-cyan-400/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-lime-400 font-semibold mb-4">
              About Me
            </p>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Building Digital
              <span className="text-lime-400"> Experiences</span>
            </h2>

            <p className="mt-6 text-gray-400 leading-relaxed text-lg">
              I'm Sheikh Injamamul Haque, a Full Stack Developer from West Bengal, India.

I specialize in building modern web applications using Java, Spring Boot, React, Next.js, MongoDB, and MySQL. I enjoy creating practical solutions that solve real-world problems and continuously explore AI technologies to build innovative products.

My goal is to contribute to impactful projects, collaborate with talented teams, and grow as a software engineer while delivering high-quality digital experiences.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h3 className="text-lime-400 text-3xl font-bold">
                  8+
                </h3>
                <p className="text-gray-400 mt-1">
                  Projects Completed
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h3 className="text-lime-400 text-3xl font-bold">
                  12+
                </h3>
                <p className="text-gray-400 mt-1">
                  Technologies
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-lime-400/20 blur-[100px]" />

              <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                <h3 className="text-2xl font-bold text-white mb-8">
                  Quick Info
                </h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-gray-500 text-sm">
                      Name
                    </p>
                    <p className="text-white text-lg">
                      Sheikh Injamamul Haque
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">
                      Role
                    </p>
                    <p className="text-white text-lg">
                      Full Stack Developer
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">
                      Location
                    </p>
                    <p className="text-white text-lg">
                      India
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">
                      Focus
                    </p>
                    <p className="text-white text-lg">
                      AI • Web • Java
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">
                      Availability
                    </p>
                    <p className="text-lime-400 text-lg font-semibold">
                      Open to Opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}