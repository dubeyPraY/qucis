"use client"
import React from 'react'
import { BarLoader } from 'react-spinners'
import '@/styles/preloader.scss'


const Spinner = () => {
  return (
    <div className='bg-[url(/figmaStuffs/mainBg.png)] bg-cover w-full h-[100vh] grid place-items-center justify-center'>
      <BarLoader color='#ffffff' />
      {/* <div className="preloader">
        <div className="texts-container">
                <span>QuCIS</span>
                <span>QuCIS</span>
                <span>QuCIS</span>

        </div>
      </div> */}
    </div>
  )
}

export default Spinner
