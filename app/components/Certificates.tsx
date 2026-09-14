export default function Certificates() {
  const certificates = [
    {
      title: "Java Programming",
      issuer: "Oracle Academy",
      year: "2024",
      link: "https://your-java-certificate-link.com",
    },
    {
      title: "Full Stack Web Development",
      issuer: "Udemy",
      year: "2025",
      link: "https://your-fullstack-certificate-link.com",
    },
    {
      title: "React & Next.js",
      issuer: "Coursera",
      year: "2025",
      link: "https://your-react-certificate-link.com",
    },
    {
      title: "AI & Machine Learning",
      issuer: "Google",
      year: "2025",
      link: "https://your-ai-certificate-link.com",
    },
  ];

  return (
    <section
      id="certificates"
      className="relative py-24 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-lime-400 font-medium mb-3">
            Achievements
          </p>

          <h2 className="text-5xl font-black">
            My
            <span className="text-lime-400">
              {" "}Certificates
            </span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Certifications and achievements that validate
            my technical knowledge and continuous learning.
          </p>
        </div>

        {/* Certificate Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((certificate) => (
            <a
              key={certificate.title}
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                block
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-6
                hover:border-lime-400/40
                hover:shadow-[0_0_30px_rgba(163,230,53,0.15)]
                transition-all
                duration-300
                hover:-translate-y-2
              "
            >
              {/* Icon */}
              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-lime-400/10
                  flex
                  items-center
                  justify-center
                  text-2xl
                  mb-5
                "
              >
                🏆
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3">
                {certificate.title}
              </h3>

              {/* Issuer */}
              <p className="text-gray-400 mb-3">
                {certificate.issuer}
              </p>

              {/* Year */}
              <span
                className="
                  inline-block
                  px-3
                  py-1
                  rounded-full
                  bg-lime-400/10
                  text-lime-400
                  text-sm
                "
              >
                {certificate.year}
              </span>

              {/* View Link */}
              <div className="mt-5">
                <span className="text-lime-400 text-sm font-medium group-hover:translate-x-1 transition inline-block">
                  View Certificate →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}