export default function Projects() {
  const projects = [
    {
      title: "VideoBazaar",
      description:
        "A marketplace platform for buying and selling digital video content with secure transactions.",
      tech: ["Next.js", "Node.js", "MongoDB"],
      github: "https://github.com/yourusername/videobazaar",
      live: "https://videobazaar.vercel.app",
    },
    {
      title: "AI Resume Analyzer",
      description:
        "AI-powered resume analysis tool that provides feedback and improvement suggestions.",
      tech: ["Next.js", "OpenAI", "Tailwind"],
      github: "https://github.com/yourusername/resume-ai",
      live: "https://resume-ai.vercel.app",
    },
    {
      title: "Food Delivery Platform",
      description:
        "A platform connecting PG students, hostel residents and office workers with local food providers.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/yourusername/food-app",
      live: "https://food-app.vercel.app",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern personal portfolio showcasing projects, skills, certifications and achievements.",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://yourportfolio.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-400/10 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
         <p className="text-red-400 font-medium text-2xl md:text-4xl mb-3">
            My Work
          </p>

          <h2 className="text-5xl font-black">
            Featured
            <span className="text-green-500">
              {" "}Projects
            </span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Some of the projects I've built using modern
            technologies and problem-solving skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                rounded-3xl
                p-7
                hover:border-red-400/40
                hover:shadow-[0_0_30px_rgba(163,230,53,0.15)]
                transition-all
                duration-300
              "
            >
              {/* Project Image Placeholder */}
              <div
                className="
                  h-52
                  rounded-2xl
                  bg-gradient-to-br
                  from-lime-400/10
                  to-purple-500/10
                  border border-white/10
                  mb-6
                  flex items-center
                  justify-center
                "
              >
                <span className="text-5xl">🚀</span>
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-5">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3
                      py-1
                      rounded-full
                      bg-pink-400/10
                      text-red-400
                      text-sm
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    px-5
                    py-3
                    bg-green-400
                    text-black
                    rounded-xl
                    font-semibold
                    hover:scale-105
                    transition
                  "
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    px-5
                    py-3
                    border border-white/20
                    rounded-xl
                    hover:bg-white/5
                    transition
                  "
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}