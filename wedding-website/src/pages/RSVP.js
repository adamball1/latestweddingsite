import "./RSVP.css";

import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { db } from "../firebase";

function RSVP() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "",
    guestCount: "",
    dietaryRestrictions: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Add timestamp and clean up the data
      const responseData = {
        ...formData,
        timestamp: serverTimestamp(),
        submittedAt: new Date().toISOString(),
      };

      // Remove empty fields for cleaner data
      Object.keys(responseData).forEach((key) => {
        if (responseData[key] === "" || responseData[key] === null) {
          delete responseData[key];
        }
      });

      // Save to Firestore
      const docRef = await addDoc(collection(db, "responses"), responseData);

      console.log("RSVP saved with ID: ", docRef.id);
      setSubmitStatus("success");

      // Reset form
      setFormData({
        name: "",
        email: "",
        attending: "",
        guestCount: "",
        dietaryRestrictions: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error("Error saving RSVP: ", error);
      setSubmitStatus("error");

      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rsvp">
      <div className="rsvp-hero">
        <div className="rsvp-content">
          <h1 className="rsvp-title">RSVP</h1>
          <p className="rsvp-subtitle">Please respond by [Date]</p>
        </div>
      </div>

      <div className="rsvp-form-container">
        <form className="rsvp-form" onSubmit={handleSubmit}>
          {submitStatus === "success" && (
            <div className="alert alert-success">
              Thank you for your RSVP! We've received your response and will be
              in touch soon.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="alert alert-error">
              Sorry, there was an error submitting your RSVP. Please try again
              or contact us directly.
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label htmlFor="attending">Will you be attending? *</label>
            <select
              id="attending"
              name="attending"
              value={formData.attending}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            >
              <option value="">Please select...</option>
              <option value="yes">Yes, I will attend</option>
              <option value="no">No, I cannot attend</option>
            </select>
          </div>

          {formData.attending === "yes" && (
            <>
              <div className="form-group">
                <label htmlFor="dietaryRestrictions">
                  Dietary Restrictions
                </label>
                <textarea
                  id="dietaryRestrictions"
                  name="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={handleChange}
                  placeholder="Please let us know about any dietary restrictions or allergies"
                  rows="3"
                  disabled={isSubmitting}
                />
              </div>
            </>
          )}

          <div className="form-group">
            <label htmlFor="message">Message (Optional)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any additional message you'd like to share"
              rows="4"
              disabled={isSubmitting}
            />
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit RSVP"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default RSVP;
