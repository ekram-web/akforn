import React, { useState } from "react";
import styles from "./ContactPages.module.css";

const TechnicalSupportPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    productModel: "",
    serialNumber: "",
    issueType: "",
    description: "",
    attachFile: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      attachFile: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Support ticket submitted:", formData);
    setSubmitted(true);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      productModel: "",
      serialNumber: "",
      issueType: "",
      description: "",
      attachFile: null,
    });
  };

  return (
    <div className={styles.contactPageContainer}>
      <div className={styles.contactHeader}>
        <h1>Technical Support</h1>
        <p>
          Need help with your AK Vision products? Our technical team is here to
          assist you.
        </p>
      </div>

      {submitted ? (
        <div className={styles.successMessage}>
          <h2>Support ticket submitted!</h2>
          <p>
            Our technical team will review your issue and get back to you as
            soon as possible.
          </p>
          <p>
            Your ticket reference number:{" "}
            <strong>#{Math.floor(Math.random() * 900000) + 100000}</strong>
          </p>
          <button
            className={styles.newInquiryButton}
            onClick={() => setSubmitted(false)}
          >
            Submit another ticket
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

          <div className={styles.formRow}>
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

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="productModel">Product Model *</label>
              <input
                type="text"
                id="productModel"
                name="productModel"
                value={formData.productModel}
                onChange={handleChange}
                required
                placeholder="e.g. AK-NC4256"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="serialNumber">Serial Number</label>
              <input
                type="text"
                id="serialNumber"
                name="serialNumber"
                value={formData.serialNumber}
                onChange={handleChange}
                placeholder="Found on the product label"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="issueType">Issue Type *</label>
            <select
              id="issueType"
              name="issueType"
              value={formData.issueType}
              onChange={handleChange}
              required
            >
              <option value="">Select issue type</option>
              <option value="installation">Installation Problem</option>
              <option value="connectivity">Connectivity Issue</option>
              <option value="firmware">Firmware/Software</option>
              <option value="hardware">Hardware Malfunction</option>
              <option value="configuration">Configuration Help</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="description">Issue Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="Please describe your issue in detail. Include any error messages and steps to reproduce the problem."
              rows="5"
            ></textarea>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="attachFile">Attach File (Optional)</label>
            <input
              type="file"
              id="attachFile"
              name="attachFile"
              onChange={handleFileChange}
              className={styles.fileInput}
            />
            <p className={styles.fileNote}>
              Max file size: 10MB. Supported formats: JPG, PNG, PDF
            </p>
          </div>

          <button type="submit" className={styles.submitButton}>
            Submit Support Ticket
          </button>
        </form>
      )}

      <div className={styles.contactInfo}>
        <h3>Other Support Options</h3>
        <div className={styles.supportOptions}>
          <div className={styles.supportOption}>
            <h4>Knowledge Base</h4>
            <p>
              Browse our <a href="/contact/faq">Knowledge Base</a> for answers
              to common questions.
            </p>
          </div>
          <div className={styles.supportOption}>
            <h4>Phone Support</h4>
            <p>Technical Support: 0950353535/0950363636</p>
            <p>Hours: Mon-Fri: 9:00 AM - 6:00 PM Sat: 10:00 AM - 2:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSupportPage;
