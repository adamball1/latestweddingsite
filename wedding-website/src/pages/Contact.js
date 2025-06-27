import "./Contact.css";

import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you!</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <div className="contact-details">
            <div className="contact-item">
              <h4>Adam</h4>
              <p>Email: adam@example.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
            <div className="contact-item">
              <h4>Rebecca</h4>
              <p>Email: rebecca@example.com</p>
              <p>Phone: (555) 987-6543</p>
            </div>
          </div>

          <div className="contact-note">
            <h4>Wedding Coordinator</h4>
            <p>
              For urgent wedding-related questions, please contact our wedding
              coordinator:
            </p>
            <p>Email: coordinator@example.com</p>
            <p>Phone: (555) 456-7890</p>
          </div>
        </div>

        <div className="contact-form-container">
          <h3>Send us a Message</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
