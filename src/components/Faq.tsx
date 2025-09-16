import React, { useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import logo from "../assets/logo.svg";

 
interface FAQ {
  id: number;
  q: string;
  a: string;
  tags: string[];
}

const Faq: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      id: 1,
      q: "What are your business hours?",
      a: "We’re open Sunday–Friday, 10:00 AM – 5:00 PM. Site visits can be scheduled between 10:00 AM – 5:00 PM. For weekend launches or handovers, we announce extended hours in advance.",
      tags: ["Site Visits", "Sales Desk", "Handover"],
    },
    {
      id: 2,
      q: "Can I track my order?",
      a: "Yes. If you booked a plot/unit, use your booking ID to track milestones like document verification, payment schedule, and handover readiness from your dashboard.",
      tags: ["Booking", "Payment Plan", "Milestones"],
    },
    {
      id: 3,
      q: "How do I reset my password?",
      a: "Click “Forgot Password” on the login page, enter your registered email/phone, and follow the link/OTP we send. For account security, the link expires in 15 minutes.",
      tags: ["Account", "Security", "Support"],
    },
    {
      id: 4,
      q: "Do you offer international shipping?",
      a: "Not applicable for properties—however, we support international buyers with remote booking, KYC, and video site tours. All documents are shared digitally and couriered on request.",
      tags: ["NRI/International", "KYC", "Remote Tour"],
    },
    {
      id: 5,
      q: "What documents are required to buy land?",
      a: "Typically: Title Deed, Parcel Map, Tax Clearance, Seller’s ID, and a No-Encumbrance Certificate. Local requirements may add revenue records and a verified sale agreement.",
      tags: ["Title Deed", "Tax Clearance", "NEC"],
    },
    {
      id: 6,
      q: "Are utilities and road access available?",
      a: "Yes on our serviced plots: graded road access, marked plot boundaries, drainage, and utility points as per the project brochure. Verify availability phase-wise in your dashboard.",
      tags: ["Road Access", "Utilities", "Serviced Plots"],
    },
  ];

  const filteredFaqs = useMemo(() => {
    const ql = query.trim().toLowerCase();
    if (!ql) return faqs;
    return faqs.filter(
      (f) =>
        f.q.toLowerCase().includes(ql) ||
        f.a.toLowerCase().includes(ql) ||
        f.tags.some((t) => t.toLowerCase().includes(ql))
    );
  }, [query, faqs]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-orange-50">
      {/* ORANGE background layers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-4 top-4 mx-auto h-[360px] max-w-6xl rounded-3xl border border-orange-200 bg-gradient-to-b from-orange-100 to-orange-200"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 rounded-t-[3rem] bg-orange-500"
      />

      {/* Content wrapper */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 pb-24 pt-16 sm:px-6 md:pt-20">
        {/* Title + Logo */}
        <div className="mb-2 flex items-center justify-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="h-20 w-20 select-none"
            draggable="false"
          />
          <h1 className="text-center text-3xl font-semibold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h1>
        </div>

        {/* Subtitle */}
        <p className="mb-6 text-center text-sm text-gray-500">
          Have Question? We are here to help
        </p>

        {/* Search bar */}
        <div className="mx-auto mb-8 flex max-w-xl items-center rounded-full border border-orange-200 bg-white px-4 py-2 shadow-lg">
          <input
            type="text"
            placeholder="Enter keyword"
            value={query}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setQuery(e.target.value)
            }
            className="w-full bg-transparent px-1 text-sm text-gray-700 placeholder-gray-400 outline-none"
            aria-label="Search FAQs"
          />
          <FiSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {filteredFaqs.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-xl border border-orange-100 bg-white shadow-sm"
              >
                <button aria-expanded={true}
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <div className="min-w-0">
                    <p className="truncate text-[15px] font-medium text-gray-800">
                      {item.q}
                    </p>
                    {/* Property-related tags */}
                    <div className="mt-2 flex flex-wrap gap-2">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center rounded-full border border-orange-200 px-2.5 py-0.5 text-xs font-medium text-orange-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Toggle icon */}
                  <IoIosArrowDropdownCircle
                    size={28}
                    className={`ml-4 flex-none text-orange-600 transform transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Dropdown content */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-sm leading-6 text-gray-600">
                    <p>{item.a}</p>

                    <div className="mt-3 grid grid-cols-1 gap-2 text-xs text-gray-500 sm:grid-cols-3">
                      <div className="rounded-lg bg-orange-50 px-3 py-2 ring-1 ring-inset ring-orange-100">
                        <span className="font-medium text-orange-700">
                          Category:
                        </span>{" "}
                        {item.tags[0] || "General"}
                      </div>
                      <div className="rounded-lg bg-orange-50 px-3 py-2 ring-1 ring-inset ring-orange-100">
                        <span className="font-medium text-orange-700">
                          Updated:
                        </span>{" "}
                        This month
                      </div>
                      <div className="rounded-lg bg-orange-50 px-3 py-2 ring-1 ring-inset ring-orange-100">
                        <span className="font-medium text-orange-700">
                          Contact:
                        </span>{" "}
                        contact@royalpalmrealestate.com.np
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="rounded-xl border border-orange-100 bg-white p-6 text-center text-sm text-gray-500">
              No results for “{query}”.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Faq;
