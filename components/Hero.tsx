import React from "react";
import WaitlistButton from "./custom/WaitlistButton";
import starsBg from "@/assets/stars.png";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section
      className="h-[492px] flex items-center"
      style={{ backgroundImage: `url(${starsBg.src})` }}>
      <div className="absolute h-64 w-64 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
      <div className="container relative">
        <h1 className="text-7xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
          Clodron AI SaaS
        </h1>
        <p className="text-lg p-2 text-white/70 mt-5 text-center">
          The future of AI. Elevate your business with Clodron. This is where
          the future of AI meets the future of business.
        </p>
        <div className="flex justify-center mt-5">
          <WaitlistButton>Join waitlist</WaitlistButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
