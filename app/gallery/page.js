import React from 'react'
// import GalleryGrid from '@/components/GalleryGrid'
import dynamic from 'next/dynamic'
import Background from '@/components/Background'
import Transition from '@/components/Transition'

const GalleryGr = dynamic(() => import('@/components/GalleryGrid'), { ssr: false })


const Gallery = () => {
  return (
    <div>
      <Background>
    <div className='min-h-screen w-full h-full py-24 text-white text-4xl '>
      <Transition>
        <div className='grid place-items-center justify-center'>
            <h1 className=' mt-24 teamHeading text-[48px] md:text-[64px] drop-shadow-lg'>
              Gallery.
              </h1>
      <GalleryGr />
              </div>
      </Transition>
    </div>
      </Background>
    </div>
  )
}

export default Gallery
