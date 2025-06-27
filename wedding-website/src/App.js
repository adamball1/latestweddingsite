import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import React from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
