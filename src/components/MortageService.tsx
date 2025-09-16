import React from "react";
import Mortage from "../assets/Mortage.png";

const MortageService: React.FC = () => {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side */}
        <div className="space-y-5">
          {/* Heading */}
          <div className="text-left">
            <div className="w-56 h-[6px] bg-blue-950 mb-3"></div>
            <h1 className="text-7xl font-serif text-blue-950 leading-tight">
              Mortage <br /> Investment
            </h1>
          </div>

          {/* Paragraph */}
          <p className="text-gray-600 text-sm leading-relaxed pr-20 text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
          </p>
          <div className="flex justify-start">
            {/* Button */}
            <button className="bg-yellow-400 text-white ml-0 px-6 py-2 rounded-full hover:bg-yellow-500 transition">
              See More
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <img
            src={Mortage}
            alt="Mortage Investment"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default MortageService;
