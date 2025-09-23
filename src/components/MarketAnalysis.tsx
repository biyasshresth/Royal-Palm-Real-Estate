import React, { useState, useEffect } from "react";
import { FaHome, FaEye, FaKey } from "react-icons/fa";
import FaqPic from "../assets/FaqPic.png";
import FaqPic1 from "../assets/FaqPic1.png";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "How do I buy a property through Real Estate Palm?",
    answer:
      "You can browse our listings online and contact the seller or agent directly through our platform. We also provide assistance to guide you through the buying process smoothly.",
  },
  {
    question: "Can I schedule a property visit?",
    answer:
      "Yes! Once you find a property you're interested in, you can request a visit through our website, and our agent will coordinate a suitable time for you.",
  },
  {
    question: "What are the payment options for buying a home?",
    answer:
      "We accept multiple payment methods including bank transfers, installments, and financing options. Our team can help you explore the best payment plan for your needs.",
  },
  {
    question: "How do I rent a home through Real Estate Palm?",
    answer:
      "Browse our rental listings and reach out directly via the contact information provided for each property. We ensure transparent rental agreements and support throughout the leasing period.",
  },
  {
    question: "Is Real Estate Palm licensed and trustworthy?",
    answer:
      "Absolutely. We are a fully licensed real estate platform with verified listings and trusted agents to ensure your transactions are safe and reliable.",
  },
];

const MarketAnalysis: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-full bg-gray-50 flex flex-col items-center px-6 py-12 w-full mx-auto">
      {/* Top Section */}
      <div className="text-center max-w-3xl mb-16">
        <p className="text-sm text-gray-500 mb-2 uppercase font-semibold">
          Why cHoose us
        </p>
        <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-gray-900 mb-1">
          We Have The Most Listings <br /> & Constant Updates.
        </h2>
      </div>

      {/* Top cards */}
      <div className="flex flex-col sm:flex-row gap-6 max-w-4xl mb-28">
        {[
          { icon: FaHome, title: "Buy a new home", color: "blue" },
          { icon: FaEye, title: "See a home", color: "pink" },
          { icon: FaKey, title: "Rent a home", color: "green" },
        ].map(({ icon: Icon, title, color }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md flex flex-col items-center p-6 flex-1 relative group overflow-hidden cursor-pointer"
          >
            <div
              className={`absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-orange-500 to-orange-100 opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none rounded-t-xl z-0`}
            />
            <div
              className={`bg-${color}-100 p-3 rounded-full text-${color}-600 mb-4 z-10 relative`}
            >
              <Icon size={22} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 text-center z-10 relative">
              {title}
            </h3>
            <p className="text-gray-500 text-sm text-center z-10 relative">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
              facere.
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row items-start max-w-6xl w-full gap-16">
        {/* Left image container */}
        <div className="flex flex-col w-full lg:w-1/2 space-y-8 ml-20 mb-52">
          <img
            src={FaqPic}
            alt="FAQ Illustration 1"
            className="object-contain w-full max-w-sm h-auto"
          />
          <img
            src={FaqPic1}
            alt="FAQ Illustration 2"
            className="object-contain w-full max-w-md h-auto"
          />
        </div>

        {/* Right side */}
        <div className="flex-1 w-full lg:w-1/2">
          <p className="text-xs text-gray-400 uppercase font-semibold mb-1">
            FAQS
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-10">
            Experts With Experience
          </h2>

          {/* Accordion cards */}
          <div className="space-y-5">
            {faqData.map(({ question, answer }, i) => {
              const isOpen = i === openIndex;
              return (
                <div
                  key={i}
                  className={`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-lg transition-all duration-300 ${
                    isOpen ? "ring-4 ring-purple-300" : ""
                  }`}
                >
                  <button
                    onClick={() => toggleIndex(i)}
                    className="w-full flex justify-between items-center px-6 py-5 text-white font-semibold rounded-xl focus:outline-none"
                  >
                    <span>{question}</span>
                    <svg
                      className={`w-6 h-6 transform transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-white text-sm leading-relaxed">
                      {answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketAnalysis;
