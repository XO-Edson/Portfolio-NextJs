"use client";
import Image from "next/image";
import { curve } from "../assets";
import Section from "./Section";
import Button from "./Button";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import SocialsIcons from "./SocialsIcons";

function Hero() {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="relative pt-[12rem] -mt-[5.25rem] min-h-screen grid place-content-center"
      id="Home"
    >
      <div className=" absolute bottom-[5%] left-1 text-neutral-500 ">
        <p className="vertical-align cursor-pointer">&mdash; DSN &mdash;</p>
      </div>
      <div
        className="container relative max-w-[62rem] mx-auto "
        ref={parallaxRef}
      >
        <div className="relative z-[1] text-center mb-16 md:mb-20 lg:mb-[6rem]">
          <h1 className="font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem] mb-6">
            Hi, I'm Edson.
            <br />
            <span className="inline-block relative">
              A React Web Developer
              <Image
                src={curve}
                alt={"BW"}
                className="absolute -bottom-8 left-0 w-full lg:-mt-2 "
                width={624}
                height={28}
              />
            </span>
          </h1>
          <p className="text-[0.875rem] leading-[1.5rem] mt-10 md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8 max-w-3xl mx-auto mb-6 text-[#CAC6DD] lg:mb-8">
            Unveiling the Artistry of Frontend Development.
          </p>
          <Button>Resume</Button>
        </div>
        <div className=" relative w-full lg:mb-24 z-10">
          <ScrollParallax isAbsolutelyPositioned>
            <SocialsIcons />
          </ScrollParallax>
        </div>
      </div>
    </Section>
  );
}

export default Hero;
