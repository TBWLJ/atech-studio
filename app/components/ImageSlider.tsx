"use client"; // If using App Router

import Slider from "react-slick";

const images = [
  {
    src: "istockphoto-172625334-612x612.jpg",
    title: "Graphic Design"
  },
  {
    src: "pexels-shvetsa-3746149.jpg",
    title: "Photography"
  },
  {
    src: "pexels-shvetsa-3746149.jpg",
    title: "Branding"
  }
];

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className="relative w-full h-screen pt-16 bg-black">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx} className="relative">
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-screen object-cover"
            />
            <div className="absolute bottom-80 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent text-yellow-500 text-3xl md:text-5xl font-bold p-6 md:p-12 uppercase">
              {img.title}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
