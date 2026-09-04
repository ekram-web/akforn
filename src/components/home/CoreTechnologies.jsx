
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./CoreTechnologies.module.css";
import apiClient from "../../api/apiClient"; // <-- Import the real API client

const CoreTechnologies = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // --- STATE MANAGEMENT ---
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const storageUrl =
    import.meta.env.VITE_API_STORAGE_URL || "http://127.0.0.1:8000/storage";

  // --- DATA FETCHING ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the list of technologies from your public API endpoint
        const response = await apiClient.get("/technologies");
        setTechnologies(response.data);
      } catch (err) {
        // Set an error state if the API call fails
        setError("Could not load Core Technologies content.");
        console.error("Fetch Core Technologies Error:", err);
      } finally {
        // Set loading to false regardless of success or failure
        setLoading(false);
      }
    };

    fetchData();
  }, []); // The empty array [] ensures this effect runs only once

  // --- RENDER LOGIC ---

  // Don't render the component at all if there's an error or it's loading with no data yet.
  // This is better for a homepage section than showing an explicit error message.
  if (loading || error || technologies.length === 0) {
    return null;
  }

  // Get the currently active technology based on the state index
  const activeTechnology = technologies[activeIndex];

  return (
    <section className={styles.coreTechSection}>
      <div className={`container ${styles.container}`}>
        {/* Left Column: Interactive List (Dynamic) */}
        <div className={styles.leftColumn}>
          <h2 className={styles.sectionTitle}>Our Technology Core</h2>
          <ul className={styles.techList}>
            {technologies.map((tech, index) => (
              <li
                key={tech.id} // Use the unique ID from the database
                onMouseEnter={() => setActiveIndex(index)}
                className={activeIndex === index ? styles.active : ""}
              >
                <h3>{tech.name}</h3>
                <p>{tech.short_desc}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Dynamic Content Display */}
        <div className={styles.rightColumn}>
          <div className={styles.imageContainer}>
            <AnimatePresence>
              <motion.img
                key={activeIndex} // The key changing triggers the animation
                src={`${storageUrl}/${activeTechnology.image_url}`}
                alt={activeTechnology.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>
          <div className={styles.descriptionContainer}>
            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {activeTechnology.long_desc}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreTechnologies;