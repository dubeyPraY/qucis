"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const path = usePathname();
  console.log(path == "/team");

  // CONDITIONALLY RENDERING HAMBURGER AND NAVBAR THROUGH WINDOW SCREEN SIZE
  const [isDesktop, setDesktop] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 1024) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 1024) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <>
      <nav className=" absolute px-12 w-full h-[15vh] flex justify-between items-center  text-lg font-regular ">
        <div className="text-white">
        <Link href='/'>QuCIS
        </Link>
        </div>
        {isDesktop ? (
          <ul className="flex flex-col lg:flex-row  gap-12 items-center font-source lg:visible invisible">
            <li
              className={` ${
                path === "/about" ? "text-[#DE97FF]" : "text-white"
              }`}
            >
              <Link href="/about">About</Link>
            </li>

            <li
              className={` ${
                path === "/publications" ? "text-[#DE97FF]" : "text-white"
              }`}
            >
              <Link href="/publications">Publications</Link>
            </li>
            <li
              className={` ${
                path === "/team" ? "text-[#DE97FF]" : "text-white"
              }`}
            >
              <Link href="/team">Team</Link>
            </li>
            <li
              className={` ${
                path === "/funding" ? "text-[#DE97FF]" : "text-white"
              }`}
            >
              <Link href="/funding">Funding</Link>
            </li>
            <li className={`contact_btn cursor-pointer transition-all ${
                path === "/contact" ? "text-[#DE97FF]" : "text-white"
              }`}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        ) : (
          <div className=" lg:invisible visible">
            <GiHamburgerMenu />
          </div>
        )}
      </nav>
    </>
  );
}
