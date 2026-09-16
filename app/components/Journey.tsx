"use client";

import { motion } from "framer-motion";

export default function Journey() {
  const timeline = [
    {
      year: "2022",
      title: "Started B.Tech in IT",
      description:
        "Started my journey in Information Technology and explored programming fundamentals.",
    },
    {
      year: "2023",
      title: "Web Development",
      description:
        "Learned HTML, CSS, JavaScript and built my first responsive websites.",
    },
    {
      year: "2024",
      title: "Full Stack Development",
      description:
        "Worked with React, Next.js, Node.js and MongoDB to build complete applications.",
    },
    {
      year: "2025",
      title: "AI & Modern Technologies",
      description:
        "Exploring Agentic AI, Generative AI and scalable software engineering practices.",
    },
  ];

  return (
    <section
      id="journey"
      className="relative py-24 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-lime-400/10 blur-[180px] rounded-full" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-lime-400 font-medium mb-3">
            My Journey
          </p>

          <h2 className="text-5xl font-black">
            Career
            <span className="text-lime-400">
              {" "}Timeline
            </span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            My learning and development journey over the years.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 h-full w-[3px] bg-lime-400/30 -translate-x-1/2 hidden md:block" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className={`
                relative flex items-center mb-16
                ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }
              `}
            >
              {/* Dot */}
              <div
                className="
                  hidden md:block
                  absolute left-1/2
                  -translate-x-1/2
                  w-5 h-5
                  bg-lime-400
                  rounded-full
                  shadow-[0_0_25px_rgba(163,230,53,0.9)]
                "
              />

              {/* Card */}
              <div
                className="
                  w-full md:w-[45%]
                  bg-white/5
                  backdrop-blur-xl
                  border border-white/10
                  rounded-3xl
                  p-6
                  hover:border-lime-400/40
                  hover:shadow-[0_0_40px_rgba(163,230,53,0.15)]
                  transition-all
                  duration-500
                "
              >
                <span className="text-lime-400 font-bold text-lg">
                  {item.year}
                </span>

                <h3 className="text-2xl font-bold mt-2 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}