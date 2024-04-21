import React from 'react'
import Link from 'next/link'
const HeroAboutContainer = () => {
  return (
    <>
        <div className="w-full py-24 md:py-[200px]  grid place-items-center">
          <div className=" w-[80%] flex md:flex-row flex-col justify-around items-center gap-12">
            <div className='w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-[url(/imgs/7.png)] bg-cover   shadow-[15px_15px_0px_0px_rgba(0,0,20)]'></div>
            <div className="md:w-[50%] flex flex-col gap-6 ">
              <h1 className="font-bj font-bold text-[40px] md:text-[48px]  secondHeading text-[#2B1038]">
                Our Mission
              </h1>
              <p className="secondPara text-[#2B1038] md:text-[18px]  text-[15px]">
                Our mission involves pioneering quantum algorithms, pushing the
                limits of computational possibilities and striving for quantum
                advantage in problem-solving.Exploring quantum computing
                applications in diverse fields, from biology to finance, we aim
                to unleash the transformative potential of quantum technologies.
                Our mission involves pioneering quantum algorithms, pushing the
                limits of computational possibilities and striving for quantum
                advantage in problem-solving.Exploring quantum computing
                applications in diverse fields, from biology to finance, we aim
                to unleash the transformative potential of quantum technologies.
              </p>

                <Link
                  href="/about"
                  className="text-[18px]  drop-shadow-md tracking-[0.5px]"
                >
              <button className="border-2  shadow-lg   border-black px-4 py-2 font-semibold rounded-full justify-between font-source flex items-center  gap-4 hover:bg-black hover:text-white group transition-all">
                  Read More

                <svg
                  width="9"
                  height="14"
                  viewBox="0 0 9 14"
                  fill="none"
                  className=''
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L7 7L2 12"
                    stroke="#2B1038"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className='group-hover:stroke-purple-400 transition-all'
                  />
                </svg>
              </button>
                </Link>
            </div>
          </div>
        </div>

    </>
  )
}

export default HeroAboutContainer
