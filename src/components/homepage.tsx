import React, { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import RotatingBanner from "./RotatingBanner";
import OurServices from "./OurServices";
import Partners from "./Partners";
import Faq from "./Faq";
import Footer from "./Footer";
import "../styles/fade-in.css"; // external CSS for will-change & transition-delay classes

// ----------------------
// useInView hook (same pattern, no inline styles)
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
// FadeInOnScroll (no inline styles)
// ----------------------
interface FadeInOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number; // ms
}
const ALLOWED_DELAYS = [0, 50, 100, 150, 200, 250, 300, 350, 400, 500, 700, 1000];
function nearestDelayClass(delay = 0) {
  return ALLOWED_DELAYS.reduce((prev, curr) =>
    Math.abs(curr - delay) < Math.abs(prev - delay) ? curr : prev
  ).toString();
}
const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({ children, className = "", delay = 0 }) => {
  const [ref, inView] = useInView();
  const delayClass = `fade-delay-${nearestDelayClass(delay)}`;
  return (
    <div
      ref={ref}
      className={`${className} transition-transform duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} fade-in-on-scroll ${delayClass}`}
    >
      {children}
    </div>
  );
};

// ----------------------
// Homepage component
// ----------------------
const Homepage: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const [showButton, setShowButton] = useState(false);
  const fullText = "Discover the perfect property with our expert real estate services";
  const indexRef = useRef(0);

  // typing effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (indexRef.current < fullText.length) {
        setTypedText((prev) => prev + fullText[indexRef.current]);
        indexRef.current += 1;
      } else {
        clearInterval(interval);
      }
    }, 45);
    return () => clearInterval(interval);
  }, []);

  // scroll-to-top visibility
  useEffect(() => {
    const onScroll = () => setShowButton(window.scrollY > 150);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="w-screen relative min-h-screen">
      <RotatingBanner />

      {/* HERO: use an <img> instead of inline background-image */}
      <section className="relative w-full min-h-[320px] flex items-center justify-center text-center text-white overflow-hidden bg-gradient-to-r from-[#c0392b] to-[#d35400]">
        {/* Decorative image (absolute) instead of style background-image */}
        <img
          src="/assets/HeroDecoration.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        />

        <div className="relative z-10 px-4 max-w-4xl">
          <FadeInOnScroll>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Dream Home</h1>
          </FadeInOnScroll>

          <FadeInOnScroll delay={100}>
            <p className="text-lg md:text-xl mb-10 min-h-[48px] font-mono">{typedText}</p>
          </FadeInOnScroll>

          {/* Search bar (no inline styles) */}
          <FadeInOnScroll delay={200}>
            <div className="bg-white rounded-lg shadow-md flex flex-col md:flex-row items-stretch justify-between gap-4 max-w-4xl mx-auto p-4">
              <div className="flex items-center border rounded px-4 w-full md:w-auto">
                <CiLocationOn className="text-red-600 mr-2 font-extrabold" />
                <input
                  type="text"
                  placeholder="Enter location"
                  className="outline-none py-2 w-full text-black"
                  aria-label="Enter location"
                />
              </div>

              <div className="w-full md:w-auto">
                <label htmlFor="property-type" className="sr-only">Property Type</label>
                <select id="property-type" name="propertyType" className="w-full rounded border px-3 py-2 text-black">
                  <option value="">Select Property Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="land">Land</option>
                </select>
              </div>

              <div className="w-full md:w-auto">
                <label htmlFor="price-range" className="sr-only">Price Range</label>
                <select id="price-range" name="priceRange" className="w-full rounded border px-3 py-2 text-black">
                  <option value="">Select Price Range</option>
                  <option value="below-100k">Below $100k</option>
                  <option value="100k-500k">$100k - $500k</option>
                  <option value="above-500k">Above $500k</option>
                </select>
              </div>

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

      {/* Example content sections */}
      <section className="py-16 px-4 bg-gray-50 text-center">
        <FadeInOnScroll>
          <h2 className="text-3xl font-bold mb-4">Featured Properties</h2>
        </FadeInOnScroll>

        <FadeInOnScroll delay={100}>
          <p className="text-gray-600 mb-10">Discover our handpicked selection of premium properties</p>
        </FadeInOnScroll>
      </section>

      <FadeInOnScroll><OurServices /></FadeInOnScroll>
      <FadeInOnScroll><Partners /></FadeInOnScroll>
      <FadeInOnScroll><Faq /></FadeInOnScroll>
      <FadeInOnScroll><Footer /></FadeInOnScroll>

      {showButton && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-16 right-16 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition duration-200 z-50"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Homepage;
