import React, { FC, useState, useEffect } from "react";
import cozy from "../../assets/cozy.png";
import FarmHouse from "../../assets/FarmHouse.png";
import Picture1 from "../../assets/Picture1.png";
import Apartment from "../../assets/Apartment.png";
import {
  FiHeart,
  FiPhone,
  FiMapPin,
  FiMap,
  FiHome,
  FiLayers,
  FiGrid,
} from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";

const HouseUpdate: FC = () => {
  const [liked, setLiked] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- Rotating Related Property ---
  const images = [
    { src: FarmHouse, alt: "Farm House" },
    { src: Picture1, alt: "Family House" },
    { src: Apartment, alt: "Apartment" },
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000); // rotate every 3s
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-full bg-white">
      {/* Header */}
      <div className="flex justify-center items-center p-6 border-b bg-orange-600 mb-4 w-full">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white font-times">
          Trending Price and Location
        </h1>
      </div>

      {/* Main layout: 2 columns */}
      <div className="flex flex-col md:flex-row gap-6 px-4 md:px-6 lg:px-12">
        {/* Left Column */}
        <div className="md:w-1/2 w-full flex flex-col items-center gap-4">
          {/* Plot image */}
          <img
            src={cozy}
            alt="cozy home Plot"
            className="rounded-lg shadow-2xl w-full object-cover h-96"
          />

          {/* Like button */}
          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={() => setLiked(!liked)}
              className={`transform transition-transform duration-200 ${
                liked ? "scale-110" : "scale-100"
              }`}
            >
              {liked ? (
                <AiFillHeart className="w-6 h-6 text-red-500" />
              ) : (
                <FiHeart className="w-6 h-6 text-gray-500 hover:text-red-500" />
              )}
            </button>
            <p className="text-orange-600 font-semibold text-lg uppercase tracking-wide">
              Like New
            </p>
          </div>

          {/* Seller Details */}
          <div className="w-full bg-gray-50 border rounded-xl shadow p-4 mt-2">
            <h3 className="text-lg font-semibold mb-4 underline">
              Seller's Details
            </h3>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden shrink-0">
                <span className="text-gray-500 text-sm">Img</span>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-lg">John Doe</p>
                <p className="flex items-center text-gray-500 text-sm gap-2">
                  <FiPhone className="text-gray-600" /> +977-9812345678
                </p>
                <p className="flex items-center text-gray-500 text-sm gap-2">
                  <FiMapPin className="text-gray-600" /> Kalanki, Kathmandu
                </p>
                <p className="flex items-center text-gray-500 text-sm gap-2">
                  <FiMap className="text-gray-600" /> Chabahil Hillside
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 w-full flex flex-col gap-6">
          {/* Description Section */}
          <div className="p-4 bg-orange-50 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-3 text-gray-800">
              Chabahil Hillside
            </h2>
            <p className="text-gray-700 mb-4 text-base leading-relaxed">
              Discover a rare gem in Nepal! This plot is a unique opportunity,
              fully developed, and maintained in pristine condition. Ideal for
              investment or building your dream home.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 mt-2">
              <li className="flex items-center gap-2">
                <FiHome className="text-orange-600" /> Cozy House Type
              </li>
              <li className="flex items-center gap-2">
                <FiLayers className="text-orange-600" /> 2 Floors Built
              </li>
              <li className="flex items-center gap-2">
                <FiGrid className="text-orange-600" /> Land Size: 0-4-2-0
                Aana/Dhur
              </li>
              <li className="flex items-center gap-2">
                <FiMap className="text-orange-600" /> Road Access: 13-20 Ft
                Gravel
              </li>
              <li className="flex items-center gap-2">
                <FiMapPin className="text-orange-600" /> Prime Location:
                Chabahil Hillside
              </li>
              <li className="flex items-center gap-2">
                <FiHome className="text-orange-600" /> Negotiable Price
              </li>
            </ul>
          </div>

          {/* General Info + Specifications */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* General Info */}
            <div className="flex-1 p-4 bg-orange-50 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-3 text-gray-800 text-lg">
                General Information
              </h3>
              <div className="grid grid-cols-2 gap-2 text-gray-700">
                <div className="font-medium">AD ID:</div>
                <div>HB-CE160B</div>

                <div className="font-medium">Location:</div>
                <div>Taukhel, Godawari-3, Lalitpur</div>

                <div className="font-medium">Property Type:</div>
                <div>Cozy House</div>
                <div className="font-medium">Ads Posted:</div>
                <div>21 hours ago</div>
              </div>
            </div>

            {/* Specifications */}
            <div className="flex-1 p-4 bg-orange-50 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-3 text-gray-800 text-lg">
                Specifications
              </h3>
              <div className="grid grid-cols-2 gap-2 text-gray-700">
                <div className="font-medium">Type:</div>
                <div>Land Plotted</div>

                <div className="font-medium">Road Size:</div>
                <div>13 to 20 Feet</div>

                <div className="font-medium">Road Type:</div>
                <div>Gravel</div>

                <div className="font-medium">Land Size (Aana/Dhur):</div>
                <div>0-4-2-0</div>
              </div>
            </div>
          </div>

          {/* Related Property Section */}
          <div className="mb-12">
            {" "}
            {/* ⬅️ added margin-bottom */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center md:text-left">
              Related Property!!!
            </h3>
            <a
              href="/related-properties" // <-- replace with your route or external link
              className="block relative w-full md:w-2/3 mx-auto rounded-lg overflow-hidden shadow-lg h-40 mr-60 group"
            >
              {/* Rotating Image */}
              <img
                src={images[current].src}
                alt={images[current].alt}
                className="w-full h-64 object-cover transition-opacity duration-700 group-hover:scale-105"
              />

              {/* Overlay text */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h2 className="text-white text-2xl md:text-3xl font-bold text-center px-4">
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

export default HouseUpdate;
