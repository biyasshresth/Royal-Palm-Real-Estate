import React, { FC, useState } from "react";
import Logo from "../../assets/logo.svg";
import BestPlot from "../../assets/BestPlot.png";
import { FiPhone, FiMapPin, FiMap, FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

const PlotUpdate: FC = () => {
  const [liked, setLiked] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex justify-center items-center p-6 border-b bg-orange-600">
        <h1 className="text-2xl md:text-xl font-extrabold tracking-tight text-white font-times">
          Trending Prices & Prime Locations
        </h1>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row p-6 gap-8">
        {/* Left side: Image + Seller details */}
        <div className="flex flex-col items-center gap-6 md:w-1/2 w-full">
          <img
            src={BestPlot}
            alt="Best Plot"
            className="rounded-xl shadow-2xl w-full object-cover h-96"
          />

          {/* Like button + Property status */}
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

          {/* Seller’s Details */}
          <div className="w-full bg-gray-50 border rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-5 border-b pb-2 text-gray-700">
              Seller's Information
            </h3>

            <div className="flex items-center gap-4 mb-4">
              {/* Profile button */}
              <button className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <span className="text-gray-500 text-sm font-medium">Img</span>
              </button>

              {/* Seller info */}
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

        {/* Right side: Details */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Chabahil Hillside
          </h2>
          <p className="mb-6 text-gray-700 leading-relaxed text-lg">
            One of the rarest plots available in Nepal, offering prime location
            and unmatched quality. Perfect for investors or personal use. Ready
            for immediate sale.
          </p>

          {/* General Info */}
          <div className="mb-6">
            <h3 className="font-bold mb-3 text-gray-700 border-b pb-2">
              General Information
            </h3>
            <div className="grid grid-cols-2 gap-3 text-gray-600 text-sm md:text-base">
              <div className="font-semibold">AD ID:</div>
              <div>HB-CE160B</div>
              <div className="font-semibold">Location:</div>
              <div>Taukhel, Godawari-3, Lalitpur</div>
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
            <div className="grid grid-cols-2 gap-3 text-gray-600 text-sm md:text-base">
              <div className="font-semibold">Type:</div>
              <div>Land Plotted</div>
              <div className="font-semibold">Road Size:</div>
              <div>13-20 Feet</div>
              <div className="font-semibold">Road Type:</div>
              <div>Gravel</div>
              <div className="font-semibold">Land Size (Aana/Dhur):</div>
              <div>0-4-2-0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlotUpdate;
