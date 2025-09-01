

// ?

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import AkvistionLogo from "../../../assets/Logo.png";

// Simple SVG Icons.
const MapPinIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);
const EnvelopeIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);
const ClockIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
  </svg>
);
const Chevron = () => <div className={styles.chevron}></div>;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        {/* Column 1: Company Info */}
        <div className={styles.footerColumn}>
          {/* --- CORRECTED LOGO --- */}
          <Link to="/" className={styles.footerLogo}>
            <img
              src={AkvistionLogo}
              alt="AK VISTION Logo"
              className={styles.logoImage}
            />
            <span>AK-VISTION</span>
          </Link>
          <p className={styles.footerDescription}>
            Leading provider of advanced security and surveillance solutions. We
            deliver cutting-edge technology to protect what matters most.
          </p>
        </div>

        {/* Column 2 & 3: Links */}
        <div className={styles.footerColumn}>
          <h3 className={styles.footerHeading}>Quick Links</h3>
          <div className={styles.linksGrid}>
            <Link to="/products" className={styles.footerLink}>
              <Chevron /> Products
            </Link>
            <Link to="/solutions" className={styles.footerLink}>
              <Chevron /> Solutions
            </Link>
            <Link to="/services" className={styles.footerLink}>
              <Chevron /> Services
            </Link>
            <Link to="/support" className={styles.footerLink}>
              <Chevron /> Support
            </Link>
            <Link to="/blog" className={styles.footerLink}>
              <Chevron /> Blog & Resources
            </Link>
          </div>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.footerHeading}>Company</h3>
          <div className={styles.linksGrid}>
            <Link to="/about" className={styles.footerLink}>
              <Chevron /> About Us
            </Link>
            <Link to="/about#careers" className={styles.footerLink}>
              <Chevron /> Careers
            </Link>
            <Link to="/contact" className={styles.footerLink}>
              <Chevron /> Contact Us
            </Link>
            <Link to="/legal/privacy-policy" className={styles.footerLink}>
              <Chevron /> Privacy Policy
            </Link>
            <Link to="/legal/terms-of-use" className={styles.footerLink}>
              <Chevron /> Terms of Service
            </Link>
          </div>
        </div>

        {/* Column 4: Contact Info */}
        <div className={styles.footerColumn}>
          <h3 className={styles.footerHeading}>Contact Us</h3>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <MapPinIcon />
              </div>{" "}
              <span>
                Bole , Garad building, 2th floor, B-3S
                <br />
                Ethiopia, Addis Ababa
              </span>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <PhoneIcon />
              </div>{" "}
              <span>0950353535/0950363636</span>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <EnvelopeIcon />
              </div>{" "}
              <span>akvistion.et@gmail.com</span>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <ClockIcon />
              </div>{" "}
              <span>
                Mon-Fri: 9:00 AM - 6:00 PM
                <br />
                Sat: 10:00 AM - 2:00 PM
              </span>
            </div>
          </div>
        </div>
        <br />
      </div>
     

      {/* --- CORRECTED Bottom Section --- */}
      <div className={`container ${styles.footerBottom}`}>
        {/* Newsletter is now the first column */}
        <div className={styles.newsletter}>
          <h4 className={styles.newsletterTitle}>Newsletter</h4>
          <p>
            Subscribe to our newsletter to receive updates on new products,
            special offers, and security tips.
          </p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Copyright is now the second column */}
        <div className={styles.copyright}>
          <p>© {currentYear} AKvision. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <Link to="/legal/privacy-policy">Privacy Policy</Link>
            <Link to="/legal/terms-of-use">Terms of Service</Link>
            <Link to="/legal/cookie-policy">Cookie Policy</Link>
          </div>
        </div>

        {/* This is an empty div to push the other two columns to the left, matching the layout */}
        <div className={styles.bottomEmptySpace}></div>
      </div>
    </footer>
  );
};

export default Footer;
