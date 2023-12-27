"use client";

import React, { Component } from "react";
import ReactDOM from "react-dom";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ImageCarousel = () => {
  const carouselItems = [
    {
      id: 1,
    //   image: "/imgs/1.jpg",
      title: "Engineer's Day",
      description: "An Engineer’s Day was celebrated on this this date. Loremasdf asffd  An Engineer’s Day was celebrated on this this date. An Engineer’s Day was celebrated on this this date. An Engineer’s Day was celebrated on this this date. An Engineer’s Day was celebrated on this this date.",
    },
    {
      id: 2,
    //   image: "/imgs/2.jpg",
      title: "Title 2",
      description: "Description 2",
    },
    {
      id: 3,
    //   image: "/imgs/3.jpg",
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
    // <div className="w-full ">
      <Carousel autoPlay infiniteLoop className="w-[80%] h-[60vh]" showArrows showThumbs>
        {carouselItems.map((item) => (
          <div
            key={item.id}
            className="w-full h-[50vh] p-12 flex justify-between"
          >
            {/* <div className="w-[50%] border border-black">
              <img src="/imgs/1.jpg" />
            </div>
            <div className="w-[55%] text-left  flex flex-col gap-[19px] ">
              <h1 className="text-[40px] font-bj font-extrabold italic text-[#9747FF]">
                {item.title}
              </h1>
              <p className=" tracking-regular paraFonts text-[20px] text-white font-source font-light">
                {item.description}
              </p>
            </div> */}
          </div>
        ))}
      </Carousel>
    // </div>
  );
}

export default ImageCarousel;
