
import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import apiClient from "../../api/apiClient"; // <-- Import our API client
import styles from "./Legal.module.css";

// --- MAIN LAYOUT COMPONENT ---
// This component now manages the sidebar and renders the dynamic content via <Outlet>
const Legal = () => {
  return (
    <div className={styles.legalPage}>
      <div className="container">
        <div className={styles.layoutGrid}>
          {/* Sidebar Navigation (No changes needed here) */}
          <aside className={styles.sidebar}>
            <nav className={styles.sidebarNav}>
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
            {/* The Outlet will render whichever dynamic content component matches the URL */}
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

// --- DYNAMIC CONTENT COMPONENT ---
// This reusable component will fetch and display the content for ANY legal page
const DynamicLegalContent = ({ pageKey, pageTitle }) => {
  const [content, setContent] = useState("");
  const [lastUpdated, setLastUpdated] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // This function runs when the component loads
    const fetchLegalContent = async () => {
      setLoading(true);
      try {
        // Make the real API call to your Laravel backend
        const response = await apiClient.get(`/legal-pages/${pageKey}`);

        // Update state with the data from the API
        setContent(response.data.content);
        setLastUpdated(response.data.last_updated);
      } catch (err) {
        setError(`Failed to load content for ${pageTitle}.`);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLegalContent();
  }, [pageKey]); // IMPORTANT: This effect re-runs if the pageKey changes (e.g., you navigate from privacy to terms)

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>Loading...</div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", padding: "2rem", color: "red" }}>
        {error}
      </div>
    );
  }

  return (
    <div className={styles.contentWrapper}>
      <h1 className={styles.pageTitle}>{pageTitle}</h1>
      <p className={styles.lastUpdated}>
        Last updated: {new Date(lastUpdated).toLocaleDateString()}
      </p>

      {/* This is the key: dangerouslySetInnerHTML is React's way of rendering raw HTML */}
      {/* It's safe here because this HTML is coming from your own trusted admin panel */}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

// --- EXPORTED PAGE COMPONENTS ---
// These are the simple components your router will use.
// They just call the dynamic component with the correct props.

export const PrivacyPolicyContent = () => (
  <DynamicLegalContent pageKey="privacy" pageTitle="Privacy Policy" />
);

export const TermsOfUseContent = () => (
  <DynamicLegalContent pageKey="terms" pageTitle="Terms of Use" />
);

export const CookiePolicyContent = () => (
  <DynamicLegalContent pageKey="cookies" pageTitle="Cookie Policy" />
);

export default Legal;