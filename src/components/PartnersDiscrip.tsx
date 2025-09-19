import React, { useState } from "react";
import Tbrother from "../assets/Tbother.jpg";
import consultancy from "../assets/consultancy.png";

const PartnerDiscrip: React.FC = () => {
  const [openCard, setOpenCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenCard(openCard === index ? null : index);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Our Partners
      </h1>

      <div className="space-y-10">
        {/* Card 1 */}
        <div
          className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          onClick={() => toggleCard(1)}
        >
          <img
            src={Tbrother}
            alt="T Brothers Enterprise"
            className="w-60 h-60 object-cover rounded-lg mb-4 md:mb-0 md:mr-8"
          />
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              T Brothers Enterprise
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              At T. Brothers Enterprises, we specialize in providing good
              quality hardware products and solutions to meet your construction,
              renovation, and do-it-yourself (DIY) needs. our extensive range of
              products includes premium cement, durable steel, wide range of
              tools, materials, and accessories for professionals and homeowners
              alike to ensure yours project are built to last. Whether you are
              working on a large-scale construction project or small home
              renovation, T. Brothers Enterprises is your trusted partner for
              reliable products, competitive prices, and exceptional service.
              Visit us today to explore our wide selection and experience why T.
              Brothers Enterprises is the preferred choice for builders and
              contractors.
            </p>

            {/* Dropdown Section */}
            {openCard === 1 && (
              <div className="mt-4 space-y-4 text-gray-700">
                <h3 className="text-2xl font-medium text-gray-900">
                  Services Available:
                </h3>
                <p>
                  We take pride in offering complete services to meet the needs
                  of our customers:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Delivery Services:</strong> We ensure your materials
                    reach your site or home on time.
                  </li>
                  <li>
                    <strong>Complete Construction Materials:</strong> Cement,
                    steel, sand, bricks, aggregate, and blocks.
                  </li>
                  <li>
                    <strong>Diverse Range of Hardware Tools:</strong> Drill
                    machines, marble cutters, grinders, water pumps, etc.
                  </li>
                  <li>
                    <strong>Bulk Order Discounts:</strong> Special rates for
                    large-scale projects.
                  </li>
                  <li>
                    <strong>Steel in Pieces:</strong> Buy individual pieces
                    instead of whole bundles.
                  </li>
                  <li>
                    <strong>Expert Advice:</strong> Knowledgeable staff to guide
                    material selection.
                  </li>
                  <li>
                    <strong>Wide Range of Plumbing Items:</strong> From pipes to
                    fittings.
                  </li>
                  <li>
                    <strong>Trusted Contractor Network:</strong> We connect you
                    with skilled professionals.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">Location</h3>
                <p>
                  We operate from two locations: Chunikhel, Budhanilkantha (Ward
                  13) & Sundarbasti, Budhanilkantha (Ward 8).
                </p>

                <h3 className="text-xl font-semibold mt-4">
                  Contact Information
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Chunikhel, Budhanilkantha-13 — Phone: 9841844331, 9851086724
                  </li>
                  <li>
                    Sundar Basti, Budhanilkantha-8 — Phone: 9851086724,
                    9765989009
                  </li>
                </ul>
                <p className="text-blue-800 hover:underline">
                  Email: tbrothersenterprises3@gmail.com
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          onClick={() => toggleCard(2)}
        >
          <img
            src={consultancy}
            alt="C.S. Consultancy & Construction Pvt. Ltd"
            className="w-60 h-60 object-cover rounded-lg mb-4 md:mb-0 md:mr-8"
          />
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              C.S. Consultancy & Construction Pvt. Ltd
            </h2>

            <p className="text-gray-700 text-base leading-relaxed">
              <strong> Introduction: </strong> C.S. Consultancy & Construction
              Pvt. Ltd. is a trusted name in the construction and consultancy
              industry, offering comprehensive services tailored to meet the
              diverse needs of our clients. With a commitment to excellence,
              innovation, and customer satisfaction, we provide end-to-end
              solutions for residential, commercial, and industrial projects.
            </p>

            {/* Dropdown Section */}
            {openCard === 2 && (
              <div className="mt-4 space-y-4 text-gray-700">
                <h3 className="text-lg font-medium mt-2">
                  Services Available:
                </h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    <strong>Construction Management:</strong> Planning,
                    scheduling, budgeting, and supervision.
                  </li>
                  <li>
                    <strong>Architectural Design:</strong> Innovative and
                    functional designs.
                  </li>
                  <li>
                    <strong>Structural Engineering:</strong> Analysis, design,
                    and evaluation.
                  </li>
                  <li>
                    <strong>Interior Design:</strong> Aesthetic yet functional
                    spaces.
                  </li>
                  <li>
                    <strong>Project Consultancy:</strong> Feasibility studies,
                    site selection, and compliance support.
                  </li>
                  <li>
                    <strong>Retrofitting, Renovation & Remodeling:</strong>{" "}
                    Transforming outdated spaces.
                  </li>
                </ol>

                <h3 className="text-xl font-semibold mt-4">Location</h3>
                <p>
                  Headquartered in Kathmandu, Nepal, we are strategically
                  located to serve clients across the region.
                </p>

                <h3 className="text-xl font-semibold mt-4">
                  Contact Information
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Chunikhel, Budhanilkantha-13 — Phone: 9841844331, 9851086724
                  </li>
                  <li>Sundar Basti, Budhanilkantha-8 — Phone: 9803096348</li>
                </ul>
                <p className="text-blue-800 hover:underline">
                  Email: csccpvtltd@gmail.com
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerDiscrip;
