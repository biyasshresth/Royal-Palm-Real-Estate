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

const Services: React.FC = () => {
  const navigate = useNavigate();

  const services: Service[] = [
    {
      icon: (
        <FaHome className="flip-hover text-orange-600 text-3xl transition-transform duration-500" />
      ),
      title: "Property Sales",
      desc: "Expert guidance through buying and selling residential and commercial properties",
      link: "/PropertySales",
    },
    {
      icon: (
        <FaChartLine className="flip-hover text-orange-600 text-3xl transition-transform duration-500" />
      ),
      title: "Market Analysis",
      desc: "Comprehensive market research and property valuation services",
      link: "/MarketAnalysis",
    },
    {
      icon: (
        <FaKey className="flip-hover text-orange-600 text-3xl transition-transform duration-500" />
      ),
      title: "Property Management",
      desc: "Full-service property management for landlords and investors",
      link: "/PropMgnt",
    },
    {
      icon: (
        <FaUsers className="flip-hover text-orange-600 text-3xl transition-transform duration-500" />
      ),
      title: "Investment Consulting",
      desc: "Strategic advice for real estate investment opportunities",
      link: "/InvestmentConsult",
    },
    {
      icon: (
        <FaWallet className="flip-hover text-orange-600 text-3xl transition-transform duration-500" />
      ),
      title: "Mortgage Services",
      desc: "Connect with trusted lenders and mortgage specialists",
      link: "/MortageService",
    },
    {
      icon: (
        <FaGavel className="flip-hover text-orange-600 text-3xl transition-transform duration-500" />
      ),
      title: "Legal Support",
      desc: "Professional legal assistance for all real estate transactions",
      // no link provided
    },
  ];

  return (
    <section className="bg-white py-16 px-4 w-screen">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 text-lg">
          Comprehensive real estate solutions tailored to your needs
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => {
              if (service.link) navigate(service.link);
            }}
            className="group relative bg-white border rounded-lg p-6 transition-all duration-300 shadow hover:shadow-2xl overflow-hidden cursor-pointer hover:scale-110"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-orange-300 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none" />
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="bg-orange-300 w-16 h-16 flex items-center justify-center rounded-full shadow-md transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-orange-800 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
