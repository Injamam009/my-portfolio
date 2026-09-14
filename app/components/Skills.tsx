export default function Skills() {
  const categories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "JavaScript"],
    },
    {
      title: "Backend",
      skills: ["Java", "Spring Boot", "Node.js"],
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "Tools & AI",
      skills: ["Git & GitHub", "Agentic AI"],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-lime-400/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <p className="text-lime-400 font-medium mb-3">
            My Expertise
          </p>

          <h2 className="text-5xl font-black">
            Skills &
            <span className="text-lime-400">
              {" "}Technologies
            </span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Technologies and tools I use to build modern,
            scalable and high-performance applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                rounded-3xl
                p-6
                hover:border-lime-400/40
                hover:shadow-[0_0_30px_rgba(163,230,53,0.15)]
                transition-all
                duration-300
              "
            >
              <h3 className="text-xl font-bold text-lime-400 mb-5">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-white/5
                      border
                      border-white/10
                      text-sm
                      hover:bg-lime-400/10
                      hover:border-lime-400/30
                      transition
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}