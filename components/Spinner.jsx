"use client"
import React from 'react'
import { BarLoader } from 'react-spinners'
import '@/styles/preloader.scss'


const Spinner = () => {
  return (
    <div>
      {/* <BarLoader color='#9747FF' /> */}
      <div className="preloader">
        <div className="texts-container">
                <span>QuCIS</span>
                <span>QuCIS</span>
                <span>QuCIS</span>

        </div>
      </div>
    </div>
  )
}

export default Spinner
