import Link from 'next/link'
import React from 'react'

const HeroTeamContainer = () => {
  return (
    <div className="w-full py-24 md:p-0 md:py-[200px] border bg-gradient-to-r from-[#3F2B49] to-[#9533C4] bg-cover grid place-items-center">
    <div className="w-[80%]  flex md:flex-row  flex-col-reverse justify-around  gap-12 items-center ">
      <div className="md:w-[45%] flex flex-col  gap-6   ">
        <h1 className="text-white font-bj font-bold text-[40px] md:text-[48px]  secondHeading">
          Our Team
        </h1>
        <p className="secondPara text-[20px] md:text-[18px] text-white font-source font-light">
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
          <button className="text-white mt-12 shadow-lg max-w-[150px] bg-[#9717E5] rounded-full px-4 py-2  gap-4  font-source flex items-center justify-center md:justify-around hover:bg-[#9717E5]/80 hover:shadow-xl transition-all">
              Know Us
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
      <div className='lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] bg-[url(/members/AnkurRaina.jpeg)] bg-cover   shadow-[15px_15px_0px_0px_rgba(209,0,209)]'></div>

    </div>
  </div>
  )
}

export default HeroTeamContainer
