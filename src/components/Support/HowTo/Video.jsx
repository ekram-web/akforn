import React from "react";
import styles from "./Video.module.css";

// Sample data for the video grid. This will come from your API later.
const videos = [
  {
    id: 1,
    thumb:
      "https://www.hikvision.com/content/dam/hikvision/en/support/how-to/how-to-video/How-to-Configure-ITS-function-%E2%80%94-Illegal-Parking-Detection/How-to-Configure-ITS-function-%E2%80%94-Illegal-Parking-Detection.jpg",
    title: "How to Configure ITS function — Illegal Parking Detection",
    desc: "This video shows how to enable the ITS Illegal Parking Detection function so the camera automatically identifies and records vehicles parked in restricted zones.",
    date: "Jul 29, 2025",
  },
  {
    id: 2,
    thumb:
      "https://www.hikvision.com/content/dam/hikvision/en/support/how-to/how-to-video/How-to-Configure-Queue-Duration-Prediction-Function/How-to-Configure-Queue-Duration-Prediction-Function.jpg",
    title: "How to Configure Queue Duration Prediction Function",
    desc: "This video shows how to enable the Queue Duration Prediction function so the system estimates and displays expected wait times for people in line.",
    date: "Jul 22, 2025",
  },
  {
    id: 3,
    thumb:
      "https://www.hikvision.com/content/dam/hikvision/en/support/how-to/how-to-video/How-to-Configure-Portable-Panoramic-Camera/How-to-Configure-Portable-Panoramic-Camera.jpg",
    title: "How to Configure Portable Panoramic Camera",
    desc: "This video shows how to power up, aim, and configure the portable panoramic camera for instant 360° coverage and remote viewing.",
    date: "Jul 15, 2025",
  },
  {
    id: 4,
    thumb:
      "https://www.hikvision.com/content/dam/hikvision/en/support/how-to/how-to-video/How-to-Use-Playback-on-HikCentral-Pro/How-to-Use-Playback-on-HikCentral-Pro.jpg",
    title: "How to Use Playback on HikCentral Pro",
    desc: "This video shows how to use HikCentral Pro’s playback tools to search, filter, and export recorded video from any camera in the system.",
    date: "Jul 14, 2025",
  },
  // Add more video objects here to fill the grid
];

const Video = () => {
  // We duplicate the data just to fill the grid for the visual demo
  const allVideos = [...videos, ...videos];

  return (
    <div className={styles.videoPage}>
      {/* Section 1: Banner */}
      <section className={styles.banner}>
        <div className={styles.bannerImage}></div>
        <div className={styles.breadcrumbs}>
          <div className="container">
            <a href="/">Home</a> <span>›</span> <a href="/support">Support</a>{" "}
            <span>›</span> How to Video
          </div>
        </div>
      </section>

      {/* Section 2: Intro */}
      <section className={styles.intro}>
        <h1 className={styles.pageTitle}>How to Video</h1>
        <p>
          Click the button below for a full list of our support video on the{" "}
          <a href="#">YouTube channel</a>.
        </p>
        <button className={styles.enterNowButton}>Enter Now</button>
      </section>

      <div className="container">
        {/* Section 3: Filters */}
        <section className={styles.filters}>
          <div className={styles.dropdown}>
            <span>All Video Types</span>
            <span>▼</span>
          </div>
          <a href="#" className={styles.resetLink}>
            Reset
          </a>
          <div className={styles.search}>
            <span>🔍</span> Search
          </div>
        </section>

        <hr className={styles.divider} />

        {/* Section 4: Video Grid */}
        <main className={styles.videoGrid}>
          {allVideos.map((video, index) => (
            <a href="#" className={styles.card} key={index}>
              <div className={styles.thumbnailWrapper}>
                <img
                  src={video.thumb}
                  alt={video.title}
                  className={styles.thumbnail}
                />
                <div className={styles.playIcon}>▶</div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{video.title}</h3>
                <p className={styles.description}>{video.desc}</p>
                <p className={styles.date}>{video.date}</p>
              </div>
            </a>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Video;
