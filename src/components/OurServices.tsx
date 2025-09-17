import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaChartLine,
  FaKey,
  FaUsers,
  FaWallet,
  FaGavel,
} from "react-icons/fa";

interface Service {
  icon: React.ReactNode;
  title: string;
  desc: string;
  link?: string;
}

const OurServices: React.FC = () => {
  const navigate = useNavigate();

  const services: Service[] = [
    {
      icon: <FaHome className="text-orange-600 text-2xl sm:text-3xl" />,
      title: "Property Sales",
      desc: "Expert guidance through buying and selling residential and commercial properties",
      link: "/PropertySales",
    },
    {
      icon: <FaChartLine className="text-orange-600 text-2xl sm:text-3xl" />,
      title: "Market Analysis",
      desc: "Comprehensive market research and property valuation services",
      link: "/MarketAnalysis",
    },
    {
      icon: <FaKey className="text-orange-600 text-2xl sm:text-3xl" />,
      title: "Property Management",
      desc: "Full-service property management for landlords and investors",
      link: "/PropMgnt",
    },
    {
      icon: <FaUsers className="text-orange-600 text-2xl sm:text-3xl" />,
      title: "Investment Consulting",
      desc: "Strategic advice for real estate investment opportunities",
      link: "/InvestmentConsult",
    },
    {
      icon: <FaWallet className="text-orange-600 text-2xl sm:text-3xl" />,
      title: "Mortgage Services",
      desc: "Connect with trusted lenders and mortgage specialists",
      link: "/MortageService",
    },
    {
      icon: <FaGavel className="text-orange-600 text-2xl sm:text-3xl" />,
      title: "Legal Support",
      desc: "Professional legal assistance for all real estate transactions",
    },
  ];

  return (
    <section className="bg-white py-12 px-2 sm:px-6 md:pt-20 w-full overflow-x-hidden">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Our Services
        </h2>
        <p className="text-gray-600 text-base sm:text-lg">
          Comprehensive real estate solutions tailored to your needs
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => {
              if (service.link) navigate(service.link);
            }}
            className="group relative w-full max-w-full bg-white border rounded-lg p-4 sm:p-6 transition-all duration-300 shadow hover:shadow-xl overflow-hidden cursor-pointer sm:hover:scale-105"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tl from-orange-300 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none" />

            <div className="relative z-10">
              {/* Icon */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="bg-orange-300 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full shadow-md">
                  {service.icon}
                </div>
              </div>
              {/* Title + Desc */}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 group-hover:text-orange-800 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
