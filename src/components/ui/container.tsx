"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { containerData } from "@/constant/data";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Container = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={cn(
        "border rounded-lg shadow-sm border-zinc-200 bg-white/75 backdrop-blur-lg hover:shadow-lg transition-all ",
        "md:py-5 md:px-10 py-5 px-2 mx-10 md:mt-28 mt-20 mb-10",
        "h-full flex md:flex-row flex-col z-30"
      )}
    >
      {containerData.map((item) => {
        // would check the index if its last or first and add the margin accordingly
        const isLast = containerData.indexOf(item) === containerData.length - 1;
        const isFirst = containerData.indexOf(item) === 0;
        return (
          <div
            className={cn(
              "md:w-1/3 w-full h-full flex flex-row gap-10 px-2 mt-2 ",
              isLast
                ? "border-none"
                : "md:border-r md:border-b-0 border-b border-b-"
            )}
            key={item.title}
          >
            <span className="w-3/4 h-full">
              {mounted ? (
                <Lottie
                  animationData={item.animation}
                  className="flex justify-center items-center"
                  loop={true}
                />
              ) : (
                <div className="flex justify-center items-center h-full w-full bg-zinc-100 rounded-md" />
              )}
            </span>

            <div className={cn("md:mt-4", isFirst ? "" : "mt-2")}>
              <h1 className="text-green-600 md:text-5xl text-3xl font-extrabold">
                {item.title}
              </h1>
              <p className="mt-2 text-sm tracking-tighter mb-4">
                {item.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Container;
