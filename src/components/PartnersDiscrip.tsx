import React from "react";
import Tbrother from "../assets/Tbother.jpg";
import consultancy from "../assets/consultancy.png";

// Define the component with React.FC type
const PartnerDiscrip: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Our Partners
      </h1>

      <div className="space-y-10">
        {/* Card 1 */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 group">
          <img
            src={Tbrother}
            alt="T Brothers Enterprise"
            className="w-60 h-60 object-cover rounded-lg mb-4 md:mb-0 md:mr-8 group-hover:scale-105 transition-transform duration-300"
          />
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              T Brothers Enterprise
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              At T. Brothers Enterprises, we specialize in providing
              high-quality hardware products and comprehensive solutions to meet
              your construction, renovation, and do-it-yourself (DIY) needs. Our
              extensive inventory features premium-grade cement, reinforced
              steel, precision tools, and a wide array of materials and
              accessories tailored for both professionals and homeowners.
              Whether you are building a residential complex, renovating a
              commercial space, or simply upgrading your home, our products are
              selected to ensure long-lasting durability, safety, and
              performance. We take pride in offering materials that meet
              industry standards while maintaining competitive pricing and
              exceptional customer service. Our knowledgeable team is always
              ready to assist you in choosing the right tools and materials,
              ensuring your projects are completed with confidence and
              efficiency. Visit us today to explore our diverse selection and
              discover why T. Brothers Enterprises remains the preferred choice
              for contractors, architects, engineers, and everyday builders
              across the region.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 group">
          <img
            src={consultancy}
            alt="C.S. Consultancy & Construction Pvt. Ltd"
            className="w-60 h-60 object-cover rounded-lg mb-4 md:mb-0 md:mr-8 group-hover:scale-105 transition-transform duration-300"
          />
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              C.S. Consultancy & Construction Pvt. Ltd
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              C.S. Consultancy & Construction Pvt. Ltd. is a trusted and
              reputable name in the construction and consultancy industry, known
              for delivering comprehensive, customized solutions that cater to
              the diverse needs of our clients. With decades of combined
              industry experience, we offer a full spectrum of services — from
              architectural design and project planning to construction
              execution and site supervision — ensuring seamless delivery from
              concept to completion. Our portfolio spans residential
              developments, commercial complexes, and industrial
              infrastructures, each project handled with a strong focus on
              quality, safety, innovation, and timely delivery. At the heart of
              our work lies a firm commitment to excellence and customer
              satisfaction. We strive to build not just structures, but
              long-term relationships based on trust, transparency, and
              consistent performance. Whether you're a homeowner, investor, or
              corporation, C.S. Consultancy & Construction Pvt. Ltd. is your
              reliable partner for transforming visions into reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerDiscrip;
