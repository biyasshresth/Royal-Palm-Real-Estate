import React, { useState, FormEvent, useEffect } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import Footer from "./Footer";

interface InfoCardProps {
  icon: React.ReactElement;
  title: string;
  children: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, children }) => {
  return (
    <div className="bg-white border rounded-lg p-3 shadow-xl text-sm overflow-x-hidden">
      <div className="flex items-start gap-3">
        <div className="text-orange-600 text-xl mt-0.5">{icon}</div>
        <div>
          <h4 className="font-semibold text-sm text-gray-800">{title}</h4>
          <div className="text-gray-600 text-xs mt-1">{children}</div>
        </div>
      </div>
    </div>
  );
};

const Contact: React.FC = (): React.ReactElement => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tMartEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.002563811674!2d85.3609952!3d27.7510504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bba03125ffb%3A0xa95c87cddfab7291!2sT.%20Mart!5e0!3m2!1sen!2snp!4v1691212345678!5m2!1sen!2snp";
  const tMartDirectLink =
    "https://www.google.com/maps/place/T.+Mart/@27.7510504,85.3609952,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb1bba03125ffb:0xa95c87cddfab7291!8m2!3d27.7510504!4d85.36357!16s%2Fg%2F11b6v9s4p";

  const [mapSrc, setMapSrc] = useState<string>(tMartEmbedUrl);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // replace with real submit logic if you have API endpoint
    alert("Message submitted (SUCCESSFULLY!!!!!!)");
  };

  return (
    <>
      <header className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white h-44">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12 sm:py-16 lg:py-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Get In Touch
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-lg">
              Ready to start your real estate journey? Contact our expert team
              today.
            </p>
          </div>
        </div>
      </header>

      {/* Main content area (centered container) */}
      <main className="bg-white">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 overflow-x-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left column (contact info + form) */}
            <div className="lg:col-span-5">
              {/* Section title */}
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Contact Information
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Quick ways to reach us — or send a message below.
                </p>
              </div>

              {/* Info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InfoCard icon={<FaPhoneAlt />} title="">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">
                      Sun–Fri · 10am–5pm
                    </div>
                    <div className="font-medium text-sm text-gray-800">
                      (+977) 9840060167 <br /> (+977) 9851152903
                    </div>
                  </div>
                </InfoCard>

                <InfoCard icon={<FaEnvelope />} title="">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Support</div>
                    <div className="font-medium text-sm text-gray-800 break-all">
                      contact@royalpalmrealestate.com.np
                    </div>
                  </div>
                </InfoCard>

                <InfoCard icon={<FaMapMarkerAlt />} title="Location">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">
                      Chabahil · Chunikhel, Budhanilkantha-13
                    </div>
                    <button
                      onClick={() => window.open(tMartDirectLink, "_blank")}
                      className="text-xs text-blue-600 hover:underline"
                      aria-label="Open T. Mart location in Google Maps"
                    >
                      Show T. Mart location
                    </button>
                  </div>
                </InfoCard>

                <InfoCard icon={<FaClock />} title="Office hours">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">
                      Office hours
                    </div>
                    <div className="font-medium text-sm text-gray-800">
                      Sun – Fri · 10am – 5pm
                    </div>
                  </div>
                </InfoCard>
              </div>

              {/* Send us a Message */}
              <div className="mt-10">
                <div className="bg-white border border-gray-200 rounded-lg shadow-xl p-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Send us a Message
                  </h3>

                  <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-3"
                  >
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200"
                      required
                    />

                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      className="col-span-1 md:col-span-2 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200"
                      required
                    />

                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone number"
                      className="col-span-1 md:col-span-2 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200"
                    />

                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="col-span-1 md:col-span-2 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200"
                      required
                    />

                    <textarea
                      name="message"
                      placeholder="Your message"
                      rows={4}
                      className="col-span-1 md:col-span-2 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 resize-none"
                      required
                    />

                    <button
                      type="submit"
                      className="col-span-1 md:col-span-2 bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 rounded-md"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Right column (map) */}
            <div className="lg:col-span-7">
              <div className="flex flex-col">
                {/* Title above the map */}
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center lg:text-left">
                  Located Map
                </h3>

                <div className="w-full rounded-lg overflow-hidden border shadow-lg">
                  <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[600px]">
                    <iframe
                      title="Chabahil T-Mart location"
                      src={mapSrc}
                      width="100%"
                      height="100%"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="block border-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
