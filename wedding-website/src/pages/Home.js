import "./Home.css";

import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="home-hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to the Wedding of</h1>
          <h2 className="hero-names">Adam & Rebecca</h2>
          <p className="hero-date">Save the Date</p>
          <div className="hero-details">
            <p>We're excited to celebrate our special day with you!</p>
          </div>
        </div>
      </div>

      <div className="home-content">
        <section className="welcome-section">
          <h3>Our Story</h3>
          <p>
            We're thrilled to invite you to share in our joy as we begin this
            new chapter together. Your presence would mean the world to us on
            our special day.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Home;
