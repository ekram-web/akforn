// import React from "react";
// import styles from "./HeroSection.module.css";

// const HeroSection = () => {
//   return (
//     <section className={styles.hero}>
//       <video autoPlay loop muted playsInline className={styles.videoBackground}>
//         <source
//           src="https://videos.pexels.com/video-files/853875/853875-hd_1920_1080_25fps.mp4"
//           type="video/mp4"
//         />
//       </video>
//       <div className={styles.overlay}></div>
//       <div className={`container ${styles.content}`}>
//         <h1 className={styles.title}>Leading the Future of AIoT</h1>
//         <p className={styles.subtitle}>
//           Harmonizing intelligent perception and multi-modal innovation.
//         </p>
//         <div className={styles.ctaRow}>
//           <button className={styles.primaryCta}>Explore Products</button>
//           <button className={styles.secondaryCta}>Learn More</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import styles from "./HeroSection.module.css";

import videoSource from "../../assets/14285055_1920_1080_25fps.mp4";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      {/* Video Background with the new, relevant video */}
      <video autoPlay loop muted playsInline className={styles.videoBackground}>
        <source
          // src="https://www.w3schools.com/html/mov_bbb.mp4"
          src={videoSource}
          type="video/mp4"
        />
      </video>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.content}`}>
        <h1 className={styles.title}>Empowering Vision for a Safer World</h1>
        <p className={styles.subtitle}>
          Innovative IoT solutions with video as the core competency
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
