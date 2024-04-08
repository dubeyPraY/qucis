"use client";

import ImageCarousel from "@/components/Carousel";
import Link from "next/link";
import SplineModel from "@/components/splineModel";
import { useEffect, useRef, useState } from "react";
import Preloader from "@/components/Preloader";
import { preLoaderAnim } from "@/animations";
import SubstackFeed from "@/components/Substack";
import { useRouter } from "next/navigation";
import HeroContainer from "@/components/HeroContainer";
import HeroAboutContainer from "@/components/HeroAboutContainer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const ref = useRef(null);
  return (
    <main className="">


      <>
        <HeroContainer />

        {/* SECOND SECTION  */}
        <HeroAboutContainer />
        <div className="w-full py-24 md:p-0 md:py-[200px] border bg-gradient-to-r from-[#3F2B49] to-[#9533C4] bg-cover grid place-items-center">
          <div className="w-[80%]  flex md:flex-row  flex-col-reverse justify-around  gap-12 items-center ">
            <div className="md:w-[45%] flex flex-col gap-6   ">
              <h1 className="text-white font-bj font-extrabold text-[40px] md:text-[48px] italic secondHeading">
                Our Team
              </h1>
              <p className="secondPara text-[20px] md:text-[24px] text-white font-source font-light">
                This Lab is head by <b>Dr. Ankur Raina</b>, who works as an
                Assistant Professor in{" "}
                <b>the Department of EECS, IISER Bhopal</b>. He worked as a
                researcher/scientist at{" "}
                <b>
                  the Department of Electrical and Computer Engineering,
                  University of Arizona
                </b>{" "}
                with <b>Prof. Bane Vasic</b>.
              </p>
              <Link href="/team">
                <button className="text-white mt-12 shadow-lg w-full md:w-[180px] bg-[#9717E5] rounded-[50px] px-[30px] py-[16px] font-semibold gap-[15px]  font-source flex items-center justify-center md:justify-around hover:bg-[#9717E5]/80 transition-all">
                  <h1 className="text-[18px] drop-shadow-md tracking-[0.5px]">
                    Know Us
                  </h1>
                  <svg
                    width="9"
                    height="14"
                    viewBox="0 0 9 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 2L7 7L2 12"
                      stroke="#FFFFFF"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </Link>
            </div>
            <img
              src="/figmaStuffs/imgComponent2.png"
              alt=""
              className="aspect-square md:h-[400px]"
            />
          </div>
        </div>

        <div className="w-full px-4 py-24 flex flex-col items-center justify-center gap-12">
          <div>
            <h1 className="font-bold text-3xl md:text-5xl text-center">
              Latest News.
            </h1>
            <h3 className="italic mt-4">
              Check out some recent news about quantum computing...
            </h3>
          </div>

          <script src="https://substackapi.com/embeds/feed.js" async></script>
        <SubstackFeed />
        </div>

        {/* FOURTH SECTION */}
        {/* CAROUSEL SECTION */}
        <div className="  carousel_bg bg-cover grid place-items-center py-24">
          <div className="  grid place-items-center justify-center text-center  gap-12 mt-12">
            <h1 className="font-bj text-[48px] md:text-[72px] font-semibold text-purple-600   drop-shadow-lg  ">
              OUR RECENT EVENTS
            </h1>
            <div className="w-full background-opacity-50 backdrop-blur-[10px] bg-white/60  rounded-[24px] shadow-lg flex items-center justify-center relative">
              <ImageCarousel />
            </div>
          </div>
        </div>
      </>
    </main>
  );
}
