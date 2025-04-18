import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const navbar = document.querySelector("nav");
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  });

  return (
    <div>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] "></div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:pg-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
        } `}
      >
        <a href="#top">
          <Image
            src={assets.logo}
            alt=""
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3  ${
            isScroll ? "" : "bg-white shadow-sm bg-opacity-50"
          } `}
        >
          <li>
            <a
              style={{ fontFamily: "var(--font-ovo)" }}
              onClick={closeMenu}
              href="#top"
              className="hover:text-purple-900"
            >
              Home
            </a>
          </li>
          <li>
            <a
              style={{ fontFamily: "var(--font-ovo)" }}
              onClick={closeMenu}
              href="#about"
              className="hover:text-purple-900"
            >
              About me
            </a>
          </li>
          <li>
            <a
              style={{ fontFamily: "var(--font-ovo)" }}
              onClick={closeMenu}
              href="#academics"
              className="hover:text-purple-900"
            >
              Academics
            </a>
          </li>
          <li>
            <a
              style={{ fontFamily: "var(--font-ovo)" }}
              onClick={closeMenu}
              href="#experience"
              className="hover:text-purple-900"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              style={{ fontFamily: "var(--font-ovo)" }}
              onClick={closeMenu}
              href="#skills"
              className="hover:text-purple-900"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              style={{ fontFamily: "var(--font-ovo)" }}
              onClick={closeMenu}
              href="#project"
              className="hover:text-purple-900"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              style={{ fontFamily: "var(--font-ovo)" }}
              onClick={closeMenu}
              href="#contact"
              className="hover:text-purple-900"
            >
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            style={{ fontFamily: "var(--font-ovo)" }}
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 bg-purple-900 text-white hover:bg-black"
          >
            Contact{" "}
            <Image src={assets.arrow_icon_dark} alt="" className="w-3" />
          </a>

          <button className="block md:hidden" onClick={openMenu}>
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* -------------mobile menu------------------ */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-purple-900 transition duration-500"
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <a
              style={{ fontFamily: "var(--font-ovo)" }}
              onClick={closeMenu}
              href="#top"
            >
              Home
            </a>
          </li>
          <li>
            <a
              style={{ fontFamily: "var(--font-ovo)" }}
              onClick={closeMenu}
              href="#about"
            >
              About me
            </a>
          </li>
          <li>
            <a
              style={{ fontFamily: "var(--font-ovo)" }}
              onClick={closeMenu}
              href="#academics"
            >
              Academics
            </a>
          </li>
          <li>
            <a
              style={{ fontFamily: "var(--font-ovo)" }}
              onClick={closeMenu}
              href="#experience"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              style={{ fontFamily: "var(--font-ovo)" }}
              onClick={closeMenu}
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              style={{ fontFamily: "var(--font-ovo)" }}
              onClick={closeMenu}
              href="#project"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              style={{ fontFamily: "var(--font-ovo)" }}
              onClick={closeMenu}
              href="#contact"
            >
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
