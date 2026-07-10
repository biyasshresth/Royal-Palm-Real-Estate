import React, { useState, useEffect, useRef, useMemo } from "react";
import { FaArrowUp, FaChevronDown, FaChevronUp } from "react-icons/fa";
import BuyLand from "./../assets/AvailablePlot.png";
import OurServices from "./OurServices";
import Partners from "./Partners";
import Faq from "./Faq";
import RotatingBanner from "./RotatingBanner";
import PropertyService from "../services/PropertyService";
import { Property } from "../types/auth/Property";

const Home: React.FC = () => {
  const propertyService = useMemo(() => new PropertyService(), []);
  const faqRef = useRef<HTMLDivElement>(null);
  const [fetchFeatured, setFetchFeatured] = useState<Property[]>([]);
  useEffect(() => {
    const fetchedproperties = async () => {
      try {
        const response = await propertyService.getFeatured();
        console.log(response);
        setFetchFeatured(response.featured_listings || []);
      } catch (error) {
        console.log(error);
      }
    }
    fetchedproperties();
  }, []);
  const [typedText, setTypedText] = useState("");
  const fullText =
    "Discover the perfect property with our expert real estate services";
  const typingSpeed = 50;
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexRef.current < fullText.length) {
        setTypedText((prev) => prev + fullText[indexRef.current]);
        indexRef.current += 1;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);
    return () => clearInterval(interval);
  }, [propertyService]);

  // Scroll-to-top button
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const start = window.scrollY;
    const distance = -start;
    const duration = 900;
    let startTime: number | null = null;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, start + distance * progress);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  const [showOverview, setShowOverview] = useState(false);

  return (
    <div className="w-full relative min-h-full">
      <RotatingBanner />

      {/* Hero Section */}
      <section className="relative w-full min-h-[300px] flex items-center justify-center text-center text-white bg-gradient-to-r from-[#c0392b] to-[#d35400]">
        <div className="relative z-10 px-4 p-14 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Dream Home
          </h1>
          <p className="text-lg md:text-xl mb-10 min-h-[48px] font-mono">
            {typedText}
          </p>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="text-center py-16 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">Featured Properties</h2>
        <p className="text-gray-600 mb-10">
          Discover our handpicked selection of premium properties
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* showOverview  */}
          {(showOverview ? fetchFeatured : fetchFeatured.slice(0, 3)).map(
            (property) => (
              <div
                key={property.id}
                className="bg-white shadow rounded-lg overflow-hidden p-4 relative transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              >
                <div className="absolute top-4 left-4 bg-red-500 text-white text-sm px-2 py-1 rounded">
                  For Sale
                </div>
                <img
                  src={property.media[0] || BuyLand}
                  alt={property.title}
                  className="h-40 w-full object-cover mb-4 rounded"
                />
                <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600">
                  {property.price ? `$${property.price}` : "Price on request"} ·{" "}
                </p>
                <p className="text-gray-500 text-sm">{property.city}</p>
              </div>
            )
          )}

          {/* Show / Hide Overview*/}
          {fetchFeatured.length > 3 && (
            <div
              onClick={() => setShowOverview(!showOverview)}
              className="flex flex-col items-center justify-center bg-gradient-to-t from-[#f18c08] to-[#f19448] text-white font-semibold rounded-lg shadow-lg cursor-pointer hover:bg-orange-600 transition duration-300 p-4"
            >
              {showOverview ? "Hide Overview" : "Show Overview"}
              <div className="mt-2 animate-bounce">
                {showOverview ? (
                  <FaChevronUp size={20} />
                ) : (
                  <FaChevronDown size={20} />
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      <OurServices />
      <Partners />

      {/* FAQ Section */}
      <Faq ref={faqRef} />

      {/* Scroll-to-top Button */}
      {showButton && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="
      fixed 
      bottom-14 right-10 p-2.5
      md:bottom-16 md:right-16 md:p-3.5
      bg-orange-500 text-white 
      rounded-full shadow-lg 
      hover:bg-orange-600 transition duration-200 
      z-50
    "
        >
          <FaArrowUp size={25} />
        </button>
      )}
    </div>
  );
};

export default Home;
