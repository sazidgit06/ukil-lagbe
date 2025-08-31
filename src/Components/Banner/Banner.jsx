import img1 from "../../assets/slide1.jpg"
import img2 from "../../assets/slide2.jpg"
import img3 from "../../assets/logo-slider.png"

import React, { useEffect, useState } from "react";

const Banner = () => {
  const images = [img1, img2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full rounded-2xl shadow-lg">
      <img
        src={images[currentIndex]}
        alt="slider"
        className="w-full h-full object-cover"
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold text-center">
        <div className="space-y-1 lg:space-y-5 flex flex-col justify-center items-center">
          <p className="text-sm lg:text-lg">We are Unique Law Firm</p>
          <h2 className="text-orange-300 text-3xl lg:text-6xl">Realiable Legal Solution</h2>
          <p className="text-sm lg:text-lg">I'm a lawyer. I go for due process; - these values mean a lot to me.</p>
          <img className="hidden lg:block" src={img3} alt="" />
          <button className="btn btn-primary hidden lg:block">Get the app</button>
        </div>
      </div>


    </div>
  );
}

export default Banner
