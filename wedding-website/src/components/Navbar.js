import "./Navbar.css";

import { Link, useLocation } from "react-router-dom";

import React from "react";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-logo">
            Adam & Rebecca
          </Link>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link
              to="/"
              className={`navbar-link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              HOME
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/faqs"
              className={`navbar-link ${
                location.pathname === "/faqs" ? "active" : ""
              }`}
            >
              FAQs
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/contact"
              className={`navbar-link ${
                location.pathname === "/contact" ? "active" : ""
              }`}
            >
              Contact
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/rsvp"
              className={`navbar-link ${
                location.pathname === "/rsvp" ? "active" : ""
              }`}
            >
              RSVP
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
