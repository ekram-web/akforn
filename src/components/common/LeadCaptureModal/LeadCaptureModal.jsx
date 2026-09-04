import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import styles from "./LeadCaptureModal.module.css";

const LeadCaptureModal = ({ isOpen, onClose, initialIntent = "General Inquiry" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    intent: initialIntent,
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Auto-close after success
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          intent: initialIntent,
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose}>
          <XMarkIcon className={styles.closeIcon} />
        </button>

        {isSuccess ? (
          <div className={styles.successState}>
            <div className={styles.successIconWrapper}>✓</div>
            <h3>Request Received!</h3>
            <p>Our team will get back to you shortly regarding your {formData.intent}.</p>
          </div>
        ) : (
          <>
            <h2 className={styles.modalTitle}>How can we help?</h2>
            <p className={styles.modalSubtitle}>
              Fill out the form below and one of our security experts will be in touch.
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="intent">I am interested in...</label>
                <select
                  id="intent"
                  name="intent"
                  value={formData.intent}
                  onChange={handleChange}
                  className={styles.input}
                  required
                >
                  <option value="Request Enterprise Quote">Request Enterprise Quote</option>
                  <option value="Book Site Survey">Book Site Survey</option>
                  <option value="Security Consultation">Security Consultation</option>
                  <option value="Become a Partner">Become a Partner</option>
                  <option value="Dealer Registration">Dealer Registration</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message">Additional Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  placeholder="Tell us a little more about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit Request"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default LeadCaptureModal;
