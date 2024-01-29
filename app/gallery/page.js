import React from 'react'
// import GalleryGrid from '@/components/GalleryGrid'
import dynamic from 'next/dynamic'

const GalleryGr = dynamic(() => import('@/components/GalleryGrid'), { ssr: false })


const Gallery = () => {
  return (
    <div>
    <div className='min-h-screen w-full h-full py-24  bg-[url(/figmaStuffs/mainBg.png)] bg-cover flex gap-2 flex-col items-center text-white text-4xl '>
    <h1 className=' mt-24 teamHeading text-[48px] md:text-[64px] drop-shadow-lg'>
              Gallery
              </h1>
      <GalleryGr />
    </div>
    </div>
  )
}

export default Gallery
