import React from "react";
import WaitlistButton from "./custom/WaitlistButton";
import starsBg from "@/assets/stars.png";
import gridBg from "@/assets/grid-lines.png";

type Props = {};

const CallToAction = (props: Props) => {
  return (
    <section className="py-20">
      <div className="container">
        <div
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative"
          style={{ backgroundImage: `url(${starsBg.src})` }}>
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
            style={{ backgroundImage: `url(${gridBg.src})` }}
          />
          <div className="relative">
            <h2 className="text-5xl tracking-tighter text-center font-medium">
              Ready to get started?
            </h2>
            <p className="text-center text-lg text-white/70 px-4 mt-5 tracking-tight">
              Get started with Clodron today.
            </p>
            <div className="flex justify-center mt-8">
              <WaitlistButton>Join waitlist</WaitlistButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
