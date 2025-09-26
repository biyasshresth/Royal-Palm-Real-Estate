import React, { useState, useEffect } from "react"; // Added useEffect
import LandMark from "../assets/LandMark.png";
import { Link } from "react-router-dom";

const BuyPropertyOption: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string>("LandMark.png");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-400 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-6xl">
        {/* Left Side Content */}
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-white text-3xl font-extrabold">
            PROPERTY FOR SALE
          </h1>
          <p className="text-white text-lg">
            "Choose the Right Space for Your Future"
          </p>
          <p className="text-gray-200 text-sm leading-relaxed">
            Whether you’re dreaming of building on open land or moving into a
            ready-made home, we make it easy to find the property that fits your
            lifestyle and goals. Explore flexible options, compare choices, and
            take the first step toward owning the perfect place you’ve always
            imagined.
          </p>

          {/* Options to select image */}
          <div className="flex gap-3 justify-center md:justify-start">
            <Link
              to="/BuyLand"
              className={`px-4 py-2 rounded-lg font-medium ${
                selectedImage === "LandMark.png"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setSelectedImage(LandMark)}
            >
              Lands And Plotings
            </Link>
            <Link
              to="/Contact"
              className={`px-4 py-2 rounded-lg font-medium ${
                selectedImage === "Default.png"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setSelectedImage("Default.png")}
            >
              House and Appartment
            </Link>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={LandMark}
            alt="LandMark Preview"
            className="max-w-full h-auto shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default BuyPropertyOption;
