import React from "react";
import {HeroContent } from "./sub/HeroContent";

const Hero = () => {
  return (
    <div className=" flex flex-col h-full w-full" id="about-me">
<video
  autoPlay
  muted
  loop
  className="absolute top-0 h-full w-full left-0 z-[1] object-cover"
  style={{ objectFit: 'cover', transform: 'translateY(-40%) rotate(180deg)' }}
>
  <source src="/blackhole.webm" type="video/webm" />
</video>


     <HeroContent/>
    </div>
  );
};

export default Hero;