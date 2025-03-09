"use client";

import React, { useState } from "react";

const Input = () => {
  const [prompt, setPrompt] = useState("");

  return (
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
        disabled={prompt.length < 5}
        className="absolute right-2 top-1/2 -translate-y-1/2 
                  px-8 py-4 rounded-lg border border-white/20
                  backdrop-blur-lg bg-white/5
                  text-white/80 hover:text-white
                  disabled:bg-white/2 disabled:text-white/30
                  disabled:border-white/10 disabled:cursor-not-allowed
                  hover:bg-white/10 transition-all duration-300
                  disabled:hover:bg-white/5 disabled:hover:scale-100
                  hover:scale-105"
      >
        Generate
      </button>
    </div>
  );
};

export default Input;
