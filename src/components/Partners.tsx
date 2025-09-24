import React from "react";
import { FaHome, FaSmile, FaAward, FaStar } from "react-icons/fa";
import consultancy from "../assets/consultancy.png";
import Tbother from "../assets/Tbother.jpg";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

interface Stat {
  icon: React.ReactNode;
  title: string;
  label: string;
}

const Partners: React.FC = () => {
  const stats: Stat[] = [
    {
      icon: <FaHome className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "2,500+",
      label: "Properties Sold",
    },
    {
      icon: <FaSmile className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "1,200+",
      label: "Happy Clients",
    },
    {
      icon: <FaAward className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "15+",
      label: "Years Experience",
    },
    {
      icon: <FaStar className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "4.9",
      label: "Client Rating",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 px-3 sm:px-6 md:px-20 md:pt-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-6 sm:gap-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm sm:text-base font-semibold">
            About Real Estate Palm
          </span>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900">
            Your Trusted Real Estate Partner
          </h2>
          <p className="text-gray-600 text-sm sm:text-md leading-relaxed">
            With over 15 years of experience in the real estate industry, Real
            State Palm has been helping families find their dream homes and
            investors discover profitable opportunities. Our team of dedicated
            professionals combines market expertise with personalized service to
            deliver exceptional results.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center w-full max-w-full"
              >
                <div className="bg-orange-500 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-white">
                  {stat.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mt-2">
                  {stat.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Button */}
          <Link
            to="/PartnerDiscrip"
            className="inline-block mt-6 bg-orange-600 hover:bg-orange-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition"
          >
            Learn More About Us
          </Link>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex flex-col items-center gap-16 sm:gap-16 mt-20 md:mt-16">
          <img
            src={logo}
            alt="Logo"
            className="w-24 sm:w-40 h-auto object-contain max-w-full"
          />

          {/* Bottom Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
            {/* Card 1 */}
            <div className="w-full h-48 sm:h-64 bg-gray-200 shadow-md flex items-center justify-center overflow-hidden">
              <img
                src={Tbother}
                alt="Tmart"
                className="object-contain w-full h-full max-w-full"
              />
            </div>

            {/* Card 2 */}
            <div className="w-full h-48 sm:h-64 bg-gray-200 shadow-md flex items-center justify-center overflow-hidden">
              <img
                src={consultancy}
                alt="Consultancy"
                className="object-contain w-full h-full max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
