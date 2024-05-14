import Image from "next/image";
import checkout from "../assets/Checkout.jpg";
import countries from "../assets/Countries.jpg";
import login from "../assets/login page.png";
import RPS from "../assets/RPS.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function Projects() {
  return (
    <section id="Projects">
      <div className="flex justify-center p-5 mb-6">
        <div className=" relative text-6xl text-neutral-500/30">
          SAMPLE PROJECTS
          <h1 className="absolute text-white text-2xl -bottom-2 left-[25%] font-bold">
            &mdash; SAMPLE PROJECTS
          </h1>
        </div>
      </div>
      <div className=" flex flex-col justify-center mb-[5%] md:flex-row gap-y-4 md:gap-x-4 w-[90%] mx-auto">
        <div className="w-full">
          <div className="w-full md:max-w-[400px] md:w-full h-56 overflow-hidden">
            <Image
              src={login}
              alt="Expense Tracker"
              loading="lazy"
              className="w-full h-full object-cover image"
              placeholder="blur"
            />
          </div>
          <div className=" mt-3">
            <h3 className=" font-bold ">Cooks.</h3>
            <p className=" text-neutral-400">
              A social media platform where food lovers and enthusiasts share
              ideas and experiences about food.
            </p>
          </div>
          <div className=" flex gap-x-4 mt-2 over">
            <a href="https://github.com/XO-Edson/Cooks." target="_blank">
              <FaGithub className=" text-xl cursor-pointer" />
            </a>
            <a href="https://cooks-client.vercel.app/" target="_blank">
              <FaExternalLinkAlt className=" text-xl cursor-pointer" />
            </a>
          </div>
        </div>
        <div className="w-full">
          <div className="bg-blue-400 w-full md:max-w-[400px] md:w-full h-56 overflow-hidden">
            <Image
              src={countries}
              alt="Where in the world"
              className=" w-full h-full object-cover image"
            />
          </div>

          <div className=" mt-3">
            <h3 className=" font-bold ">Where in the world?</h3>
            <p className=" text-neutral-400">
              General information about countries worldwide from the countries
              API
            </p>
          </div>
          <div className=" flex gap-x-4 mt-2">
            <a
              href="https://github.com/XO-Edson/REST-countries-API"
              target="_blank"
            >
              <FaGithub className=" text-xl cursor-pointer" />
            </a>
            <a
              href="https://rest-countries-api-rho-self.vercel.app/"
              target="_blank"
            >
              <FaExternalLinkAlt className=" text-xl cursor-pointer" />
            </a>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full md:max-w-[400px] md:w-full h-56 overflow-hidden">
            <Image
              src={RPS}
              alt="Rock Paper Scissors"
              loading="lazy"
              className="w-full h-full object-cover scale-100 image"
            />
          </div>

          <div className=" mt-3">
            <h3 className=" font-bold ">Rock Paper Scissors Game</h3>
            <p className=" text-neutral-400">
              A classic rock paper Scissors game that tracks wins
            </p>
          </div>
          <div className=" flex gap-x-4 mt-2">
            <a
              href="https://github.com/XO-Edson/Rock-paper-scissors-react"
              target="_blank"
            >
              <FaGithub className=" text-xl cursor-pointer" />
            </a>
            <a
              href="https://rock-paper-scissors-react-psi.vercel.app/"
              target="_blank"
            >
              <FaExternalLinkAlt className=" text-xl cursor-pointer" />
            </a>
          </div>
        </div>

        <div className="w-full ">
          <div className="w-full md:max-w-[400px] md:w-full h-56 overflow-hidden">
            <Image
              src={checkout}
              alt="E-commerce"
              loading="lazy"
              className=" w-full h-full object-cover image"
            />
          </div>
          <div className=" mt-3">
            <h3 className=" font-bold ">E-commerce Product checkout section</h3>
            <p className=" text-neutral-400">
              A product section with general check out features
            </p>
          </div>
          <div className=" flex gap-x-4 mt-2">
            <a
              href="https://github.com/XO-Edson/E-Commerce-product-page"
              target="_blank"
            >
              <FaGithub className=" text-xl cursor-pointer" />
            </a>
            <a
              href="https://e-commerce-product-page-mu-pink.vercel.app/"
              target="_blank"
            >
              <FaExternalLinkAlt className=" text-xl cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
      <hr className=" my-8 border border-neutral-500" />
    </section>
  );
}
