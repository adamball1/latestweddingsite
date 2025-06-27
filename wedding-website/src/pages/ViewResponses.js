import "./ViewResponses.css";

import React, { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

import { db } from "../firebase";

function ViewResponses() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === "test1234") {
      setIsAuthenticated(true);
      fetchResponses();
    } else {
      setError("Incorrect password. Please try again.");
      setPassword("");
    }
  };

  const fetchResponses = async () => {
    setLoading(true);
    setError(null);

    try {
      const q = query(
        collection(db, "responses"),
        orderBy("submittedAt", "desc")
      );
      const querySnapshot = await getDocs(q);

      const responsesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setResponses(responsesData);
    } catch (error) {
      console.error("Error fetching responses:", error);
      setError("Failed to load responses. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleString();
  };

  const getAttendanceStatus = (attending) => {
    if (attending === "yes") return "✅ Attending";
    if (attending === "no") return "❌ Not Attending";
    return "❓ Unknown";
  };

  if (!isAuthenticated) {
    return (
      <div className="view-responses">
        <div className="auth-container">
          <div className="auth-form">
            <h2>View Responses</h2>
            <p>Please enter the password to view RSVP responses.</p>

            {error && <div className="alert alert-error">{error}</div>}

            <form onSubmit={handlePasswordSubmit}>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                />
              </div>
              <button type="submit" className="submit-btn">
                Access Responses
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="view-responses">
      <div className="responses-header">
        <h1>RSVP Responses</h1>
        <button
          onClick={fetchResponses}
          className="refresh-btn"
          disabled={loading}
        >
          {loading ? "Loading..." : "Refresh"}
        </button>
      </div>

      {error && <div className="alert alert-error">{error}</div>}

      {loading ? (
        <div className="loading">Loading responses...</div>
      ) : (
        <div className="responses-container">
          {responses.length === 0 ? (
            <div className="no-responses">
              <p>No RSVP responses found.</p>
            </div>
          ) : (
            <div className="table-container">
              <table className="responses-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Attending</th>
                    <th>Guest Count</th>
                    <th>Dietary Restrictions</th>
                    <th>Message</th>
                    <th>Submitted</th>
                  </tr>
                </thead>
                <tbody>
                  {responses.map((response) => (
                    <tr key={response.id}>
                      <td>{response.name || "N/A"}</td>
                      <td>{response.email || "N/A"}</td>
                      <td>{getAttendanceStatus(response.attending)}</td>
                      <td>{response.guestCount || "N/A"}</td>
                      <td>
                        {response.dietaryRestrictions ? (
                          <span className="dietary-restrictions">
                            {response.dietaryRestrictions}
                          </span>
                        ) : (
                          "None"
                        )}
                      </td>
                      <td>
                        {response.message ? (
                          <span className="message">
                            {response.message.length > 50
                              ? `${response.message.substring(0, 50)}...`
                              : response.message}
                          </span>
                        ) : (
                          "None"
                        )}
                      </td>
                      <td>{formatDate(response.submittedAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="summary">
            <h3>Summary</h3>
            <div className="summary-stats">
              <div className="stat">
                <span className="stat-label">Total Responses:</span>
                <span className="stat-value">{responses.length}</span>
              </div>
              <div className="stat">
                <span className="stat-label">Attending:</span>
                <span className="stat-value">
                  {responses.filter((r) => r.attending === "yes").length}
                </span>
              </div>
              <div className="stat">
                <span className="stat-label">Not Attending:</span>
                <span className="stat-value">
                  {responses.filter((r) => r.attending === "no").length}
                </span>
              </div>
              <div className="stat">
                <span className="stat-label">Total Guests:</span>
                <span className="stat-value">
                  {responses
                    .filter((r) => r.attending === "yes")
                    .reduce(
                      (total, r) => total + (parseInt(r.guestCount) || 1),
                      0
                    )}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewResponses;
