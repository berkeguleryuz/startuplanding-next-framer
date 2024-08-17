import React from "react";
import WaitlistButton from "./custom/WaitlistButton";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section>
      <div className="container">
        <h1 className="text-7xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
          Clodron AI SaaS
        </h1>
        <p>
          The future of AI. Elevate your business with Clodron. This is where
          the future of AI meets the future of business.
        </p>
        <WaitlistButton>Join waitlist</WaitlistButton>
      </div>
    </section>
  );
};

export default Hero;
