import Image from "next/image";
import React from "react";
import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import quantumLogo from "@/assets/logo-quantum.png";
import pulseLogo from "@/assets/logo-pulse.png";
import echoLogo from "@/assets/logo-echo.png";

type Props = {};

const PartnersLogo = (props: Props) => {
  return (
    <section className="py-20 md:my-24">
      <div className="container">
        <div className="flex items-center gao-5">
          <div className="flex-1 md:flex-none">
            <h2>Trusted by innovative partners</h2>
          </div>
          <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div className="flex flex-none gap-14">
              {[
                acmeLogo,
                apexLogo,
                celestialLogo,
                quantumLogo,
                pulseLogo,
                echoLogo,
              ].map((logo) => (
                <Image
                  src={logo.src}
                  key={logo.src}
                  alt="logo"
                  width={100}
                  height={100}
                  className="h-6 w-auto"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersLogo;
