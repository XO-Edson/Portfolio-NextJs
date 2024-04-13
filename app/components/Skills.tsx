import Image from "next/image";
import { brainwaveSymbol } from "../assets";
import { collabApps } from "../constants";

function Skills() {
  return (
    <section className=" w-[90%] mx-auto">
      <div className="flex justify-center p-5">
        <div className=" relative text-6xl text-neutral-500/30">
          SKILLS
          <h1 className="absolute text-white text-2xl -bottom-2 left-[25%] font-bold">
            &mdash; SKILLS
          </h1>
        </div>
      </div>

      <div className="container">
        <h1>Skills</h1>
        <p>Here are some of my Skills</p>
      </div>

      <div className="container flex flex-col text-left items-center gap-y-8 md:gap-x-8 md:justify-between md:flex-row md:items-start lg:text-left lg:flex-row ">
        <div className=" w-full md:w-1/2">
          <h2>Skilloozz</h2>
          <p className=" mb-4 md:mb-16">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus,
            quo eveniet laborum vitae et quaerat! Aperiam animi, eius voluptatem
            corporis, beatae pariatur doloribus labore ipsum, officia corrupti
            culpa quia repellendus?
          </p>
        </div>

        <div className="relative flex w-[22rem] aspect-square border border-neutral-500 rounded-full scale:75 md:scale-100">
          <div className="flex w-60 aspect-square m-auto border border-neutral-500 rounded-full">
            <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-neutral-500 rounded-full">
              <div className="flex items-center justify-center w-full h-full bg-slate-700 rounded-full">
                <img
                  src={brainwaveSymbol}
                  width={48}
                  height={48}
                  alt="brainwave"
                />
              </div>
            </div>
          </div>
          <ul>
            {collabApps.map((app, index) => (
              <li
                key={app.id}
                className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                  index * 45
                }`}
              >
                <div
                  className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-neutral-500 border border-neutral-500/15 rounded-xl -rotate-${
                    index * 45
                  } `}
                >
                  <Image
                    src={app.icon}
                    width={app.width}
                    height={app.height}
                    alt=""
                    className=" m-auto"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
