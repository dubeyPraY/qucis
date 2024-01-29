"use client"
// import { Gallery } from "react-grid-gallery";
import {Gallery, Item} from 'react-photoswipe-gallery'
import { useState } from "react"; 
import dynamic from 'next/dynamic'

const images = [
         {
            src: "/gallery/1.jpg",
            caption: "Engineer's Day in 2021",
         },
         {
            src: "/gallery/2.jpg",
            caption: "Engineer's Day in 2021",
         },
         {
            src: "/gallery/3.jpeg",
            caption: "First Team Lunch in January 2024",
         },
         {
            src: "/gallery/4.jpeg",
            caption: "Celebrations with team of Onam in 2022",
         },
         
      ];
   


import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const GalleryGrid = () => {

   const lightbox = new PhotoSwipeLightbox({
      gallery: '#my-gallery',
      children: 'a',
      pswpModule: () => import('photoswipe')
    });
    lightbox.init();
 


   
   return (
     <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[80%]  gap-2 mt-24'>
       <Gallery className=" " withCaption>
  {images.map((image, index) => {
   return(  
   <Item
   key={index}
    id={image}
    caption={image.caption}
      original={image.src}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} height={400} src={image.src}  className='object-cover aspect-[4/3] shadow-lg cursor-pointer'/>
      )}
    </Item>
)})}    
  </Gallery>
     </div>
   );
 };
 
 


export default GalleryGrid;