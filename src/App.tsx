// src/App.tsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Login from "./components/LogIn";
import "./App.css";
import Faq from "./components/Faq";
import NewsUpdate from "./components/NewsBlogs/PlotUpdate";
import HouseUpdate from "./components/NewsBlogs/HouseUpdate";
import NewsblogsPage from "./components/NewsBlogs/NewsblogsPage";
import TermsPolicy from "./components/TermsPolicy";
import PrivacyPolicy from "./components/PrivacyPolicy";
import DataDeletion from "./components/DataDeletion";
import Contact from "./components/Contact";
import PlotUpdate from "./components/NewsBlogs/PlotUpdate";
import OurTeam from "./components/OurTeam";
import PartnerDiscrip from "./components/PartnersDiscrip";
import Buy from "./components/Buy";
import Sell from "./components/Sell";
import PropertySales from "./components/PropertySales";
import MarketAnalysis from "./components/MarketAnalysis";
import MortageService from "./components/MortageService";
import PropMgnt from "./components/PropMgnt";
import InvestmentConsult from "./components/InvestmentConsult";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <Router>
      <div className="flex flex-col min-h-full  ">
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={<Login setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/NewsUpdate" element={<NewsUpdate />} />
            <Route path="/HouseUpdate" element={<HouseUpdate />} />
            <Route path="/NewsblogsPage" element={<NewsblogsPage />} />
            <Route path="/TermsPolicy" element={<TermsPolicy />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/DataDeletion" element={<DataDeletion />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/PlotUpdate" element={<PlotUpdate />} />
            <Route path="/Faq" element={<Faq />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/PartnerDiscrip" element={<PartnerDiscrip />} />
            <Route path="/Buy" element={<Buy />} />
            <Route path="/Sell" element={<Sell />} />
            <Route path="/PropertySales" element={<PropertySales />} />
            <Route path="/MarketAnalysis" element={<MarketAnalysis />} />
            <Route path="/MortageService" element={<MortageService />} />
            <Route path="/PropMgnt" element={<PropMgnt />} />
            <Route path="/InvestmentConsult" element={<InvestmentConsult />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
