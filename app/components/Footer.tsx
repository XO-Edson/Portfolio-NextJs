import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

function Footer() {
  return (
    <section className=" relative p-4 mt-10">
      <div className="absolute bottom-[10%] left-2 text-neutral-500">
        <p className="vertical-align">&mdash; DSN &mdash;</p>
      </div>

      <ul className="flex -mb-6 ml-8 gap-x-2 ">
        <li className=" cursor-pointer">
          <a
            href="https://www.linkedin.com/in/edson-ochieng-1027771a2/"
            target="_blank"
          >
            <FaLinkedin className=" text-2xl" />
          </a>
        </li>
        <li className=" cursor-pointer">
          <a href="https://github.com/XO-Edson" target="_blank">
            <FaGithub className=" text-2xl" />
          </a>
        </li>
        <li className="cursor-pointer">
          <a href="mailto:edsonmike053@gmail.com" target="_blank">
            <CiMail className="text-3xl" />
          </a>
        </li>
      </ul>

      <p className=" text-[0.5rem] text-right">
        &copy;Copyright. All Rights Reserved
      </p>
    </section>
  );
}

export default Footer;
