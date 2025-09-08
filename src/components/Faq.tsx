import React, { useState } from "react";

type FaqItem = { id: number; q: string; a: string };

const faqs: FaqItem[] = [
  { id: 1, q: "How do I buy a property?", a: "Browse listings and contact us to start the process." },
  { id: 2, q: "How do I sell my property?", a: "List your property and our team will guide you." },
  { id: 3, q: "Can I rent a property?", a: "Yes, we have multiple rental properties by location/budget." },
  { id: 4, q: "How do I contact support?", a: "Use the Contact page or email support@royalpalm.com." },
];

const Faq: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className="max-w-4xl mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

      <ul className="space-y-4">
        {faqs.map((faq) => {
          const expanded = openId === faq.id;
          const panelId = `faq-panel-${faq.id}`;

          return (
            <li key={faq.id}>
              <button aria-expanded="true"
                type="button"
                className="w-full text-left flex justify-between items-center text-lg font-medium focus:outline-none focus:ring-2 focus:ring-orange-500"
                onClick={() => toggle(faq.id)}
                aria-controls={panelId}
              >
                {faq.q}
                <span aria-hidden="true">{expanded ? "−" : "+"}</span>
              </button>

              <div
                id={panelId}
                hidden={!expanded}
                className="mt-2 text-gray-700"
              >
                {faq.a}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Faq;
