"use client";

import React from "react";
import Typewriter from "typewriter-effect";

const Banner = (bannerWords : string[]) => {
  return (
    <div>
      <Typewriter
        options={{
          strings: bannerWords,
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default Banner;
