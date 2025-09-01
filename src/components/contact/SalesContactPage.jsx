import React, { useState } from 'react';
import styles from './ContactPages.module.css';

const SalesContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    productInterest: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      productInterest: '',
      message: ''
    });
  };

  return (
    <div className={styles.contactPageContainer}>
      <div className={styles.contactHeader}>
        <h1>Sales Inquiry</h1>
        <p>Get in touch with our sales team to discuss your security needs</p>
      </div>

      {submitted ? (
        <div className={styles.successMessage}>
          <h2>Thank you for your inquiry!</h2>
          <p>Our sales team will contact you shortly.</p>
          <button
            className={styles.newInquiryButton}
            onClick={() => setSubmitted(false)}
          >
            Submit another inquiry
          </button>
        </div>
      ) : (
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

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
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="productInterest">Product Interest</label>
            <select
              id="productInterest"
              name="productInterest"
              value={formData.productInterest}
              onChange={handleChange}
            >
              <option value="">Select a product category</option>
              <option value="network-cameras">Network Cameras</option>
              <option value="ptz-cameras">PTZ Cameras</option>
              <option value="nvrs">NVRs</option>
              <option value="access-control">Access Control</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Please describe your requirements"
              rows="5"
            ></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>
            Submit Inquiry
          </button>
        </form>
      )}

      <div className={styles.contactInfo}>
        <h3>Contact our sales team directly</h3>
        <p>
          <strong>Email:</strong> akvistion.et@gmail.com
        </p>
        <p>
          <strong>Phone:</strong> 0950353535/0950363636
        </p>
        <p>
          <strong>Hours:</strong> Mon-Fri: 9:00 AM - 6:00 PM Sat: 10:00 AM -
          2:00 PM
        </p>
      </div>
    </div>
  );
};

export default SalesContactPage;