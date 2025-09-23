import React, { useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Rajiv from "../assets/Rajiv.jpg";
import Panda from "../assets/Panda.png";
import Anil from "../assets/Anil.png";
import Biyas from "../assets/biyas.jpg";

// Define a type for team members
interface TeamMember {
  name: string;
  role: string;
  image: string;
  description?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Anil Shrestha",
    role: "CEO Founder",
    image: Anil,
    description:
      "Anil Shrestha is the visionary leader and Chief Executive Officer of our company. With a strong background in information technology. Under his leadership, the company has expanded its services in software development.",
  },
  {
    name: "Anil Shrestha",
    role: "Creative Leader",
    image: "https://via.placeholder.com/150",
    description:
      "As our Creative Leader, Anil Shrestha brings imagination, innovation, and design expertise to the heart of our company. With a passion for storytelling and visual excellence, he guides the creative direction of projects.",
  },
  {
    name: "Asmit Khanal",
    role: "Web Developer",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Rajiv Shrestha",
    role: "Flutter Developer",
    image: Rajiv,
    description:
      "Rajiv Shrestha is a experienced Flutter developer in our company, who builds cross-platform mobile applications (iOS & Android) using Flutter, which is a UI toolkit by Google. He use Dart programming language.",
  },
  {
    name: "Sanjeet Shrestha",
    role: "Backend Developer",
    image: "https://via.placeholder.com/150",
    description:
      "Sanjeet Shrestha is backend developer who builds and maintains the server-side logic, databases, and APIs that power web and mobile applications. They make sure data flows correctly between the server, database, and client (frontend).",
  },
  {
    name: "Sandesh Shrestha",
    role: "Web Designer",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Krity Bade",
    role: "Reactjs FrontEnd Developer",
    image: Panda,
    description:
      "Krity Bade is ReactJS Frontend Developer who builds the user interface (UI) and client-side logic of web applications using ReactJS, a popular JavaScript library for building interactive UIs.",
  },
  {
    name: "Biyas Shrestha",
    role: "Reactjs FrontEnd Developer",
    image: Biyas,
    description:
      "Biyas Shrestha is ReactJS Frontend Developer who builds the user interface (UI) and client-side logic of web applications using ReactJS, a popular JavaScript library for building interactive UIs.",
  },
];

const OurTeam: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-gray-200 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-12">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center"
            >
              {/* Image */}
              <div className="w-28 h-28 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border-4 border-orange-200"
                />
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold">{member.name}</h3>
              {member.description && (
                <p className="text-gray-700">{member.description}</p>
              )}
              <p className="font-medium text-gray-800">{member.role}</p>

              {/* Social Icons */}
              <div className="flex space-x-4 mt-4 text-gray-600">
                <a href="#" aria-label="Facebook" title="Facebook">
                  <FaFacebookF className="hover:text-orange-500 transition" />
                </a>
                <a href="#" aria-label="Twitter" title="Twitter">
                  <FaTwitter className="hover:text-orange-500 transition" />
                </a>
                <a href="#" aria-label="Instagram" title="Instagram">
                  <FaInstagram className="hover:text-orange-500 transition" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
