"use client";

import React, { useEffect, useRef } from "react";

const Banner = ({ bannerWords }: { bannerWords: string[] }) => {
  const typewriterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let typewriter: any;

    const initTypewriter = async () => {
      try {
        // Dynamic import to avoid SSR issues with document/window access
        const TypewriterModule = await import("typewriter-effect/dist/core");
        const Typewriter = TypewriterModule.default || TypewriterModule;

        if (typewriterRef.current) {
          typewriter = new Typewriter(typewriterRef.current, {
            strings: bannerWords,
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 50,
            cursor: '<span class="text-green-500">|</span>',
            wrapperClassName: 'text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500'
          });
          typewriter.start();
        }
      } catch (error) {
        console.error("Failed to load typewriter-effect:", error);
      }
    };

    initTypewriter();

    return () => {
      if (typewriter) {
        typewriter.stop();
      }
    };
  }, [bannerWords]);

  return (
    <span className="inline-block min-h-[1.5em] min-w-[200px]">
      <span ref={typewriterRef}></span>
    </span>
  );
};

export default Banner;
