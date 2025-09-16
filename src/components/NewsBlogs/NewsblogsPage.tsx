import React, { FC } from "react";
import { Link } from "react-router-dom";
import Suburban from "../../assets/Suburban.png";
import Apartment from "../../assets/Apartment.png";
import BannerLand from "../../assets/BannerLand.png";
import PlanningPlot from "../../assets/PlanningPlot.png";
import DetachedHouse from "../../assets/DetachedHouse.png";
import FarmHouse from "../../assets/FarmHouse.png";
import RealestateStrategy from "../../assets/RealestateStrategy.png";
import Falts from "../../assets/Flats.png";
import Roadplot from "../../assets/Roadplot.png";


interface NewsArticle {
  id: number;
  title: string;
  date: string;
  author: string;
  description: string;
  image: string;
  link: string;
}

interface PropertySpotlight {
  title: string;
  location: string;
  details: string;
  price: string;
  image: string;
  link: string;
}

interface Insight {
  category: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const NewsblogsPage: FC = () => {
  const newsArticles: NewsArticle[] = [
    {
      id: 1,
      title: "Housing Prices Surge in Downtown Areas — What It Means for Buyers",
      date: "April 2, 2020",
      author: "S2 36hm Dae",
      description: "Driving river exerted by returns ero imperial area and a soverno",
      image: Suburban,
      link: "HouseUpdate",
    },
    {
      id: 2,
      title: "Top 5 Real Estate Investment Opportunities in Plots 2025",
      date: "March 28, 2003",
      author: "Jaha Smith",
      description: "Feedis reather emori larnth of the timoe-cho a times Fmnaab",
      image: BannerLand,
      link:"PlotUpdate",
    },
  ];

  const propertySpotlights: PropertySpotlight[] = [
    {
      title: "Modern Family Appartment",
      location: "San Franebazu Cal",
      details: "2 Bathrooms · 2 Bathrooms · 2,800 sqft",
      price: "$860,000",
      image: Apartment,
      link: "#",
    },
    {
      title: "Reasonable price plot",
      location: "New York HY",
      details: "Road attached · No Disturbance · 3,800 sqft",
      price: "$2,100,000",
      image: PlanningPlot,
      link: "#",
    },
    {
      title: "Modern Detached House",
      location: "New Oco TN",
      details: "4 Bathrooms · 2 Bathrooms · 1,800 sqft",
      price: "$430,000",
      image: DetachedHouse,
      link: "#",
    },
  ];

  const insights: Insight[] = [
    {
      category: "Market Insights",
      title: "The Rise of Farm House Living: Market Analysis 2025",
      description: "Hover to read more details about suburban trends...",
      image: FarmHouse,
      link: "#",
    },
    {
      category: "Investment & Financial Tips",
      title: "Top Real Estate Investment Strategies for Beginners",
      description: "Beginner strategies to maximize profits in real estate.",
      image: RealestateStrategy,
      link: "#",
    },
    {
      category: "Home & Lifestyle in flats",
      title: "Home Renovations That Increase Property Value",
      description: "Simple upgrades to boost your property’s value.",
      image: Falts,
      link: "#",
    },
    {
      category: "Road side/attached plots",
      title: "Best Suburbs for Families in New York City",
      description: "Discover the best neighborhoods for family living.",
      image: Roadplot,
      link: "#",
    },
  ];

  return (
    <div className="max-w-full px-0 pb-4">
      <div className="w-screen h-44 bg-gradient-to-r from-[#c0392b] to-[#d35400] text-white py-10 px-4">
        <div className="mb-4">
          <h1 className="text-5xl font-serif font-bold mb-4 mt-7 text-center">
            News & Blogs
          </h1>
          {/* Typewriter Effect */}
          <p className="text-lg font-mono">
          </p>
        </div>
      </div>

      <div className="items-center w-full px-40">
        {/* Top News Articles */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 mt-6">
          {newsArticles.map((article) => (
            <a
              href={article.link}
              key={article.id}
              className="block border rounded-lg overflow-hidden shadow-xl hover:border-gray-300 transition"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                <p className="text-gray-500 text-sm mb-2">{`${article.date} · ${article.author}`}</p>
                <p className="text-gray-700 mb-4">{article.description}</p>
                <Link
                  to={article.id === 1 ? "/HouseUpdate" : "/PlotUpdate"}
                  className="text-blue-600 font-semibold transform transition-transform duration-200 hover:scale-110"
                >
                  Read More
                </Link>
              </div>
            </a>
          ))}
        </div>

        {/* Property Spotlights */}
        <h2 className="text-3xl font-serif mb-6">Property Spotlights</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {propertySpotlights.map((property, idx) => (
            <a
              href={property.link}
              key={idx}
              className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-1">{property.title}</h3>
                <p className="text-gray-500 mb-1">{property.location}</p>
                <p className="text-gray-700 mb-2">{property.details}</p>
                <p className="font-bold mb-2">{property.price}</p>
                <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded">
                  View Property
                </button>
              </div>
            </a>
          ))}
        </div>

        {/* Insights */}
        <div className="grid md:grid-cols-2 gap-8">
          {insights.map((insight, idx) => (
            <a
              href={insight.link}
              key={idx}
              className="flex border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              {insight.image && (
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-1/3 object-cover"
                />
              )}
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-2">{insight.title}</h4>
                <p className="text-gray-700">{insight.description}</p>
                <span className="text-blue-600 font-semibold mt-2 block">
                  Read More
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsblogsPage;
