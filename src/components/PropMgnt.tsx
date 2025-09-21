import React, { useEffect } from "react";
import ButtonPic from "../assets/Buttonpic.png";

interface Service {
  icon: string;
  title: string;
  desc: string;
  color: string;
}

const PropMgnt: React.FC = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services: Service[] = [
    {
      icon: "💰",
      title: "Rent Collection",
      desc: "This slide is fully editable. Change it according to your requirements and catches your viewers consideration.",
      color: "text-red-600",
    },
    {
      icon: "📋",
      title: "Utility Payments",
      desc: "This slide is fully editable. Change it according to your requirements and catches your viewers consideration.",
      color: "text-orange-500",
    },
    {
      icon: "💵",
      title: "Finance & Account",
      desc: "This slide is fully editable. Change it according to your requirements and catches your viewers consideration.",
      color: "text-green-600",
    },
    {
      icon: "📃",
      title: "Property Listing",
      desc: "This slide is fully editable. Change it according to your requirements and catches your viewers consideration.",
      color: "text-orange-600",
    },
    {
      icon: "🛠️",
      title: "Property Repair",
      desc: "This slide is fully editable. Change it according to your requirements and catches your viewers consideration.",
      color: "text-orange-400",
    },
    {
      icon: "🔄",
      title: "Reinvestment",
      desc: "This slide is fully editable. Change it according to your requirements and catches your viewers consideration.",
      color: "text-green-500",
    },
  ];

  return (
    <>
      {/* Container for services */}
      <div className="max-w-7xl mx-auto p-6 bg-white">
        <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Property Management Services
        </h1>

        {/* Services list */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {services.map(({ icon, title, desc, color }, i) => (
            <div key={i} className="flex items-start space-x-3">
              {/* Icon circle */}
              <div className={`text-xl mt-1 ${color}`}>{icon}</div>

              <div>
                <h3 className="font-semibold text-gray-800 text-sm">{title}</h3>
                <p className="text-xs italic text-gray-600 leading-tight max-w-xs">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* image below the services */}
      <div className="w-full">
        <img
          src={ButtonPic}
          alt="Button"
          className="w-1/2 h-72 object-cover mx-auto"
        />
      </div>
    </>
  );
};

export default PropMgnt;
