import React, { useEffect } from "react";
import Logo from "../assets/logo.svg";
import Plot1 from "../assets/Plot1.png";
import Plot2 from "../assets/Plot2.png";
import Plot3 from "../assets/Plot3.png";
import { FaPhoneAlt, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";

const PropertySales: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-white px-4 pb-5">
      <div className="max-w-6xl w-full bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="bg-[#2A211E] text-white w-full md:w-1/2 pl-8 mb-20 relative flex flex-col justify-center">
          <div className="flex flex-row">
            <img src={Logo} alt="Logo" className="w-20 mb-10" />
            <span className="text-4xl font-semibold text-white p-10 ml-5">
              Real Estate Palm
            </span>
          </div>
          <h2 className="text-3xl font-bold leading-tight mb-4">
            OPEN PLOT, <br />
            EMI 0% INTEREST
          </h2>

          <div className="bg-[#A4713A] px-6 py-2 rounded-full text-sm font-semibold w-max mb-6">
            PLOTS STARTING FROM 200: FT
          </div>

          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <span className="text-purple-400 mr-2">✔</span> Residential
            </li>
            <li className="flex items-center">
              <span className="text-purple-400 mr-2">✔</span> Bungalow
            </li>
            <li className="flex items-center">
              <span className="text-purple-400 mr-2">✔</span> Farm House
            </li>
            <li className="flex items-center">
              <span className="text-purple-400 mr-2">✔</span> Second Home
            </li>
          </ul>

          {/* Contact Box */}
          <div className="absolute bottom-6 right-6 bg-white rounded-lg shadow-xl p-5 w-64 text-sm text-black">
            <button className="bg-black text-white px-4 py-2 rounded font-semibold mb-4 w-full">
              CONTACT NOW
            </button>

            <div className="flex items-center mb-2">
              <FaPhoneAlt className="text-pink-500 mr-2" />
              <span>0123 456 789</span>
            </div>

            <div className="flex items-center mb-2">
              <FaGlobe className="text-blue-500 mr-2" />
              <span>www.psfiles.com</span>
            </div>

            <div className="flex items-center">
              <FaMapMarkerAlt className="text-red-500 mr-2" />
              <span>15 – NYC, USA</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative w-full md:w-1/2 h-[600px] overflow-hidden">
          <img
            src={Plot1}
            alt="Plot1"
            className="absolute top-2 left-10 w-72 h-72 object-cover rounded-lg transform shadow-xl border-4 border-white animate-bounceY rotate-[60deg]"
          />
          <img
            src={Plot2}
            alt="Plot2"
            className="absolute top-6 left-72 w-72 h-72 object-cover rounded-lg transform shadow-xl border-4 border-white animate-bounceY rotate-[30deg]"
          />
          <img
            src={Plot3}
            alt="Plot3"
            className="absolute top-60 left-20 w-72 h-72 object-cover rounded-lg shadow-xl border-4 border-white transform rotate-[30deg] animate-bounceY"
          />
        </div>
      </div>
    </section>
  );
};

export default PropertySales;
