"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      alert("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative py-24 text-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-lime-400/10 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <p className="text-lime-400 font-medium mb-3">
            Let's Connect
          </p>

          <h2 className="text-5xl font-black">
            Get In{" "}
            <span className="text-lime-400">
              Touch
            </span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Have a project idea, collaboration opportunity,
            or just want to say hello? Feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Side */}
          <div
            className="
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              rounded-3xl
              p-8
            "
          >
            <h3 className="text-3xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div>
                <p className="text-gray-500 text-sm mb-1">
                  Email
                </p>

                <a
                  href="mailto:skinjamamulhaque107@gmail.com"
                  className="text-orange-400 text-lg"
                >
                  skinjamamulhaque107@gmail.com
                </a>
              </div>

              <div>
                <p className="text-gray-500 text-sm mb-1">
                  Location
                </p>

                <p className="text-lg">
                  West Bengal, India
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm mb-1">
                  Availability
                </p>

                <p className="text-green-400">
                  Open For Freelance Work
                </p>
              </div>
            </div>

            <div className="flex gap-4 mt-10 flex-wrap">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
               className="
                  px-5
                  py-3
                  rounded-xl
                  border border-white/10
                  bg-transparent
                  hover:bg-lime-400
                  hover:text-black
                  hover:border-lime-400
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="
                px-5
                py-3
                rounded-xl
                border border-white/10
                bg-transparent
                hover:bg-lime-400
                hover:text-black
                hover:border-lime-400
                hover:scale-105
                transition-all
                duration-300
              "
              >
                LinkedIn
              </a>

              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="
                px-5
                py-3
                rounded-xl
                border border-white/10
                bg-transparent
                hover:bg-lime-400
                hover:text-black
                hover:border-lime-400
                hover:scale-105
                transition-all
                duration-300
              "
              >
                X / Twitter
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div
            className="
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              rounded-3xl
              p-8
            "
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-black/20
                  border border-white/10
                  outline-none
                "
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-black/20
                  border border-white/10
                  outline-none
                "
              />

              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-black/20
                  border border-white/10
                  outline-none
                "
              />

              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-black/20
                  border border-white/10
                  outline-none
                "
              />

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  py-4
                  bg-lime-400
                  text-black
                  font-bold
                  rounded-xl
                  hover:scale-[1.02]
                  transition
                "
              >
                {loading
                  ? "Sending..."
                  : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}