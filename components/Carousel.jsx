"use client";

import React, { Component } from "react";
import ReactDOM from "react-dom";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
// requires a loader
import { Carousel } from "react-responsive-carousel";

const ImageCarousel = () => {
  const carouselItems = [
    {
      id: 1,
      image: "/imgs/1.jpg",
      title: "Engineer's Day",
      description: "An Engineer’s Day was celebrated on this this date. Loremasdf asffd  An Engineer’s Day was celebrated on this this date. An Engineer’s Day was celebrated on this this date. An Engineer’s Day was celebrated on this this date. An Engineer’s Day was celebrated on this this date.",
    },
    {
      id: 2,
      image: "/imgs/2.jpg",
      title: "Title 2",
      description: "Description 2",
    },
    {
      id: 3,
      image: "/imgs/3.jpg",
      title: "Title 3",
      description: "Description 3",
    }
  ];

  //   const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 1000000,
  //     slidesToShow: 1,
  //     slidesToScroll: 1
  //     }
  return (
    // <div className="w-full border border-black relative ">
      <Carousel autoPlay  infiniteLoop showArrows showThumbs={false} className="max-w-[340px] lg:max-w-[900px] " >
        {carouselItems.map((item) => (
          <div
            key={item.id}
            className="   px-12 py-[74px] gap-12 flex flex-col md:flex-row justify-between"
          >
            <div className="md:w-[50%] border">
              <img src={item.image} className="md:h-full rounded-[24px]" />
            </div>
            <div className="md:w-[55%] text-left  flex flex-col gap-[19px] ">
              <h1 className="text-[40px] font-bj font-extrabold italic text-[#9747FF]">
                {item.title}
              </h1>
              <p className=" tracking-regular paraFonts text-[20px] text-white  font-light">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    //  </div>
  );
}

export default ImageCarousel;
