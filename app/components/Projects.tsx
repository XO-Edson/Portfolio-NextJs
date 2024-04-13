export default function Projects() {
  return (
    <section>
      <div className="flex justify-center p-5">
        <div className=" relative text-6xl text-neutral-500/30">
          SAMPLE PROJECTS
          <h1 className="absolute text-white text-2xl -bottom-2 left-[25%] font-bold">
            &mdash; SAMPLE PROJECTS
          </h1>
        </div>
      </div>
      <div className=" flex flex-col justify-center md:flex-row gap-y-4 md:gap-x-4 w-[90%] mx-auto">
        <div className="w-full">
          <div className="bg-blue-400 w-full md:max-w-[400px] md:w-full h-56"></div>
          <p>Project 1</p>
        </div>
        <div className="w-full">
          <div className="bg-blue-400 w-full md:max-w-[400px] md:w-full h-56"></div>
          <p>Project 2</p>
        </div>
        <div className="w-full">
          <div className="bg-blue-400 w-full md:max-w-[400px] md:w-full h-56"></div>
          <p>Project 3</p>
        </div>
        <div className="w-full">
          <div className="bg-blue-400 w-full md:max-w-[400px] md:w-full h-56"></div>
          <p>Project 4</p>
        </div>
      </div>
    </section>
  );
}
