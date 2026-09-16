"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Message = {
  text: string;
  sender: "user" | "bot";
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      text: "👋 Hi! I'm SIH AI Assistant. Ask me anything about Sheikh Injamamul Haque.",
      sender: "bot",
    },
  ]);
  const closeChat = () => {
  setOpen(false);

  setMessages([
    {
      text: "🚀 Welcome! I'm SIH AI Assistant. Ask me about skills, projects, education, certifications, experience or contact information.",
      sender: "bot",
    },
  ]);
};

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentInput = input;
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: currentInput,
        }),
      });

      const data = await res.json();

      const botMessage: Message = {
        text: data.reply,
        sender: "bot",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error);

      const botMessage: Message = {
        text: "❌ Sorry, AI Assistant is currently unavailable.",
        sender: "bot",
      };

      setMessages((prev) => [...prev, botMessage]);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => {
            if (open) {
                closeChat();
            } else {
                setOpen(true);
            }
            }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
        fixed
        bottom-6
        right-6
        z-50
        w-16
        h-16
        rounded-full
        bg-gradient-to-r
        from-sky-500
        to-cyan-400
        text-white
        text-2xl
        shadow-[0_0_30px_rgba(56,189,248,0.5)]
        hover:scale-110
        "
      >
        🤖
      </motion.button>

      {/* Chat Window */}
      {open && (
        <div
          className="
            fixed
            bottom-24
            right-6
            z-50
            w-[350px]
            h-[500px]
            bg-slate-900/95 backdrop-blur-xl
            border border-sky-400/20
            rounded-3xl
            overflow-hidden
            shadow-[0_0_40px_rgba(56,189,248,0.25)]
          "
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-sky-500 to-cyan-400 text-white font-bold p-4 flex justify-between items-center">
            <span>🤖 SIH AI Assistant</span>

            <button
                onClick={closeChat}
                className="text-xl hover:rotate-90 transition duration-300"
            >
                ✕
            </button>
            </div>

          {/* Messages */}
          <div className="h-[360px] overflow-y-auto p-4 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-xl max-w-[85%] ${
                  msg.sender === "user"
                    ? "bg-gradient-to-r from-sky-500 to-cyan-400 text-white ml-auto"
                    : "bg-slate-800 text-gray-100 border border-white/10"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/10 flex gap-2">
            <input
              type="text"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && sendMessage()
              }
              className="
                flex-1
                bg-slate-800
                text-white
                px-3
                py-2
                rounded-xl
                outline-none
              "
            />

            <button
              onClick={sendMessage}
              className="
                bg-gradient-to-r
                from-sky-500
                to-cyan-400
                text-white
                px-4
                rounded-xl
                font-semibold
                hover:scale-105
                transition
                "
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}