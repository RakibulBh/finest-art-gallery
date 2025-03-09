import Image from "next/image";
import React from "react";

const MainPic = () => {
  return (
    <>
      {/* Main pic */}
      <div className="relative flex flex-col items-center w-[27rem] aspect-square group">
        {/* Image container with gradient overlay and hover effect */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500">
          <Image
            fill
            src="/generated.png"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 
              filter grayscale-[80%] brightness-90 contrast-110"
            alt="Background"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
        </div>

        {/* Text with dynamic effects */}
        <p className="font-bold text-[3.8rem] text-white z-10 tracking-wide leading-none absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-center w-full whitespace-nowrap">
          <span
            className="relative inline-block 
              [text-shadow:_-8px_-8px_20px_rgba(255,255,255,0.3),_-12px_-12px_40px_rgba(255,255,255,0.2),_-16px_-16px_60px_rgba(255,255,255,0.1)]
              transition-all duration-300"
          >
            KEEP IT ROLLING
          </span>
        </p>
      </div>
    </>
  );
};

export default MainPic;
