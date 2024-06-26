import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
//import { HashRouter } from "react-router-dom";
import Home from "./pages/homePage/Home";
import Landing from "./pages/landingPage/sample/landing";
import AboutSection from "./pages/landingPage/sample/dialog/AboutSection";
import FeatureSection from "./pages/landingPage/sample/dialog/feature";
import { ContactUs } from "./popup/contact/contact";
import Team from "./pages/landingPage/sample/dialog/team";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/feature" element={<FeatureSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/student" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
