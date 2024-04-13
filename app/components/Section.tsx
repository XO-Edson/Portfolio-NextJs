import { ReactNode } from "react";
import SectionSvg from "../assets/svg/SectionSvg";

type SectionProps = {
  className: string;
  id?: string;
  crosses?: string;
  crossesOffset?: string;
  customPadding?: string;
  children: ReactNode;
};

function Section({
  className,
  id,
  crosses,
  crossesOffset,
  customPadding,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-10 md:py-16 ${
        crosses ? "md:py-32 lg: py-40" : ""
      } ${className || ""} `}
    >
      {children}
      <div className=" hidden absolute top-0 left-5 w-0.25 h-full bg-[#26242C] pointer-events-none md:left-[5.5]"></div>
      <div className=" hidden absolute top-0 right-5 w-0.25 h-full bg-[#26242C] pointer-events-none md:right-[5.5]"></div>

      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 h-0.5 bg-[#26242C] ${
              crossesOffset && customPadding
            } pointer-events-none md:block lg:left-10 `}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </section>
  );
}

export default Section;
