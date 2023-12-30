"use client"


import ImageCarousel from '@/components/Carousel'
import Link from 'next/link'
import SplineModel from '@/components/splineModel'
import { useEffect, useState } from 'react'
import Spinner from '@/components/Spinner'
import { preLoaderAnim } from '@/animations'
import SubstackFeed from '@/components/Substack'

export default function Home() {
const [loading, setLoading] = useState(true)


// useEffect(() => {
//   preLoaderAnim()
  
// }, [])



 return (
    <main className="">


{/* <Spinner /> */}
 
        <>
    <div className='w-full h-[100vh]  bg-[url(/figmaStuffs/mainBg.png)] bg-cover grid place-items-center '>
      <div className=' w-[80%] h-[60%] flex md:flex-row flex-col justify-between items-center'>
        <div className='  md:w-[45%]'>
          <h1 className='mainHeading text-[72px] lg:text-[128px] font-bj'>QuCIS<span>.</span></h1>
          <p className='font-source font-extralight mt-[20px] text-white/70 tracking-[0.48px] leading-[33px] text-[20px] drop-shadow-md'>
            Quantum Computing and Information Systems,  A Research Group focused on Quantum information theory and coding, Quantum algorithms.
            </p>
          <button className='flex gap-4 justify-between items-center mt-[60px] px-[30px] py-[16px] text-[20px] font-semibold bg-white rounded-full font-source main_btn'>
            <a>KNOW US</a>
            <svg width="9" height="14" viewBox="0 0 9 14" fill="none">
              <path d="M2 2L7 7L2 12" stroke="url(#paint0_linear_66_43)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="paint0_linear_66_43" x1="4.5" y1="2" x2="4.5" y2="12" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#5C2178"/>
                  <stop offset="1" stopColor="#DF38D8" stopOpacity="0.75"/>
                </linearGradient>
              </defs>
            </svg>
          </button>
        </div>
        <div className='threedmodel'>
        {/* <script src="https://substackapi.com/embeds/feed.js" async></script> */}
        {/* <SubstackFeed /> */}



          {/* <SplineModel /> */}
        </div>



        
      </div>

    </div>

      <div className="w-full py-24 md:p-0 md:h-[100vh]  bg-[url('/figmaStuffs/secondBg.png')] bg-cover grid place-items-center">
        
        <div className='w-[80%] md:h-[60%]   flex md:flex-row flex-col justify-between  gap-12'>
          <img src='/figmaStuffs/imgComponent.png' alt='' />
          <div className='md:w-[50%] flex flex-col gap-6 '>
            <h1 className='font-bj font-extrabold text-[40px] md:text-[48px] italic secondHeading text-[#2B1038]'>
              Our Mission
            </h1>
            <p className='secondPara text-[#2B1038] md:text-[24px] text-[20px]'>
              The NQCC is a national centre that focuses on translating UK research into innovation. We are addressing the key engineering challenges involved with scaling quantum computers, and we are engaging with industry, government and the research community to support the growth of the UK’s quantum computing ecosystem.
            </p>

            <button className='border-2 mt-12 shadow-lg  md:w-[188px] border-black px-[30px] py-[16px] font-semibold rounded-full font-source flex items-center gap-[15px] justify-center md:justify-between'>

                <Link href="/about" className='text-[18px] drop-shadow-md tracking-[0.5px]'>
                Read More
                </Link>

              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L7 7L2 12" stroke="#2B1038" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

            </button>
          </div>
        </div>
      </div>


      <div className="w-full py-24 md:p-0 md:h-[100vh]  bg-[url('/figmaStuffs/thirdBg.png')] bg-cover grid place-items-center">

        <div className='w-[80%] md:h-[60%]  flex md:flex-row  flex-col-reverse justify-between  gap-12 '>
          <div className='md:w-[45%] flex flex-col gap-6  '>
            <h1 className='text-white font-bj font-extrabold text-[40px] md:text-[48px] italic secondHeading'>
              Our Team
            </h1>
            <p className='secondPara text-[20px] md:text-[24px] text-white font-source font-light'>
            This Lab is head by <b>Dr. Ankur Raina</b>, who works as an Assistant Professor in <b>the Department of EECS, IISER Bhopal</b>. He worked as a researcher/scientist at <b>the Department of Electrical and Computer Engineering, University of Arizona</b> with <b>Prof. Bane Vasic</b>. 
            </p>
            <Link href='/team'>

            <button className='text-white mt-12 shadow-lg w-full md:w-[180px] bg-[#9717E5] rounded-[50px] px-[30px] py-[16px] font-semibold gap-[15px]  font-source flex items-center justify-center md:justify-around hover:bg-[#9717E5]/80 transition-all'>
              <h1  className='text-[18px] drop-shadow-md tracking-[0.5px]' >
                Know Us
              </h1>
              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L7 7L2 12" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

            </button>
            </Link>

          </div>
          <img src='/figmaStuffs/imgComponent2.png' alt='' />

        </div>
        </div>
{/* FOURTH SECTION */}
{/* CAROUSEL SECTION */}
        <div className="  bg-[url('/figmaStuffs/secondBg.png')] bg-cover grid place-items-center py-24">
          <div className='  grid place-items-center justify-center text-center  gap-12 mt-12'>
            <h1 className='font-bj text-[48px] md:text-[72px] font-semibold  '>OUR RECENT EVENTS</h1>
              <div className=' w-full border flex items-center justify-center  relative  '>
                <ImageCarousel />
              </div>


          </div>
        </div>
        </>

    </main>
  )
}


