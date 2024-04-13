"use client";
import Image from "next/image";
import { curve, heroBackground, robot } from "../assets";
import pfp from "../assets/pfp.jpeg";
import Section from "./Section";
import Button from "./Button";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";

function Hero() {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] min-h-screen grid place-content-center"
      id="hero"
    >
      <div
        className="container relative max-w-[62rem] mx-auto "
        ref={parallaxRef}
      >
        <div className="relative z-[1] text-center mb-16 md:mb-20 lg:mb-[6rem]">
          <h1 className="font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem] mb-6">
            Explore the Possibilities of AI Chatting with Brainwave
            <span className=" inline-block relative">
              Brainwave
              <Image
                src={curve}
                alt={"BW"}
                className="absolute top-full left-0 w-full lg:-mt-2 "
                width={624}
                height={28}
              />
            </span>
          </h1>
          <p className="">
            Unleash the Power of AI within Brainwave. Upgrade your Productivity
            with Brainwave, the open AI chat app.
          </p>
          <Button>Download</Button>
        </div>
        <div className=" relative w-full lg:mb-24">
          <ScrollParallax isAbsolutelyPositioned>
            <ul className="flex absolute left-[3.5rem] bottom-0 p-4 space-x-2 backdrop-blur border rounded-2xl xl:flex bg-[#474060]/40 border-[#FFFFFF]/10">
              {heroIcons.map((icon, index) => (
                <Image
                  key={index}
                  src={icon}
                  width={24}
                  height={25}
                  alt={icon}
                />
              ))}
            </ul>
          </ScrollParallax>
        </div>
      </div>
    </Section>
  );
}

export default Hero;
