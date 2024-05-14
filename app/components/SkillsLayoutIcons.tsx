import { IoLogoJavascript } from "react-icons/io5";
import { FaNode } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

export default function SkillsLayoutIcons() {
  return (
    <div className="relative flex w-[17rem] md:w-[22rem] aspect-square border border-neutral-500 rounded-full scale:75 md:scale-100 md:mt-10">
      <div className="flex w-48 md:w-60 aspect-square m-auto border border-neutral-500 rounded-full">
        <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-neutral-600 rounded-full">
          <div className="flex items-center justify-center w-full h-full bg-slate-800 rounded-full">
            <h1 className="font-bold tracking-widest text-slate-500">DSN</h1>
          </div>
        </div>
      </div>
      <ul>
        <li
          className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
            0 * 45
          }`}
        >
          <div
            className={`relative -top-[1.6rem] flex justify-center items-center w-[3.2rem] h-[3.2rem] bg-neutral-800 border border-neutral-500/15 rounded-xl -rotate-${
              0 * 45
            } `}
          >
            <IoLogoJavascript className=" text-3xl text-yellow-300" />
          </div>
        </li>
        <li
          className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
            1 * 45
          }`}
        >
          <div
            className={`relative -top-[1.6rem] flex justify-center items-center w-[3.2rem] h-[3.2rem] bg-neutral-800 border border-neutral-500/15 rounded-xl -rotate-${
              1 * 45
            } `}
          >
            <FaNode className=" text-3xl text-green-700" />
          </div>
        </li>
        <li
          className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
            2 * 45
          }`}
        >
          <div
            className={`relative -top-[1.6rem] flex justify-center items-center w-[3.2rem] h-[3.2rem] bg-neutral-800 border border-neutral-500/15 rounded-xl -rotate-${
              2 * 45
            } `}
          >
            <FaCss3Alt className=" text-3xl text-blue-600" />
          </div>
        </li>
        <li
          className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
            3 * 45
          }`}
        >
          <div
            className={`relative -top-[1.6rem] flex justify-center items-center w-[3.2rem] h-[3.2rem] bg-neutral-800 border border-neutral-500/15 rounded-xl -rotate-${
              3 * 45
            } `}
          >
            <FaReact className=" text-3xl text-blue-400" />
          </div>
        </li>
        <li
          className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
            4 * 45
          }`}
        >
          <div
            className={`relative -top-[1.6rem] flex justify-center items-center w-[3.2rem] h-[3.2rem] bg-neutral-800 border border-neutral-500/15 rounded-xl -rotate-${
              4 * 45
            } `}
          >
            <BiLogoTypescript className=" text-3xl text-blue-500" />
          </div>
        </li>
        <li
          className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
            5 * 45
          }`}
        >
          <div
            className={`relative -top-[1.6rem] flex justify-center items-center w-[3.2rem] h-[3.2rem] bg-neutral-800 border border-neutral-500/15 rounded-xl -rotate-${
              5 * 45
            } `}
          >
            <SiTailwindcss className=" text-3xl text-blue-400" />
          </div>
        </li>
        <li
          className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
            6 * 45
          }`}
        >
          <div
            className={`relative -top-[1.6rem] flex justify-center items-center w-[3.2rem] h-[3.2rem] bg-neutral-800 border border-neutral-500/15 rounded-xl -rotate-${
              6 * 45
            } `}
          >
            <FaGitAlt className=" text-3xl text-orange-600" />
          </div>
        </li>
        <li
          className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
            7 * 45
          }`}
        >
          <div
            className={`relative -top-[1.6rem] flex justify-center items-center w-[3.2rem] h-[3.2rem] bg-neutral-800 border border-neutral-500/15 rounded-xl -rotate-${
              7 * 45
            } `}
          >
            <TbBrandNextjs className=" text-3xl text-white" />
          </div>
        </li>
      </ul>
    </div>
  );
}
