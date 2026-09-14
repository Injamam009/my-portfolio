export default function Journey() {
  const journey = [
    {
      year: "2023",
      title: "Started Programming",
      description:
        "Began learning Java, programming fundamentals, and problem-solving.",
    },
    {
      year: "2024",
      title: "Full Stack Development",
      description:
        "Learned React, Next.js, Node.js, MongoDB and started building real-world projects.",
    },
    {
      year: "2025",
      title: "AI & Startup Projects",
      description:
        "Started developing AI-powered applications and startup-focused products.",
    },
    {
      year: "Present",
      title: "Building Professional Portfolio",
      description:
        "Creating scalable web applications, AI systems and expanding technical expertise.",
    },
  ];

  return (
    <section
      id="journey"
      className="relative py-24 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime-400/10 blur-[180px] rounded-full" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <p className="text-lime-400 font-medium mb-3">
            My Growth
          </p>

          <h2 className="text-5xl font-black">
            My
            <span className="text-lime-400">
              {" "}Journey
            </span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            A timeline of my learning path, development journey,
            and growth as a software developer.
          </p>
        </div>

        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-lime-400/20 -translate-x-1/2"></div>

          <div className="space-y-16">
            {journey.map((item, index) => (
              <div
                key={item.year}
                className={`flex items-center ${
                  index % 2 === 0
                    ? "justify-start"
                    : "justify-end"
                }`}
              >
                <div className="w-full md:w-[45%]">
                  <div
                    className="
                      bg-white/5
                      backdrop-blur-xl
                      border
                      border-white/10
                      rounded-3xl
                      p-6
                      hover:border-lime-400/40
                      hover:shadow-[0_0_30px_rgba(163,230,53,0.15)]
                      transition-all
                    "
                  >
                    <span className="text-lime-400 font-bold">
                      {item.year}
                    </span>

                    <h3 className="text-2xl font-bold mt-2 mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div
                  className="
                    absolute
                    left-1/2
                    w-5
                    h-5
                    bg-lime-400
                    rounded-full
                    -translate-x-1/2
                    shadow-[0_0_20px_rgba(163,230,53,0.8)]
                  "
                  style={{
                    top: `${index * 180 + 40}px`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}