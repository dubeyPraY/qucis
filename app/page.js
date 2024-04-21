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
import HeroTeamContainer from "@/components/HeroTeamContainer";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }
    , 5000);

    return () => clearTimeout(timer);
  })
  const ref = useRef(null);
  return (
  


      <>
      {/* {loading ? <Preloader /> :  */}
      <main>
        <HeroContainer />

        {/* SECOND SECTION  */}
        <HeroAboutContainer />
        <HeroTeamContainer />

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
        </main>
        {/* } */}
      </>

  );
}
