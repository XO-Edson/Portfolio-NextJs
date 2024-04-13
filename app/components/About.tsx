import React from "react";
import Section from "./Section";
import Image from "next/image";
import img from "../assets/ralph-mayhew-aIxIwhwKsLc-unsplash.jpg";
import Lemon1 from "../assets/Lemon1.jpg";
import Lemon2 from "../assets/Lemon2.jpg";

export default function About() {
  return (
    <Section className={"bg-neutral-300 text-black p-4"}>
      <div className="w-full h-[200px] -mt-[10%] lg:h-[300px] md:-mt-[15%]">
        <Image
          src={img}
          alt="LemonImg"
          loading="lazy"
          className="h-full object-cover w-[85%] mx-auto"
        />
      </div>

      <div className="flex justify-center p-5">
        <div className=" relative text-6xl text-neutral-500/30">
          ABOUT
          <h1 className="absolute text-black text-2xl -bottom-2 left-[25%] font-bold">
            &mdash; ABOUT
          </h1>
        </div>
      </div>

      <div className="w-full md:w-1/2 ">
        <p>
          Hi, I'm Edson Ochieng, a React web developer based in Nairobi, Kenya.
          I thrive on simplifying complex problems into intuitive designs,
          crafting websites that are both functional and visually apealling.
          With a focus on user experience and a personal touch, I ensure your
          website not only reflects your identity but also effectively
          communicates the desired message. Let's collaborate to bring your
          vision to life!
        </p>
      </div>
      <div className="flex justify-between gap-x-6 mt-16">
        <div className="w-full h-[350px]">
          <Image src={Lemon1} alt="Lemon1" className="object-cover h-full" />
        </div>
        <div className="w-full h-[350px] hidden md:block">
          <Image
            src={Lemon2}
            alt="Lemon2"
            placeholder="blur"
            className="object-cover h-full"
          />
        </div>
      </div>
    </Section>
  );
}
