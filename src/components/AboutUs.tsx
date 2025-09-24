import React, { useEffect, FC, useState } from "react";
import AboutLand from "../assets/AboutLand.png";
import { FaHome, FaBuilding, FaMapMarkedAlt, FaTimes } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { BiSolidBinoculars } from "react-icons/bi";
import { FaBookOpen } from "react-icons/fa";
interface ModalProps {
  title: string;
  points: string[];
  icon?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const InfoModal: FC<ModalProps> = ({
  title,
  points,
  icon,
  isOpen,
  onClose,
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-white rounded-lg max-w-lg w-full p-6 relative shadow-lg transform transition-transform duration-300 ${
          isOpen ? "scale-100" : "scale-90"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          aria-label="Close modal"
        >
          <FaTimes size={24} />
        </button>
        <div className="flex items-center gap-3 mb-4">
          {icon}
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const AboutUs: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openModal, setOpenModal] = useState<string | null>(null);

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

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          className="cursor-pointer border rounded-lg shadow-lg p-6 flex items-center gap-3 hover:bg-gray-100 transition"
          onClick={() => setOpenModal("mission")}
        >
          <TbTargetArrow className="text-orange-500 text-3xl" />
          <h2 className="text-xl font-semibold">Our Mission</h2>
        </div>

        <div
          className="cursor-pointer border rounded-lg shadow-lg p-6 flex items-center gap-3 hover:bg-gray-100 transition"
          onClick={() => setOpenModal("story")}
        >
          <FaBookOpen className="text-orange-500 text-3xl" />
          <h2 className="text-xl font-semibold">Our Story</h2>
        </div>

        <div
          className="cursor-pointer border rounded-lg shadow-lg p-6 flex items-center gap-3 hover:bg-gray-100 transition"
          onClick={() => setOpenModal("vision")}
        >
          <BiSolidBinoculars className="text-orange-500 text-3xl" />
          <h2 className="text-xl font-semibold">Our Vision</h2>
        </div>
      </div>

      {/* Modals */}
      <InfoModal
        title="Our Mission"
        points={[
          "Provide top-notch property solutions that make buying, selling, and renting seamless.",
          "Focus on prime locations for maximum value and convenience.",
          "Deliver exceptional customer service and guidance to every client.",
        ]}
        icon={<TbTargetArrow className="text-orange-500 text-2xl" />}
        isOpen={openModal === "mission"}
        onClose={() => setOpenModal(null)}
      />

      <InfoModal
        title="Our Story"
        points={[
          "Established in 2010, growing into a trusted name in Royal Palm Real Estate.",
          "Dedicated team working closely with clients to find perfect homes, offices, or commercial spaces.",
          "Committed to making property dreams a reality.",
        ]}
        icon={<FaBookOpen className="text-orange-500 text-2xl" />}
        isOpen={openModal === "story"}
        onClose={() => setOpenModal(null)}
      />

      <InfoModal
        title="Our Vision"
        points={[
          "Residential properties tailored to your lifestyle. Explore modern apartments, villas, and family homes.",
          "Commercial spaces for businesses of all sizes. From offices to retail, we have the perfect location.",
          "Prime locations and strategic property choices to maximize value and convenience.",
        ]}
        icon={<BiSolidBinoculars className="text-orange-500 text-2xl" />}
        isOpen={openModal === "vision"}
        onClose={() => setOpenModal(null)}
      />

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
