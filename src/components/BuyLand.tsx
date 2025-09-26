import React, { useEffect, useRef, useState } from "react";
import Plotting1 from "../assets/Plot1.png";
import Plotting2 from "../assets/Plot2.png";
import Plotting3 from "../assets/Plot3.png";

const images = [Plotting1, Plotting2, Plotting3];

const BuyLand: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Start automatic rotation every 2s
  useEffect(() => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, []);

  // When user selects an image, reset rotation timer so it doesn't immediately jump
  const handleSelectImage = (index: number) => {
    setCurrent(index);
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard");
    } catch {
      alert("Unable to copy link");
    }
  };

  const handleDownloadPdf = () => {
    window.print();
  };

  const handleCallNow = () => {
    window.location.href = "tel:+9779851342035";
  };

  const handleSubmitContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you — enquiry submitted (stub).");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Search bar */}
        <div className="flex justify-center my-4">
          <form
            className="relative w-full max-w-md"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Search for properties ID, location, type..."
              className="w-full border border-slate-300 rounded-full py-3 pl-12 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
            />
            {/* Search Icon */}
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </span>
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-slate-800 text-white px-4 py-2 rounded-full hover:bg-slate-900"
            >
              Search
            </button>
          </form>
        </div>

        {/* Main grid: Left (images + details) and Right (contact card) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT: Images & details (span 2 columns on large screens) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Large image area */}
            <div className="bg-white rounded-md shadow-md p-6">
              <div className="relative w-full h-[460px] md:h-[520px] overflow-hidden rounded-md">
                {/* stacked images with fade */}
                {images.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`Plot ${idx + 1}`}
                    loading="lazy"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      idx === current
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`}
                  />
                ))}
              </div>

              {/* Thumbnails */}
              <div className="mt-4 flex gap-3">
                {images.map((src, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectImage(idx)}
                    className={`h-20 w-28 overflow-hidden rounded-md border-2 transition-transform transform ${
                      idx === current
                        ? "border-slate-900 scale-105"
                        : "border-slate-200 hover:scale-105"
                    }`}
                    aria-label={`Show image ${idx + 1}`}
                  >
                    <img
                      src={src}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Property header, actions and meta */}
            <div className="bg-white rounded-md shadow-md p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-500">
                    Property ID:{" "}
                    <span className="text-slate-700 font-medium">6197</span>
                  </p>
                  <h2 className="text-2xl md:text-3xl font-semibold mt-2">
                    Plots for Sale at Changunarayan
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    <span className="inline-block align-middle mr-2">📍</span>
                    Changunarayan | Saraswati Mandir
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-lg md:text-xl text-slate-600">
                    17 Lakh 50 Thousand Per Aana
                  </p>
                  <p className="text-sm text-slate-400">Total Price</p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-4 flex flex-wrap gap-3">
                <button className="text-sm bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700">
                  <span>🔵</span> Facebook
                </button>

                <button
                  onClick={handleCallNow}
                  className="bg-green-500 text-sm text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-500"
                >
                  <span>📞</span> Call Now
                </button>

                <button
                  onClick={copyLink}
                  className="text-sm border border-slate-300 px-4 py-2 hover:bg-slate-50"
                >
                  <span>🔗</span> Copy Link
                </button>

                <button
                  onClick={handleDownloadPdf}
                  className="border border-slate-300 px-4 py-2 text-sm  hover:bg-slate-50"
                >
                  <span>⬇️</span> Download PDF
                </button>

                <button className="ml-auto text-red-500 hover:underline">
                  Save Property
                </button>
              </div>

              <hr className="my-6 border-dashed" />

              {/* Meta icons - Type and Area */}
              <div className="flex gap-6 items-center">
                <div className="flex items-center gap-3">
                  <div className="bg-slate-100 p-3 rounded-md">
                    <span>🏠</span>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Type</p>
                    <p className="font-medium">Land</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-slate-100 p-3 rounded-md">
                    <span>📏</span>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Area</p>
                    <p className="font-medium">48 Aana</p>
                  </div>
                </div>
              </div>

              {/* Property Details */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold">Property Details</h3>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                  Lalpurja Nepal brings you 10-11 plots total of 48 aana with
                  plots of 0-4-2-2 + 0-5-0-1 and also 8 aana at price of only
                  17.5 lakhs per aana. Through location is Changunarayan
                  Bhaktapur it is almost close to Kathmandu District, which is
                  advantageous to the buyer. Purchasing at Bhaktapur price and
                  enjoying Kathmandu facilities. So hurry up and book today.
                </p>

                <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                  Lalpurja Nepal also provides home loan services at a very low
                  interest rate.
                </p>
              </div>
            </div>

            {/* Overview */}
            <div className="bg-white rounded-md shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Overview</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm text-slate-700">Property Type:</p>
                  <p className="font-medium">Residential</p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-slate-700">Total Plots</p>
                  <p className="font-medium">10 - 11 plots</p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-slate-700">Location</p>
                  <p className="font-medium">Changunarayan, Bhaktapur</p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-slate-00">Pricing:</p>
                  <p className="font-medium">17 Lakh 50 Thousand Per Aana</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-slate-700">Property Face:</p>
                  <p className="font-medium">South-East</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-slate-700">Property Area:</p>
                  <p className="font-medium">48 Aana</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact card */}
          <aside className="space-y-6">
            <div className="bg-white rounded-md shadow-md p-6">
              <div className="flex items-center gap-4">
                {/* Agent avatar fallback (initials) */}
                <div className="h-16 w-16 rounded-md bg-slate-800 text-white flex items-center justify-center font-semibold">
                  ST
                </div>
                <div>
                  <p className="font-medium text-lg">Sunil Timilsina</p>
                  <p className="text-sm text-slate-500 mt-1">
                    📞 +977 9851342035
                  </p>
                  <p className="text-sm text-slate-500 mt-1">
                    ✉️ sales@lalpurjanepal.com.np
                  </p>
                </div>
              </div>

              <hr className="my-4" />

              <h4 className="font-semibold">Contact For Enquiry</h4>

              <form onSubmit={handleSubmitContact} className="mt-3 space-y-3">
                <div>
                  <label className="text-sm text-slate-600 mb-1 flex">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full border border-slate-200 rounded-md p-2 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-600 flex mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full border border-slate-200 rounded-md p-2 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-600 flex mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full border border-slate-200 rounded-md p-2 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-600 flex mb-1">
                    Message
                  </label>
                  <textarea
                    placeholder="Message"
                    className="w-full border border-slate-200 rounded-md p-2 focus:outline-none"
                    rows={4}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-800 text-white px-4 py-2 rounded-md"
                >
                  Send Enquiry
                </button>
              </form>
            </div>

            {/* WhatsApp floating or small help card */}
            <div className="bg-white rounded-md shadow-sm p-4">
              <p className="text-sm text-slate-600">
                Need immediate help? Click to chat on WhatsApp
              </p>
              <div className="mt-3">
                <a
                  href="https://wa.me/9779851342035"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 text-white px-4 py-2 rounded-md"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BuyLand;
