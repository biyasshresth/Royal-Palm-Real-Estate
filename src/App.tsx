// src/App.tsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Login from "./components/LogIn";
import "./App.css";
import Faq from "./components/Faq";
import NewsUpdate from "./components/NewsBlogs/PlotUpdate";
import BlogPage from "./components/NewsBlogs/BlogPage";
import HouseUpdate from "./components/NewsBlogs/HouseUpdate";
import NewsblogsPage from "./components/NewsBlogs/NewsblogsPage";
import TermsPolicy from "./components/TermsPolicy";
import PrivacyPolicy from "./components/PrivacyPolicy";
import DataDeletion from "./components/DataDeletion";
import Contact from "./components/Contact";
import PlotUpdate from "./components/NewsBlogs/PlotUpdate";
import OurTeam from "./components/OurTeam";
import PartnerDiscrip from "./components/PartnersDiscrip";
import Sell from "./components/Sell";
import PropertySales from "./components/PropertySales";
import MarketAnalysis from "./components/MarketAnalysis";
import MortageService from "./components/MortageService";
import PropMgnt from "./components/PropMgnt";
import InvestmentConsult from "./components/InvestmentConsult";
import BuyPropertyOption from "./components/BuyPropertyOption";
import BuyLand from "./components/BuyLand";
import Registration from "./components/Registration";

const AppContent: React.FC<{ isLoggedIn: boolean; setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>> }> = ({
  isLoggedIn,
  setIsLoggedIn,
}) => {
  const location = useLocation();

  const hideFooterOn = [
    "/blog-page",
  ];

  const shouldHideFooter = hideFooterOn.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <div className="flex flex-col min-h-full">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/NewsUpdate" element={<NewsUpdate />} />
          <Route path="/house-update" element={<HouseUpdate />} />
          <Route path="/newsblogs-page" element={<NewsblogsPage />} />
          <Route path="/blog-page" element={<BlogPage />} />
          <Route path="/terms-policy" element={<TermsPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/data-deletion" element={<DataDeletion />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/plot-update" element={<PlotUpdate />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/partner-discrip" element={<PartnerDiscrip />} />
          <Route path="/sell-property" element={<Sell />} />
          <Route path="/property-sales" element={<PropertySales />} />
          <Route path="/market-analysis" element={<MarketAnalysis />} />
          <Route path="/mortage-service" element={<MortageService />} />
          <Route path="/property-mgnt" element={<PropMgnt />} />
          <Route path="/investment-consult" element={<InvestmentConsult />} />
          <Route path="/buyproperty-option" element={<BuyPropertyOption />} />
          <Route path="/buy-land" element={<BuyLand />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </main>

      {/* ✅ Conditional Footer */}
      {!shouldHideFooter && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <Router>
      <AppContent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </Router>
  );
};

export default App;
