import ImageCarousel from "@/components/Carousel";
export default function LandingCarousel() {
  return (
    <div className="   grid place-items-center ">
    <div className="  grid place-items-center justify-center text-center  gap-12 ">
      <h1 className="font-unbounded text-[48px] md:text-6xl font-semibold text-black/80  ">
        OUR RECENT EVENTS
      </h1>
      {/* <div className="w-full    relative"> */}
        <ImageCarousel />
      {/* </div> */}
    </div>
  </div>
  )}