import "./FAQs.css";

import React, { useState } from "react";

function FAQs() {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "When and where is the wedding?",
      answer:
        "The wedding will take place on [Date] at [Venue Name] in [Location]. The ceremony begins at [Time] followed by the reception.",
    },
    {
      id: 2,
      question: "What should I wear?",
      answer:
        "We request semi-formal to formal attire. For women, cocktail dresses or dressy separates are perfect. For men, suits or sport coats with ties are appropriate.",
    },
    {
      id: 3,
      question: "Can I bring a plus one?",
      answer:
        "We have carefully planned our guest list and will indicate on your invitation if you have been given a plus one. Please respect our guest list as we have limited capacity.",
    },
    {
      id: 4,
      question: "Are children welcome?",
      answer:
        "While we love your little ones, we have chosen to make our wedding an adults-only celebration. We hope this advance notice means you can still attend and enjoy a relaxing evening with us.",
    },
    {
      id: 5,
      question: "What's the parking situation?",
      answer:
        "There is complimentary parking available at the venue. Valet parking will also be provided for your convenience.",
    },
    {
      id: 6,
      question: "Can I take photos during the ceremony?",
      answer:
        "We kindly ask that you refrain from taking photos during the ceremony. Our professional photographer will capture all the special moments, and we'll be happy to share the photos with you afterward.",
    },
    {
      id: 7,
      question: "What time should I arrive?",
      answer:
        "Please arrive 30 minutes before the ceremony start time to allow for seating and any last-minute preparations.",
    },
    {
      id: 8,
      question: "Is there a gift registry?",
      answer:
        "Your presence at our wedding is the greatest gift of all. However, if you wish to give a gift, we have registered at [Registry Information].",
    },
  ];

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="faqs">
      <div className="faqs-header">
        <h1>Frequently Asked Questions</h1>
        <p>Everything you need to know about our special day</p>
      </div>

      <div className="faqs-content">
        <div className="faqs-list">
          {faqData.map((item) => (
            <div key={item.id} className="faq-item">
              <button
                className={`faq-question ${
                  openItem === item.id ? "active" : ""
                }`}
                onClick={() => toggleItem(item.id)}
              >
                {item.question}
                <span className="faq-icon">
                  {openItem === item.id ? "−" : "+"}
                </span>
              </button>
              <div
                className={`faq-answer ${openItem === item.id ? "open" : ""}`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQs;
