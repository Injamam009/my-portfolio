"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion, useMotionValue, animate } from "framer-motion";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

const x = useMotionValue(0);

const sliderRef = useRef<HTMLDivElement>(null);

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
  } finally {
    setLoading(false);

    animate(x, 0, {
      type: "spring",
      stiffness: 500,
      damping: 30,
    });
  }
};

  return (
    <section
      id="contact"
      className="relative py-24 text-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-lime-400/10 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto px-9 lg:px-12 relative z-10">
        <div className="text-center mb-26">
         <p className="text-red-400 font-medium text-2xl md:text-4xl -mt-8 mb-3">
            Let's Connect
          </p>

          <h2 className="text-5xl font-black">
            Get In{" "}
            <span className="text-green-400">
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
                href="https://github.com/Injamam009"
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
                href="https://linkedin.com/in/sk-injamamul-haque-2a1170252"
                target="_blank"
                rel="noopener noreferrer"
                className="
                px-5
                py-3
                rounded-xl
                border border-white/10
                bg-transparent
                hover:bg-blue-400
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
                href="https://twitter.com/skinjamam009"
                target="_blank"
                rel="noopener noreferrer"
                className="
                px-5
                py-3
                rounded-xl
                border border-white/10
                bg-transparent
                hover:bg-gray-400
                hover:text-black
                hover:border-lime-400
                hover:scale-105
                transition-all
                duration-300
              "
              >
                X / Twitter
              </a>

              <a
              href="https://www.freelancer.in/u/skinjamamul009"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-5
                py-3
                rounded-xl
                border border-white/10
                bg-transparent
                hover:bg-blue-400
                hover:text-black
                hover:border-lime-400
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Freelancer
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

             <div className="relative w-full h-16 rounded-full bg-gray-300 overflow-hidden">


<div
  ref={sliderRef}
  className="relative w-full h-16 rounded-full bg-gradient-to-r from-slate-200 to-slate-300 overflow-hidden"
>
  <div className="absolute inset-0 flex items-center justify-center font-bold text-black text-xl">
    {loading ? "Sending..." : "Slide to Send"}
  </div>

 <motion.div
  drag="x"
  style={{ x }}
  dragElastic={0}
  dragConstraints={sliderRef}
  whileDrag={{ scale: 1.08 }}
  onDragEnd={(e, info) => {
    const sliderWidth = sliderRef.current?.offsetWidth || 0;
    const maxX = sliderWidth - 64;

    if (info.offset.x > sliderWidth * 0.75 && !loading) {
      animate(x, maxX, {
        type: "spring",
        stiffness: 500,
        damping: 30,
      });

      const formElement = document.querySelector(
        "#contact form"
      ) as HTMLFormElement;

      formElement?.requestSubmit();
    } else {
      animate(x, 0, {
        type: "spring",
        stiffness: 500,
        damping: 30,
      });
    }
  }}
  className="
    absolute
    left-1
    top-1
    w-14
    h-14
    rounded-full
    shadow-xl
    flex
    items-center
    justify-center
    cursor-grab
    active:cursor-grabbing
    z-10
    bg-gradient-to-br
    from-lime-400
    via-emerald-500
    to-cyan-500
  "
>
  <span className="text-3xl">🚀</span>
</motion.div>
</div>
</div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}