import React, { FC, useState, useEffect } from "react";
import Logo from "../../assets/logo.svg";
import AvailablePlot from "../../assets/AvailablePlot.png";
import AvailablePlot1 from "../../assets/AvailablePlot1.png";
import AvailablePlot2 from "../../assets/AvailablePlot2.png";
import AvailablePlot3 from "../../assets/AvailablePlot3.png";
import { FiPhone, FiMapPin, FiMap, FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

const PlotUpdate: FC = () => {
  const [liked, setLiked] = useState<boolean>(false);
  const [current, setCurrent] = useState(0);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Rotating related property images
  const images = [
    { src: AvailablePlot1, alt: "Available Plot 1" },
    { src: AvailablePlot2, alt: "Available Plot 2" },
    { src: AvailablePlot3, alt: "Available Plot 3" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000); // rotate every 2.5s
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex justify-center items-center p-6 border-b bg-orange-600">
        <h1 className="text-2xl md:text-2xl font-extrabold tracking-tight text-white font-times">
          Trending Prices & Prime Locations
        </h1>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row p-6 gap-8">
        {/* Left side */}
        <div className="flex flex-col items-center gap-6 md:w-1/2 w-full">
          <img
            src={AvailablePlot}
            alt="Available Plot"
            className="rounded-xl shadow-2xl w-full object-cover h-96"
          />

          {/* Like button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLiked(!liked)}
              className="text-2xl focus:outline-none"
            >
              {liked ? (
                <FaHeart className="text-red-500 transition-transform duration-300 transform scale-110" />
              ) : (
                <FiHeart className="text-gray-400 hover:text-red-500 transition-transform duration-300 transform hover:scale-110" />
              )}
            </button>
            <p className="text-orange-600 font-semibold text-md tracking-wide">
              Like New Property
            </p>
          </div>

          {/* Seller Info */}
          <div className="w-full bg-gray-50 border rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-5 border-b pb-2 text-gray-700">
              Seller's Information
            </h3>

            <div className="flex items-center gap-4 mb-4">
              <button className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <span className="text-gray-500 text-sm font-medium">Img</span>
              </button>
              <div className="space-y-2">
                <p className="font-bold text-lg text-gray-800">John Doe</p>
                <p className="flex items-center text-gray-600 text-sm gap-2">
                  <FiPhone className="text-orange-500" /> +977-9812345678
                </p>
                <p className="flex items-center text-gray-600 text-sm gap-2">
                  <FiMapPin className="text-orange-500" /> Kalanki, Kathmandu
                </p>
                <p className="flex items-center text-gray-600 text-xs gap-2">
                  <FiMap className="text-orange-500" /> Chabahil Hillside
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Chabahil Hillside
          </h2>
          <p className="mb-6 text-gray-700 leading-relaxed text-base">
            One of the rarest plots available in Nepal, offering prime location
            and unmatched quality. Perfect for investors or personal use. Ready
            for immediate sale.
          </p>

          {/* General Info */}
          <div className="mb-6">
            <h3 className="font-bold text-basemb-3 text-gray-700 border-b pb-2">
              General Information
            </h3>
            <div className="grid grid-cols-2 gap-3 text-gray-600 text-sm md:text-sm">
              <div className="font-semibold">Address ID:</div>
              <div>HB-CE160B</div>
              <div className="font-semibold">Location:</div>
              <div>Sundar Basti-Budhanilkantha-8</div>
              <div className="font-semibold">Property Type:</div>
              <div>Plain Land</div>
              <div className="font-semibold">Negotiable:</div>
              <div>Yes</div>
              <div className="font-semibold">Ads Posted:</div>
              <div>21 hours ago</div>
              <div className="font-semibold">Ads Expiry:</div>
              <div>2025-09-18</div>
            </div>
          </div>

          {/* Specifications */}
          <div>
            <h3 className="font-bold mb-3 text-gray-700 border-b pb-2">
              Specifications
            </h3>
            <div className="grid grid-cols-2 gap-3 text-gray-600 text-sm md:text-sm">
              <div className="font-semibold">Type:</div>
              <div>Land Plotted</div>
              <div className="font-semibold">Road Size:</div>
              <div>13ft</div>
              <div className="font-semibold">Road Type:</div>
              <div>Gravel</div>
              <div className="font-semibold">Land Size (Aana/Dhur):</div>
              <div>0-4-2-0</div>
            </div>
          </div>

          {/* Rotating Related Property Card */}
          <div className="mt-5 mb-10 mr-60 w-full ">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Related Property!!!
            </h3>

            <a
              href="/related-properties"  
              className="block relative w-full md:w-2/3 mx-auto rounded-lg overflow-hidden shadow-lg h-48 group"
            >
              {/* Rotating Image */}
              <img
                src={images[current].src}
                alt={images[current].alt}
                className="w-full h-48 object-cover transition-opacity duration-700 group-hover:scale-105"
              />

              {/* Overlay Text */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h2 className="text-white text-lg md:text-2xl font-bold text-center px-4">
                  Get exciting offers in these property
                </h2>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlotUpdate;
