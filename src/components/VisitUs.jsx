import React from "react";
import { Link } from "react-router-dom";
import playStore from "../assets/Googleplay.svg";
import banner2 from "../assets/banner2.png";
const VisitUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white py-12 px-6 md:px-20">
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-6 mt-12 md:mt-0">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Ready To Find Your Dream Plot?
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Download our mobile app to manage your plots, get real-time updates,
          explore exclusive deals, and stay connected with your
          community—anytime, anywhere.
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-start justify-center items-center gap-4 mt-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.google.android.apps.maps"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={playStore}
              alt="Get it on Google Play"
              className="w-40 h-60 hover:scale-105 transition-transform"
            />
          </a>
          <a
            href="https://apps.apple.com/us/app/apple-store/id375380948"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
        <img
          src={banner2}
          alt="App Preview"
          className="max-w-full h-auto rounded-lg bg-transparent"
        />
      </div>
    </div>
  );
};

export default VisitUs;
