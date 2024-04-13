import React from "react";
import Section from "./Section";
import Image from "next/image";
import img from "../assets/ralph-mayhew-aIxIwhwKsLc-unsplash.jpg";

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
    </Section>
  );
}
