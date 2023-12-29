"use client"

import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";


export default function Navbar() {
  
  
  
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
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);





  }, []);

  return (
    <>
    <nav className=" absolute px-12 w-full h-[15vh] flex justify-between items-center text-white text-lg font-regular ">
      <div>QuCIS</div> 
{isDesktop ? 
      <ul className="flex flex-col lg:flex-row  gap-12 items-center font-source lg:visible invisible">
        <li>
          <Link href="/about">About</Link>
        </li>
      
        <li>
          <Link href="/publications">Publications</Link>
        </li>
        <li>
          <Link href="/team">Team</Link>
        </li>
        <li>
          <Link href="/funding">Funding</Link>
        </li>
        <li className="contact_btn cursor-pointer transition-all">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      :
      <div className=" lg:invisible visible">
        <GiHamburgerMenu />
      </div>}
    </nav>
    
    </>
  );
}
