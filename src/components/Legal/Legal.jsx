import React from "react";
import { NavLink, Outlet } from "react-router-dom"; // Using NavLink for active styles
import styles from "./Legal.module.css";

// This is the main layout for all legal pages (Privacy, Terms, etc.)
const Legal = () => {
  return (
    <div className={styles.legalPage}>
      <div className="container">
        <div className={styles.layoutGrid}>
          {/* Sidebar Navigation */}
          <aside className={styles.sidebar}>
            <nav className={styles.sidebarNav}>
              {/* NavLink automatically adds an "active" class to the matched link */}
              <NavLink
                to="/legal/privacy-policy"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }
              >
                Privacy Policy
              </NavLink>
              <NavLink
                to="/legal/terms-of-use"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }
              >
                Terms of Use
              </NavLink>
              <NavLink
                to="/legal/cookie-policy"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }
              >
                Cookie Policy
              </NavLink>
            </nav>
          </aside>

          {/* Main Content Area */}
          <main className={styles.mainContent}>
            {/* The Outlet will render the specific legal content (e.g., PrivacyPolicyContent) */}
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

// This is the specific content for the Privacy Policy
export const PrivacyPolicyContent = () => {
  return (
    <div className={styles.contentWrapper}>
      <h1 className={styles.pageTitle}>Privacy Policy</h1>
      <p className={styles.lastUpdated}>Last updated: August 20, 2025</p>

      <p>
        Welcome to AK VISTION's Privacy Policy. This policy describes how we
        collect, use, process, and disclose your information, including personal
        data, in conjunction with your access to and use of the AK VISTION
        website and services.
      </p>

      <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
      <p>There are three general categories of information we collect.</p>
      <h3 className={styles.subSectionTitle}>
        1.1 Information You Give to Us.
      </h3>
      <p>
        We ask for and collect the following personal information about you when
        you use the AK VISTION Platform. This information is necessary for the
        adequate performance of the contract between you and us and to allow us
        to comply with our legal obligations.
      </p>
      <ul>
        <li>
          <strong>Account Information.</strong> When you sign up for an AK
          VISTION Account, we require certain information such as your first
          name, last name, email address, and date of birth.
        </li>
        <li>
          <strong>Communications with AK VISTION.</strong> When you communicate
          with AK VISTION or use the AK VISTION Platform to communicate with
          other Members, we collect information about your communication and any
          information you choose to provide.
        </li>
      </ul>

      <h2 className={styles.sectionTitle}>
        2. How We Use Information We Collect
      </h2>
      <p>
        We use, store, and process information, including personal information,
        about you to provide, understand, improve, and develop the AK VISTION
        Platform, create and maintain a trusted and safer environment and comply
        with our legal obligations.
      </p>

      <h2 className={styles.sectionTitle}>3. Sharing & Disclosure</h2>
      <p>
        We will not share your personal data with third parties without your
        consent, except as necessary to provide our services or as required by
        law. We may share information with our trusted partners for analytics,
        marketing, and other business purposes.
      </p>
    </div>
  );
};

// You can create similar components for TermsOfUseContent, CookiePolicyContent etc.
export const TermsOfUseContent = () => (
  <div className={styles.contentWrapper}>
    <h1 className={styles.pageTitle}>Terms of Use</h1>
    <p>Content for Terms of Use will go here...</p>
  </div>
);

export const CookiePolicyContent = () => (
  <div className={styles.contentWrapper}>
    <h1 className={styles.pageTitle}>Cookie Policy</h1>
    <p>Content for Cookie Policy will go here...</p>
  </div>
);

export default Legal;
