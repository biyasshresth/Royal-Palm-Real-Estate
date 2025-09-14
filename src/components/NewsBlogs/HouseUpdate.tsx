import React, { FC, useState } from "react";
import cozy from "../../assets/cozy.png";
import FarmHouse from "../../assets/FarmHouse.png";
import Picture1 from "../../assets/Picture1.png";
import Apartment from "../../assets/Apartment.png";
import { FiHeart } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import { FiPhone, FiMapPin, FiMap } from "react-icons/fi";

const HouseUpdate: FC = () => {
  const [liked, setLiked] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-white p-6">
      {/* Header centered */}
      <h1
        className="text-2xl font-bold mb-6 text-center"
        style={{ fontFamily: "'Times New Roman', serif" }}
      >
        Trending Price and Location
      </h1>

      {/* Main horizontal layout */}
      <div className="flex gap-6">
        {/* Left column: Plot Image + Like button + Seller details */}
        <div className="md:w-1/3 w-full flex flex-col items-center gap-4">
          {/* Plot image */}
          <img
            src={cozy}
            alt="cozy home Plot"
            className="rounded-lg shadow-2xl w-full object-cover h-96"
          />

          {/* Like button + "Like New" */}
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

          {/* Seller's Details */}
          <div className="w-full bg-gray-50 border rounded-xl shadow p-4 mt-2">
            <h3 className="text-lg font-semibold mb-4 underline">
              Seller's Details
            </h3>
            <div className="flex items-center gap-4 mb-4">
              {/* Profile placeholder */}
              <button className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <span className="text-gray-500 text-sm">Img</span>
              </button>
              {/* Seller Info */}
              <div className="space-y-2">
                <p className="font-semibold text-lg">John Doe</p>
                <p className="flex items-center text-gray-500 text-sm gap-1">
                  <FiPhone className="text-gray-600" /> +977-9812345678
                </p>
                <p className="flex items-center text-sm text-gray-800 gap-1">
                  <FiMapPin className="text-gray-600" /> Kalanki, Kathmandu
                </p>
                <p className="flex items-center text-sm text-gray-800 gap-1">
                  <FiMap className="text-gray-600" /> Chabahil Hillside
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Center column: Plot Details */}
        <div className="md:w-1/3 w-full flex flex-col gap-6">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            Chabahil Hillside
          </h2>
          <p className="text-gray-700 mb-4 text-base leading-relaxed">
            Discover a rare gem in Nepal! This plot is a unique opportunity,
            fully developed, and maintained in pristine condition. Ideal for
            investment or building your dream home.
          </p>

          {/* General Info */}
          <div className="mb-4 p-4 bg-orange-50 rounded-lg shadow-sm">
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

              <div className="font-medium">Negotiable:</div>
              <div>Yes</div>

              <div className="font-medium">Ads Posted:</div>
              <div>21 hours ago</div>

              <div className="font-medium">Ads Expiry:</div>
              <div>2025-09-18</div>
            </div>
          </div>

          {/* Specifications */}
          <div className="p-4 bg-orange-50 rounded-lg shadow-sm">
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

        {/* Right column: 3 small cards */}
        <div className="md:w-1/3 w-full flex flex-col gap-6 mt-10">
          <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
            Choose from here!!!
          </h3>
          {/* Farm House Card */}
          <div className="bg-orange-50 border rounded-lg shadow p-4 flex flex-col items-center gap-3 hover:shadow-lg transition w-60 h-40 mx-auto">
            <img
              src={FarmHouse}
              alt="Farm House"
              className="w-36 h-20 rounded-lg object-cover"
            />
            <h3 className="text-lg font-semibold">Farm House</h3>
          </div>

          {/* Family House Card */}
          <div className="bg-orange-50 border rounded-lg shadow p-4 flex flex-col items-center gap-3 hover:shadow-lg transition  w-60 h-40 mx-auto">
            <img
              src={Picture1}
              alt="House"
              className="w-36 h-20 rounded-lg object-cover"
            />
            <h3 className="text-lg font-semibold">Family House</h3>
          </div>

          {/* Apartment Card */}
          <div className="bg-orange-50 border rounded-lg shadow p-4 flex flex-col items-center gap-3 hover:shadow-lg transition w-60 h-40 mx-auto">
            <img
              src={Apartment}
              alt="Apartment"
              className="w-16 h-20 rounded-lg object-cover"
            />
            <h3 className="text-lg font-semibold">Apartment</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseUpdate;
