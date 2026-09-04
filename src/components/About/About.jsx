
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./About.module.css";
import AnimateOnScroll from "../common/AnimateOnScroll";
import Counter from "../common/Counter";
import "swiper/css";
import "swiper/css/navigation";

// --- IMPORT THE REAL API CLIENT ---
import apiClient from "../../api/apiClient";

// --- MAIN ABOUT PAGE COMPONENT (FINAL INTEGRATED VERSION) ---
const About = () => {
  // --- STATE MANAGEMENT ---
  const [pageData, setPageData] = useState(null); // For simple text/content sections
  const [stats, setStats] = useState([]);
  const [team, setTeam] = useState([]);
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get the base URL for file downloads from your .env file
  const storageUrl =
    import.meta.env.VITE_API_STORAGE_URL || "http://127.0.0.1:8000/storage";

  // --- DATA FETCHING ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [pageRes, statsRes, teamRes, partnersRes] = await Promise.all([
          apiClient.get("/about-page-data"),
          apiClient.get("/statistics"),
          apiClient.get("/team-members"),
          apiClient.get("/partners"),
        ]);
        setPageData(pageRes.data);
        setStats(statsRes.data);
        setTeam(teamRes.data);
        setPartners(partnersRes.data);
      } catch (err) {
        setError("Could not load page content. Please try again later.");
        console.error("Fetch About Page Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []); // The empty array ensures this runs only once

  // --- RENDER LOGIC for loading and error states ---
  if (loading)
    return (
      <div
        className="container"
        style={{ padding: "4rem", textAlign: "center" }}
      >
        Loading About Us Page...
      </div>
    );
  if (error)
    return (
      <div
        className="container"
        style={{ padding: "4rem", textAlign: "center", color: "red" }}
      >
        {error}
      </div>
    );

  return (
    <div className={styles.aboutPage}>
      {/* 1. ELEGANT HERO SECTION (Static as designed) */}
      <section className={styles.heroSection}>
        <div className={styles.heroImage}></div>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Home / About Us
          </motion.p>
        </div>
      </section>

      {/* 2. INSPIRING SPACES SECTION (Dynamic) */}
      <section className={styles.inspiringSection}>
        <div className={`container ${styles.inspiringGrid}`}>
          <AnimateOnScroll className={styles.inspiringImages}>
            <img
              src={`${storageUrl}/${pageData.inspiring?.image1_url}`}
              alt="Modern Building"
              className={styles.img1}
            />
          </AnimateOnScroll>
          <AnimateOnScroll className={styles.inspiringText} delay={0.2}>
            <p className={styles.preTitle}>{pageData.inspiring?.preTitle}</p>
            <h2>{pageData.inspiring?.title}</h2>
            <p className={styles.description}>
              {pageData.inspiring?.description}
            </p>
            {/* The checklist can be made dynamic if added to the JSON in the backend */}
            <ul className={styles.checklist}>
              <li>✓ Advanced AI Analytics</li>
              <li>✓ Robust & Reliable Hardware</li>
              <li>✓ Comprehensive System Integration</li>
            </ul>
            <a href="/contact" className={styles.readMoreButton}>
              Read More →
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 3. WORKING PROCESS SECTION (Dynamic) */}
      <section className={styles.processSection}>
        <div className="container">
          <AnimateOnScroll>
            <p className={styles.preTitle}>Working Process</p>
            <h2>Our Working Process</h2>
          </AnimateOnScroll>
          <div className={styles.processGrid}>
            <AnimateOnScroll className={styles.processItem} delay={0.1}>
              <div className={styles.processNumber}>01</div>
              <h3>{pageData.process?.visionTitle}</h3>
              <p>{pageData.process?.visionDesc}</p>
            </AnimateOnScroll>
            <AnimateOnScroll className={styles.processItem} delay={0.2}>
              <div className={styles.processNumber}>02</div>
              <h3>{pageData.process?.missionTitle}</h3>
              <p>{pageData.process?.missionDesc}</p>
            </AnimateOnScroll>
            <AnimateOnScroll className={styles.processItem} delay={0.3}>
              <div className={styles.processNumber}>03</div>
              <h3>{pageData.process?.goalTitle}</h3>
              <p>{pageData.process?.goalDesc}</p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* 4. PROMO VIDEO SECTION (Dynamic) */}
      <section className={styles.videoSection}>
        <div className="container">
          <AnimateOnScroll>
            <div className={styles.videoPlayer}>
              <video
                src={`${storageUrl}/${pageData.promoVideo?.video_url}`}
                poster={`${storageUrl}/${pageData.promoVideo?.poster_url}`}
                controls
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 5. STATS COUNTER SECTION (Dynamic) */}
      <section className={styles.statsSection}>
        <div className={`container ${styles.statsGrid}`}>
          {stats.map((stat, index) => (
            <AnimateOnScroll
              key={stat.id}
              className={styles.statItem}
              delay={index * 0.1}
            >
              <Counter value={parseInt(stat.value, 10)}>+</Counter>
              <p>{stat.label}</p>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* 6. MEET THE TEAM SLIDER (Dynamic) */}
      <section className={styles.teamSection}>
        <div className="container">
          <AnimateOnScroll>
            <p className={styles.preTitle}>Our Team</p>
            <h2>Meet Our Highly Professional Team</h2>
          </AnimateOnScroll>
          <div className={styles.teamSliderContainer}>
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={3}
              navigation={{
                nextEl: `.${styles.swiperButtonNext}`,
                prevEl: `.${styles.swiperButtonPrev}`,
              }}
              className={styles.teamSwiper}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {team.map((member) => (
                <SwiperSlide key={member.id}>
                  <div className={styles.teamMember}>
                    <div className={styles.memberImage}>
                      <img
                        src={`${storageUrl}/${member.image_url}`}
                        alt={member.name}
                      />
                      <div className={styles.memberOverlay}>
                        <h3>{member.name}</h3>
                        <p>{member.title}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={styles.swiperButtonPrev}>←</div>
            <div className={styles.swiperButtonNext}>→</div>
          </div>
        </div>
      </section>

      {/* 7. PARTNER SECTION (Dynamic Grid) */}
      <section className={styles.partnerSection}>
        <div className="container">
          <AnimateOnScroll>
            <p className={styles.preTitle}>Our Network</p>
            <h2>Trusted Partners</h2>
          </AnimateOnScroll>
          <div className={styles.partnerGrid}>
            {partners.map((p) => (
              <AnimateOnScroll key={p.id} className={styles.partnerCard}>
                <div className={styles.partnerLogoWrapper}>
                  <img src={`${storageUrl}/${p.logo_url}`} alt={p.name} />
                </div>
                <div className={styles.partnerInfo}>
                  <h3 className={styles.partnerName}>{p.name}</h3>
                  <span className={styles.partnerTier}>{p.tier || 'Authorized Partner'}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;