"use client";

import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleHamburger = () => {
    if (openMenu) {
      setOpenMenu(false);
      enablePageScroll();
    } else {
      setOpenMenu(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    setOpenMenu(false);
    if (!openMenu) return;

    enablePageScroll();
    setOpenMenu(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-[#252134] lg:border-[#252134]/90 p-2 md:p-2 ${
        openMenu ? "bg-[#0E0C15]" : "bg-[#0E0C15]/90 backdrop-blur-sm"
      }`}
    >
      <div className=" flex items-center justify-between px-5 lg:px-8 h-10">
        <a href="#Home">
          <h1 className="font-bold tracking-widest">DSN</h1>
        </a>
        <nav
          className={`${
            openMenu ? "flex w-full h-full" : "hidden"
          } fixed top-[3.75rem] right-0 bg-[#0E0C15] md:bg-transparent md:static md:flex lg:mr-40`}
        >
          <div className="relative flex flex-col items-center justify-center m-auto md:flex-row space-y-8 font-thin  md:space-y-0">
            {navigation.map((navElements) => (
              <a
                key={navElements.id}
                onClick={handleClick}
                href={navElements.url}
                className={` block relative text-2xl uppercase transition-colors text-[#FFFFFF] hover:text-[#AC6AFF] px-4 md:py-4 md:text-xs md:font-semibold `}
              >
                {navElements.title}
              </a>
            ))}
          </div>
          {openMenu && <HamburgerMenu />}
        </nav>

        <button className="block md:hidden" onClick={toggleHamburger}>
          <MenuSvg openMenu={openMenu} />
        </button>
      </div>
    </div>
  );
}

export default Header;
