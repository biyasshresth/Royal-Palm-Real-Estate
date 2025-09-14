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

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
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
          </Routes>
        </main>
     
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
