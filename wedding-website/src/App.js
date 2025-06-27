import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import RSVP from "./pages/RSVP";
import React from "react";
import ViewResponses from "./pages/ViewResponses";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rsvp" element={<RSVP />} />
          <Route path="/admin" element={<ViewResponses />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
