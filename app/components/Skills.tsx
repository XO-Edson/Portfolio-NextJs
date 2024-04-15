import { skills } from "../constants";
import SkillsLayoutIcons from "./SkillsLayoutIcons";

function Skills() {
  return (
    <section className=" w-[90%] mx-auto" id="Skills">
      <div className="flex justify-center p-5">
        <div className=" relative text-6xl text-neutral-500/30">
          SKILLS
          <h1 className="absolute text-white text-2xl -bottom-2 left-[25%] font-bold">
            &mdash; SKILLS
          </h1>
        </div>
      </div>

      <div className="container flex flex-col text-left items-center gap-y-8 md:gap-x-8 md:justify-between md:flex-row md:items-start lg:text-left lg:flex-row ">
        <div className=" w-full md:w-1/2">
          <p className=" mb-4 md:mb-10">
            Languages and Technologies I work with.
          </p>
          <div>
            <ul className="space-y-2 flex flex-wrap h-full space-x-2">
              {skills.map((skill) => (
                <li
                  className="px-4 py-2 bg-neutral-600 w-fit rounded-md"
                  key={skill.id}
                >
                  {skill.skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <SkillsLayoutIcons />
      </div>
      <hr className="mt-14 border border-neutral-500" />
    </section>
  );
}

export default Skills;
