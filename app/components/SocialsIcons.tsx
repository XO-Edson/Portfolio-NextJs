import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

export default function SocialsIcons() {
  return (
    <ul className="flex absolute left-[5rem] md:left-0 -bottom-5 md:bottom-[4rem] py-2 px-4 space-x-2 backdrop-blur border rounded-2xl xl:flex bg-[#474060]/40 border-[#FFFFFF]/10">
      <li className=" cursor-pointer">
        <a
          href="https://www.linkedin.com/in/edson-ochieng-1027771a2/"
          target="_blank"
        >
          <FaLinkedin className=" text-3xl text-blue-600" />
        </a>
      </li>
      <li className=" cursor-pointer">
        <a href="https://github.com/XO-Edson" target="_blank">
          <FaGithub className=" text-3xl" />
        </a>
      </li>
      <li className="cursor-pointer">
        <a href="mailto:edsonmike053@gmail.com" target="_blank">
          <CiMail className=" text-3xl" />
        </a>
      </li>
    </ul>
  );
}
