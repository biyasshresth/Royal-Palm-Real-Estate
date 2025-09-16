import React, { useEffect, FC } from "react";
import AboutLand from "../assets/AboutLand.png";
import { FaHome, FaBuilding, FaMapMarkedAlt } from "react-icons/fa";

const AboutUs: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[300px] bg-black">
        <img
          src={AboutLand}
          alt="Prime Location Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4 mt-16">
            Welcome to Palm Real Estate
          </h1>
        </div>
      </div>

      {/* Mission & Story */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 mr-28">Our Mission</h2>
          <ul className="list-disc text-gray-600 mb-6 space-y-2 text-left leading-relaxed">
            <li>
              Provide top-notch property solutions that make buying, selling,
              and renting seamless.
            </li>
            <li>Focus on prime locations for maximum value and convenience.</li>
            <li>
              Deliver exceptional customer service and guidance to every client.
            </li>
          </ul>

          <h2 className="text-3xl font-semibold mb-4 mr-40">Our Story</h2>
          <ul className="list-disc text-gray-600 space-y-2 text-left">
            <li>
              Established in 2010, growing into a trusted name in Royal Palm
              Real Estate.
            </li>
            <li>
              Dedicated team working closely with clients to find perfect homes,
              offices, or commercial spaces.
            </li>
            <li>Committed to making property dreams a reality.</li>
          </ul>
        </div>

        <div className="md:w-1/2 flex flex-col gap-6 mt-24">
          <div className="flex items-start gap-4">
            <FaHome className="text-4xl text-orange-500 mt-1" />
            <p>
              Residential properties tailored to your lifestyle. Explore modern
              apartments, villas, and family homes.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <FaBuilding className="text-4xl text-orange-500 mt-1" />
            <p>
              Commercial spaces for businesses of all sizes. From offices to
              retail, we have the perfect location.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <FaMapMarkedAlt className="text-4xl text-orange-500 mt-1" />
            <p>
              Prime locations and strategic property choices to maximize value
              and convenience.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-orange-500 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Find Your Dream Property Today
        </h2>
        <p className="mb-6">
          Contact us to explore premium properties tailored for you.
        </p>
        <a
          href="/contact"
          className="bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
