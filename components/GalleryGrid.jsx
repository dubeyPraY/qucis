"use client"
// import { Gallery } from "react-grid-gallery";
import {Gallery, Item} from 'react-photoswipe-gallery'
import { useState } from "react"; 
import dynamic from 'next/dynamic'

const images = [
         {
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            
            isSelected: true,
            caption: "After Rain (Jeshu John - designerspics.com)",
         },
         {
            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
            
            tags: [
               { value: "Ocean", title: "Ocean" },
               { value: "People", title: "People" },
            ],
            alt: "Boats (Jeshu John - designerspics.com)",
         },
         {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            
         },
      ];
   

// const GalleryGrid = () => {


//    const images = [
//       {
//          src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
         
//          isSelected: true,
//          caption: "After Rain (Jeshu John - designerspics.com)",
//       },
//       {
//          src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
         
//          tags: [
//             { value: "Ocean", title: "Ocean" },
//             { value: "People", title: "People" },
//          ],
//          alt: "Boats (Jeshu John - designerspics.com)",
//       },
//       {
//          src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
         
//       },
//    ];


//    return(
//       <div className="border w-[80%] h-[80%] flex items-center justify-center ">
//          <Gallery images={images} />
//    </div>
//    )
// }

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const GalleryGrid = () => {
   // const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
   // const [selectedImage, setSelectedImage] = useState(0);
 
   // const openLightbox = (index) => {
   //   setSelectedImage(index);
   //   setLightboxIsOpen(true);
   // };
 
   // const closeLightbox = () => {
   //   setLightboxIsOpen(false);
   // };
   const lightbox = new PhotoSwipeLightbox({
      gallery: '#my-gallery',
      children: 'a',
      pswpModule: () => import('photoswipe')
    });
    lightbox.init();
 


   
   return (
     <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[80%]  gap-2 mt-24'>
       <Gallery className=" ">
  {[0,1,2,3,4,5,6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((option, index) => {
   return(  
   <Item
   key={index}
    id={option}
      original={`https://placekitten.com/1024/768?image=${option}`}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} height={400} src={`https://placekitten.com/1024/768?image=${option}`}  className='shadow-lg'/>
      )}
    </Item>
)})}    
  </Gallery>
     </div>
   );
 };
 
 


export default GalleryGrid;