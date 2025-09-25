import React, { useEffect } from "react";
import ForSale from "../assets/ForSale.png";

const Sell: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative bg-white min-h-screen flex items-center justify-center px-10">
      {/* Content */}
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Text */}
        <div className="space-y-10 text-left ml-6 mb-44">
          <h1 className="text-5xl font-bold font-serif text-gray-900">
            Royal Palm <br /> Real estate
          </h1>
          <p className="text-gray-500 text-sm max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In ante
            metus dictum at tempor.
          </p>
          <button className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-800 transition">
            Learn more
          </button>
        </div>

        {/* Right Image */}
        <div className="mb-28">
          <img
            src={ForSale}
            alt="For Sale Illustration"
            className="max-w-full h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Sell;
