"use client";

import { useState } from "react";

export default function Submit() {
  const [prompt, setPrompt] = useState("");

  return (
    <section className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-[#282828]">
      {/* Background elements */}

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-2xl px-4">
        {/* Title */}
        <h1
          className="font-semibold text-[4rem] text-white text-center tracking-tighter leading-none 
              [text-shadow:_0_2px_8px_rgba(0,0,0,0.3)]"
        >
          Do you have an idea?
        </h1>

        {/* Input field */}
        <div className="relative w-full group">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your vision..."
            className="w-full bg-black/30 backdrop-blur-sm border-2 border-white/10 rounded-xl py-6 px-8
                     text-white text-2xl placeholder:text-white/40 focus:outline-none focus:border-white/30
                     focus:scale-[1.02] transition-all duration-300 pr-32"
          />

          {/* Submit button */}
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-br from-white/10 to-white/5 
                      px-8 py-4 rounded-lg border border-white/10 backdrop-blur-sm hover:from-white/20 
                      hover:to-white/10 hover:scale-105 transition-all duration-300"
          >
            Generate
          </button>
        </div>

        {/* Subtle instruction text */}
        <p className="text-white/50 text-lg mt-4">
          Be descriptive, creative, and wild. AI knows no limits.
        </p>
      </div>

      {/* Subtle particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
