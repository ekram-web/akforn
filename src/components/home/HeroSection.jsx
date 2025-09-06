// // import React from "react";
// // import styles from "./HeroSection.module.css";

// // const HeroSection = () => {
// //   return (
// //     <section className={styles.hero}>
// //       <video autoPlay loop muted playsInline className={styles.videoBackground}>
// //         <source
// //           src="https://videos.pexels.com/video-files/853875/853875-hd_1920_1080_25fps.mp4"
// //           type="video/mp4"
// //         />
// //       </video>
// //       <div className={styles.overlay}></div>
// //       <div className={`container ${styles.content}`}>
// //         <h1 className={styles.title}>Leading the Future of AIoT</h1>
// //         <p className={styles.subtitle}>
// //           Harmonizing intelligent perception and multi-modal innovation.
// //         </p>
// //         <div className={styles.ctaRow}>
// //           <button className={styles.primaryCta}>Explore Products</button>
// //           <button className={styles.secondaryCta}>Learn More</button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default HeroSection;

// // ???

// import React from "react";
// import styles from "./HeroSection.module.css";

// import videoSource from "../../assets/14285055_1920_1080_25fps.mp4";

// const HeroSection = () => {
//   return (
//     <section className={styles.hero}>
//       {/* Video Background with the new, relevant video */}
//       <video autoPlay loop muted playsInline className={styles.videoBackground}>
//         <source
//           // src="https://www.w3schools.com/html/mov_bbb.mp4"
//           src={videoSource}
//           type="video/mp4"
//         />
//       </video>
//       <div className={styles.overlay}></div>
//       <div className={`container ${styles.content}`}>
//         <h1 className={styles.title}>Empowering Vision for a Safer World</h1>
//         <p className={styles.subtitle}>
//           Innovative IoT solutions with video as the core competency
//         </p>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


// ???
import React, { useState, useEffect } from "react";
import styles from "./HeroSection.module.css";
import apiClient from "../../api/apiClient"; // <-- Import the real API client

const HeroSection = () => {
  // --- STATE MANAGEMENT ---
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const storageUrl =
    import.meta.env.VITE_API_STORAGE_URL || "http://127.0.0.1:8000/storage";

  // --- DATA FETCHING ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the 'hero' section data from your homepage content endpoint
        const response = await apiClient.get("/homepage-data");
        setHeroData(response.data.hero);
      } catch (err) {
        setError("Could not load hero content.");
        console.error("Fetch Hero Section Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // --- RENDER LOGIC ---
  // You might want to show a placeholder or nothing if the data fails to load
  if (loading || error || !heroData) {
    // Return a fallback or null to prevent errors if data is missing
    return (
      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={`container ${styles.content}`}>
          <h1 className={styles.title}>Welcome</h1>
        </div>
      </section>
    );
  }

  // Construct the full video URL
  const videoUrl = heroData.video_url
    ? `${storageUrl}/${heroData.video_url}`
    : "";

  return (
    <section className={styles.hero}>
      {/* Dynamic Video Background */}
      {videoUrl && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.videoBackground}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className={styles.overlay}></div>
      <div className={`container ${styles.content}`}>
        {/* Dynamic Title and Subtitle */}
        <h1 className={styles.title}>{heroData.title}</h1>
        <p className={styles.subtitle}>{heroData.subtitle}</p>
      </div>
    </section>
  );
};

export default HeroSection;