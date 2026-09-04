
import React, { useState, useEffect } from 'react';
import styles from './ContactPages.module.css';
import apiClient from '../../api/apiClient'; // <-- Import the API client

// --- MAIN FAQ PAGE COMPONENT (FINAL INTEGRATED VERSION) ---
const FaqChatPage = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  // --- STATE for dynamic FAQ data ---
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- DATA FETCHING for FAQs ---
  useEffect(() => {
      setLoading(true);
      setError(null);
      apiClient.get('/faqs')
          .then(response => {
              setFaqs(response.data);
          })
          .catch(err => {
              setError('Could not load FAQs. Please try again later.');
              console.error("Fetch FAQ Error:", err);
          })
          .finally(() => {
              setLoading(false);
          });
  }, []); // The empty array ensures this effect runs only once

  // --- Handler for the accordion functionality (no change needed) ---
  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  // --- Main Render Function ---
  const renderFaqContent = () => {
      if (loading) {
          return <p style={{textAlign: 'center', padding: '2rem'}}>Loading FAQs...</p>;
      }
      if (error) {
          return <p style={{textAlign: 'center', padding: '2rem', color: 'red'}}>{error}</p>;
      }
      if (faqs.length === 0) {
          return <p style={{textAlign: 'center', padding: '2rem'}}>No frequently asked questions have been added yet.</p>;
      }

      return (
          <div className={styles.faqContainer}>
              {faqs.map((faq, index) => (
                  <div key={faq.id} className={styles.faqItem}>
                      <div className={styles.faqQuestion} onClick={() => toggleQuestion(index)}>
                          <h3>{faq.question}</h3>
                          <span className={styles.faqToggle}>{activeQuestion === index ? "−" : "+"}</span>
                      </div>
                      {activeQuestion === index && (
                          <div className={styles.faqAnswer}>
                              <p>{faq.answer}</p>
                          </div>
                      )}
                  </div>
              ))}
          </div>
      );
  };

  return (
    <div className={styles.contactPageContainer}>
      <div className={styles.contactHeader}>
        {/* The title now reflects the page's focused purpose */}
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about our products and services.</p>
      </div>

      <div className={styles.tabContent}>
        {renderFaqContent()}
      </div>

      {/* "Still Need Help?" section (static, no change needed) */}
      <div className={styles.contactInfo}>
        <h3>Still Need Help?</h3>
        <p>
          If you can't find the answer you're looking for, please contact us
          through one of our other support channels:
        </p>
        <div className={styles.supportLinks}>
          <a href="/contact/technical" className={styles.supportLink}>Technical Support</a>
          <a href="/contact/sales" className={styles.supportLink}>Sales Support</a>
          <a href="tel:0950353535/0950363636" className={styles.supportLink}>
            Call Us: 0950353535/0950363636
          </a>
        </div>
      </div>
    </div>
  );
};

export default FaqChatPage;