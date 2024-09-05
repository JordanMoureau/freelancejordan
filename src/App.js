import "./styles.css";
import Footer from "./components/Footer";

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home.js";
import MyWork from "./pages/MyWork.js";
import AboutMe from "./pages/AboutMe.js";
import Contact from "./pages/Contact.js";
import Journal from "./pages/Journal.js";
import PortfolioDetail from "./PortfolioDetail.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mywork" element={<MyWork />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/portfolio/:id" element={<PortfolioDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;