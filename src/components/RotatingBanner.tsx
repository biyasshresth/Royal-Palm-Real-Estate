import React, { useState, useEffect } from "react";
import modernHome from "../assets/modernHome.jpg";
import Picture1 from "../assets/Picture1.png";
import Picture2 from "../assets/Picture2.png";
import waterfrontVilla from "../assets/WaterFront.jpg";
import Picture4 from "../assets/Picture4.png";
import Picture3 from "../assets/Picture3.png";
import Picture5 from "../assets/Picture5.png";

const RotatingBanner = () => {
  const bannerImages = [
    modernHome,
    Picture1,
    Picture2,
    waterfrontVilla,
    Picture4,
    Picture3,
    Picture5,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [bannerImages.length]);

  return (
    <div className="w-full h-[350px] relative overflow-hidden">
      {bannerImages.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Banner ${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default RotatingBanner;
