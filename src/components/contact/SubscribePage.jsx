import React, { useState } from 'react';
import styles from './ContactPages.module.css';

const SubscribePage = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    interests: [],
    frequency: 'monthly'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData(prevData => ({
        ...prevData,
        interests: [...prevData.interests, value]
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        interests: prevData.interests.filter(interest => interest !== value)
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Subscription submitted:', formData);
    setSubmitted(true);
    // Reset form after submission
    setFormData({
      email: '',
      firstName: '',
      lastName: '',
      interests: [],
      frequency: 'monthly'
    });
  };

  return (
    <div className={styles.contactPageContainer}>
      <div className={styles.contactHeader}>
        <h1>Subscribe to Our Newsletter</h1>
        <p>Stay updated with the latest news, product releases, and security insights</p>
      </div>

      {submitted ? (
        <div className={styles.successMessage}>
          <h2>Thank you for subscribing!</h2>
          <p>You've been added to our mailing list and will start receiving updates soon.</p>
          <button 
            className={styles.newInquiryButton}
            onClick={() => setSubmitted(false)}
          >
            Subscribe another email
          </button>
        </div>
      ) : (
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
            />
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Your first name"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Your last name"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Interests (Select all that apply)</label>
            <div className={styles.checkboxGroup}>
              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  name="interests"
                  value="product-updates"
                  checked={formData.interests.includes('product-updates')}
                  onChange={handleCheckboxChange}
                />
                Product Updates
              </label>
              
              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  name="interests"
                  value="security-news"
                  checked={formData.interests.includes('security-news')}
                  onChange={handleCheckboxChange}
                />
                Security News & Trends
              </label>
              
              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  name="interests"
                  value="case-studies"
                  checked={formData.interests.includes('case-studies')}
                  onChange={handleCheckboxChange}
                />
                Case Studies & Success Stories
              </label>
              
              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  name="interests"
                  value="events"
                  checked={formData.interests.includes('events')}
                  onChange={handleCheckboxChange}
                />
                Events & Webinars
              </label>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="frequency">Email Frequency</label>
            <select
              id="frequency"
              name="frequency"
              value={formData.frequency}
              onChange={handleChange}
            >
              <option value="weekly">Weekly</option>
              <option value="biweekly">Bi-weekly</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
            </select>
          </div>

          <button type="submit" className={styles.submitButton}>
            Subscribe Now
          </button>
          
          <p className={styles.privacyNote}>
            By subscribing, you agree to our <a href="/privacy-policy">Privacy Policy</a>. 
            You can unsubscribe at any time.
          </p>
        </form>
      )}

      <div className={styles.contactInfo}>
        <h3>Why Subscribe?</h3>
        <ul className={styles.benefitsList}>
          <li>Get early access to product announcements</li>
          <li>Receive security tips and best practices</li>
          <li>Stay informed about industry trends</li>
          <li>Learn about upcoming events and webinars</li>
        </ul>
      </div>
    </div>
  );
};

export default SubscribePage;