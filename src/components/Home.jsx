import React, { useState, useEffect, useRef } from "react";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import { FaArrowUp } from "react-icons/fa";
import modernHome from "../assets/modernHome.jpg";
import pentHouse from "../assets/pentHouse.png";
import cozy from "../assets/cozy.png";
import waterfrontVilla from "../assets/WaterFront.jpg";
import charmingHouse from "../assets/Suburban.png";

import OurService from "./OurService";
import Partners from "./Partners";
import Faq from "./faq";
import Footer from "./Footer";
import RotatingBanner from "./RotatingBanner";
const useInView = (options = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
};

const FadeInOnScroll = ({ children, className = "", delay = 0 }) => {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`${className} transition-transform duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
};

const HeroSection = ({ subtitle }) => {
  return (
    <section className="relative w-full min-h-[300px] flex items-center justify-center text-center text-white bg-gradient-to-r from-[#c0392b] to-[#d35400]">
      <div className="relative z-10 px-4 max-w-4xl">
        <FadeInOnScroll>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Dream Home
          </h1>
        </FadeInOnScroll>

        <FadeInOnScroll delay={100}>
          <p className="text-lg md:text-xl mb-10 min-h-[48px] font-mono">
            {subtitle}
          </p>
        </FadeInOnScroll>

        {/* Search Bar */}
        <FadeInOnScroll delay={200}>
          <div className="bg-white rounded-lg shadow-md flex flex-col md:flex-row items-stretch justify-between gap-4 max-w-4xl mx-auto p-4">
            <div className="flex items-center border rounded px-4 w-full md:w-auto">
              <CiLocationOn className="text-red-600 mr-2 font-extrabold" />
              <input
                type="text"
                placeholder="Enter location"
                className="outline-none py-2 w-full text-black"
              />
            </div>

            <select className="border rounded px-3 py-2 w-full md:w-auto text-black">
              <option>Property Type</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Land</option>
            </select>

            <select className="border rounded px-3 py-2 w-full md:w-auto text-black">
              <option>Price Range</option>
              <option>Below $100k</option>
              <option>$100k - $500k</option>
              <option>Above $500k</option>
            </select>

            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded w-full md:w-auto flex items-center justify-center gap-2">
              <CiSearch /> Search
            </button>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
};

const Home = () => {
  // Typing effect
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
  }, []);

  // Scroll-to-top button
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () =>
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });

  // Properties for Featured
  const properties = [
    {
      title: "Modern Family House",
      price: "$400,000",
      features: "3 Bed · 2 Bath",
      status: "For Sale",
      img: modernHome,
    },
    {
      title: "Luxury Penthouse",
      price: "$850,000",
      features: "4 Bed · 3 Bath",
      status: "For Sale",
      img: pentHouse,
    },
    {
      title: "Cozy Country Cottage",
      price: "$250,000",
      features: "2 Bed · 1 Bath",
      status: "For Sale",
      img: cozy,
    },
    {
      title: "WaterFront Villa",
      price: "$150,000",
      features: "2 Bed · 1 Bath",
      status: "For Sale",
      img: waterfrontVilla,
    },
    {
      title: "Charming Suburban House",
      price: "$150,000",
      features: "2 Bed · 1 Bath",
      status: "For Sale",
      img: charmingHouse,
    },
  ];

  return (
    <div className="w-screen relative min-h-screen">
      {/* Rotating Image Banner */}
      <RotatingBanner />

      {/* Hero Section */}
      <HeroSection subtitle={typedText} />

      {/* Featured Properties */}
      <section className="text-center py-16 px-4 bg-gray-50">
        <FadeInOnScroll>
          <h2 className="text-3xl font-bold mb-4">Featured Properties</h2>
        </FadeInOnScroll>

        <FadeInOnScroll delay={100}>
          <p className="text-gray-600 mb-10">
            Discover our handpicked selection of premium properties
          </p>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {properties.map((property, index) => (
            <FadeInOnScroll key={index} delay={index * 120}>
              <div className="bg-white shadow rounded-lg overflow-hidden p-4 relative transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
                <div className="absolute top-4 left-4 bg-red-500 text-white text-sm px-2 py-1 rounded">
                  {property.status}
                </div>
                <img
                  src={property.img}
                  alt={property.title}
                  loading="lazy"
                  className="h-40 w-full object-cover mb-4 rounded"
                />
                <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600">
                  {property.price} · {property.features}
                </p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </section>

      {/* Other Sections */}
      <FadeInOnScroll>
        <OurService />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Partners />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Faq />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Footer />
      </FadeInOnScroll>

      {/* Scroll-to-Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 right-16 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition duration-200 z-50"
          title="Scroll to top"
        >
          <FaArrowUp size={25} />
        </button>
      )}
    </div>
  );
};

export default Home;
