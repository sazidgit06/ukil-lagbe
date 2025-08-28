import React, { useState, useEffect } from "react";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";


export default function Banner() {
  const Carousel = () => {
    const images = [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto change every 5 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => clearInterval(interval);
    }, [images.length]);

    return (
      <div className="w-full mx-auto">
        <img
          src={images[currentIndex]}
          alt="carousel"
          className="w-full h-[500px] object-cover shadow-lg transition-all duration-700"
        />
         <div className="absolute inset-0 flex flex-col justify-center items-start pl-30 text-white bg-black/40 h-[565px]">
          <h2 className="text-6xl font-bold mb-6">
            Welcome to UKIL LAGBE
          </h2>
          <p className="mb-6 text-2xl">This is a description over the image</p>
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg"
          >
            Get the app
          </a>
        </div>
      </div>
    );
  };

  // 🔹 Render Carousel here
  return (
    <div className="">
      <Carousel />
    </div>
  );

}
