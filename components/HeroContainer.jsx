import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Transition from "./Transition";
import Link from "next/link";
const HeroContainer = () => {
  return (
    <div className="relative border border-black w-full min-h-screen">
      <BackgroundGradientAnimation>
        <div className="absolute z-50 min-h-screen inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <Transition>
          <div className=" mx-auto  md:w-[45%]  z-50">

            <h1 className="mainHeading text-[72px] lg:text-[128px] font-bj z-50">
              QuCIS<span>.</span>
            </h1>
            <p className="font-source font-extralight md:mt-[20px] text-white/70 tracking-[0.48px] md:leading-[33px] px-12 text-sm md:text-[20px] drop-shadow-md">
              Quantum Computing and Information Systems, A Research Group
              focused on Quantum information theory and coding, Quantum
              algorithms.
            </p>
            <Link href="/about">
              <button className="flex mx-auto gap-4 justify-between items-center mt-[30px] md:mt-[60px] px-[25px] md:px-[30px] py-[16px] text-[15px] md:text-[20px] font-semibold bg-white rounded-full font-source main_btn hover:brightness-90 transition-all">
                <h1 className="text-black">KNOW US</h1>
                <svg width="9" height="14" viewBox="0 0 9 14" fill="none">
                  <path
                    d="M2 2L7 7L2 12"
                    stroke="url(#paint0_linear_66_43)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_66_43"
                      x1="4.5"
                      y1="2"
                      x2="4.5"
                      y2="12"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#5C2178" />
                      <stop offset="1" stopColor="#DF38D8" stopOpacity="0.75" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>
            </Link>
          </div>
          </Transition>
        </div>

        {/* </div> */}
      </BackgroundGradientAnimation>
    </div>
  );
};

export default HeroContainer;
