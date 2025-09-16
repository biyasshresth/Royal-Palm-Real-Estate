import React from "react";
import LandMark from "../assets/LandMark.png";

const Buy: React.FC = () => {
  return (
    <section className="bg-[#f02b5c] min-h-screen flex items-center justify-center px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side Text */}
        <div className="text-white space-y-4">
          <h1 className="text-4xl font-bold uppercase">Land For Sale</h1>
          <h2 className="text-xl text-white/90">Dolor sit amet veniam sit</h2>
          <p className="text-sm text-[#ffb3c7]">
            Lorem ipsum dolor sit amet, consectetur ipisicing, edit sad fo
            consect tempor eiusmod ut labore et samul incididunt a dolore magna.
            Ut enim minim aliqua.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
            Learn more
          </button>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <img
            src={LandMark}
            alt="LandMark"
            className="max-w-full h-auto shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Buy;
