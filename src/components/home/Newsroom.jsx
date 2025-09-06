// ???/
import React, { useRef, useState, useEffect } from "react";
// Swiper Components & Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

import styles from "./Newsroom.module.css";
import apiClient from "../../api/apiClient"; // <-- Import the real API client

const Newsroom = () => {
  // --- STATE MANAGEMENT ---
  const [newsroomVideos, setNewsroomVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const videoRefs = useRef([]);
  const storageUrl =
    import.meta.env.VITE_API_STORAGE_URL || "http://127.0.0.1:8000/storage";

  // --- DATA FETCHING ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the list of newsroom videos from your public API endpoint
        const response = await apiClient.get("/newsroom-videos");
        setNewsroomVideos(response.data);
      } catch (err) {
        setError("Could not load newsroom videos.");
        console.error("Fetch Newsroom Videos Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // --- Event handlers for video playback (No change needed) ---
  const handleMouseEnter = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play();
    }
  };

  const handleMouseLeave = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
    }
  };

  // --- RENDER LOGIC ---

  // Don't render the component if there's an error, it's loading, or the list is empty
  if (loading || error || newsroomVideos.length === 0) {
    return null;
  }

  return (
    <section className={styles.newsroomSection}>
      <div className={`container ${styles.header}`}>
        <h2 className={styles.sectionTitle}>Newsroom</h2>
        <a href="#" className={styles.viewAllLink}>
          View more →
        </a>
      </div>

      <div className={styles.carouselContainer}>
        <Swiper
          modules={[Navigation]}
          loop={true}
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          navigation={{
            nextEl: `.${styles.swiperButtonNext}`,
            prevEl: `.${styles.swiperButtonPrev}`,
          }}
          className={styles.mySwiper}
        >
          {/* Now mapping over the DYNAMIC data from state */}
          {newsroomVideos.map((item, index) => (
            <SwiperSlide
              key={item.id} // Use the unique ID from the database
              className={styles.slide}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className={styles.backgroundVideo}
                src={`${storageUrl}/${item.video_url}`} // Construct the full video URL
                muted
                loop
                playsInline
                preload="metadata" // Helps with smoother loading
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.swiperButtonPrev}>&lt;</div>
        <div className={styles.swiperButtonNext}>&gt;</div>
      </div>
    </section>
  );
};

export default Newsroom;
