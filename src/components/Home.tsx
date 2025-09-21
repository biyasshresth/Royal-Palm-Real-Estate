import React, { useState, useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import { FaArrowUp } from "react-icons/fa";
import ModernHome from "../assets/ModernHome.jpg";
import pentHouse from "../assets/pentHouse.png";
import cozy from "../assets/cozy.png";
import waterfrontVilla from "../assets/WaterFront.jpg";
import charmingHouse from "../assets/Suburban.png";
import OurServices from "./OurServices";
import Partners from "./Partners";
import Faq from "./Faq";
import Footer from "./Footer";
import RotatingBanner from "./RotatingBanner";

const useInView = (options: IntersectionObserverInit = {}) => {
  const ref = useRef<HTMLDivElement | null>(null);
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
      { threshold: 0.5, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView] as const;
};

// ----------------------
// Fade-in Component (no inline styles)
// ----------------------
interface FadeInOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number; // milliseconds
}

/**
 * We map the requested delay to the nearest pre-defined delay class
 * (so we don't have to use inline styles).
 */
const ALLOWED_DELAYS = [
  0, 50, 100, 150, 200, 250, 300, 350, 400, 500, 700, 1000,
];

function nearestDelayClass(delay = 0) {
  let nearest = ALLOWED_DELAYS.reduce(
    (prev, curr) =>
      Math.abs(curr - delay) < Math.abs(prev - delay) ? curr : prev,
    ALLOWED_DELAYS[0]
  );
  return `fade-delay-${nearest}`;
}

const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({
  children,
  className = "",
  delay = 0,
}) => {
  const [ref, inView] = useInView();
  const delayClass = nearestDelayClass(delay);

  // Use Tailwind for transform/opacity classes, and external CSS for will-change + transition-delay
  return (
    <div
      ref={ref}
      className={`${className} transition-transform duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } fade-in-on-scroll ${delayClass}`}
    >
      {children}
    </div>
  );
};

// ----------------------
// Hero Section
// ----------------------
interface HeroSectionProps {
  subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ subtitle }) => {
  return (
    <section className="relative w-full min-h-[300px] flex items-center justify-center text-center text-white bg-gradient-to-r from-[#c0392b] to-[#d35400]">
      <div className="relative z-10 px-4 p-14 max-w-4xl">
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
            {/* Location Input */}
            <div className="flex items-center border rounded px-4 w-full md:w-auto">
              <CiLocationOn className="text-red-600 mr-2 font-extrabold" />
              <input
                type="text"
                name="location"
                placeholder="Enter location"
                className="outline-none py-2 w-full text-black"
                aria-label="Enter location"
              />
            </div>

            {/* Property Type Dropdown */}
            <div className="w-full md:w-auto">
              <label htmlFor="property-type" className="sr-only">
                Property Type
              </label>
              <select
                id="property-type"
                name="propertyType"
                className="w-full rounded border px-3 py-2 text-black"
              >
                <option value="">Select Property Type</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="land">Land</option>
              </select>
            </div>

            {/* Price Range Dropdown */}
            <div className="w-full md:w-auto">
              <label htmlFor="price-range" className="sr-only">
                Price Range
              </label>
              <select
                id="price-range"
                name="priceRange"
                className="w-full rounded border px-3 py-2 text-black"
              >
                <option value="">Select Price Range</option>
                <option value="below-100k">Below $100k</option>
                <option value="100k-500k">$100k - $500k</option>
                <option value="above-500k">Above $500k</option>
              </select>
            </div>

            {/* Search Button */}
            <button
              type="button"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded w-full md:w-auto flex items-center justify-center gap-2"
              aria-label="Search properties"
            >
              <CiSearch /> Search
            </button>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
};
interface Property {
  title: string;
  price: string;
  features: string;
  status: string;
  img: string;
}

const Home: React.FC = () => {
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
  const properties: Property[] = [
    {
      title: "Modern Family House",
      price: "$400,000",
      features: "3 Bed · 2 Bath",
      status: "For Sale",
      img: ModernHome,
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
    <div className="w-full relative min-h-full">
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
        <OurServices />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Partners />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Faq />
      </FadeInOnScroll>
      {/* <FadeInOnScroll>
        <Footer />
      </FadeInOnScroll> */}
      {/* Scroll-to-Top Button */}
      {showButton && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-16 right-16 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition duration-200 z-50"
        >
          <FaArrowUp size={25} />
        </button>
      )}
    </div>
  );
};

export default Home;
