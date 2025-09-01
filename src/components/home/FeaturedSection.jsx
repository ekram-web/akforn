// import React from "react";
// import styles from "./FeaturedSection.module.css";

// const FeatureCard = ({ image, title, description, linkText }) => (
//   <div className={styles.card}>
//     <div className={styles.imageWrapper}>
//       <img src={image} alt={title} />
//       <div className={styles.gradient} />
//       <div className={styles.titleBar}>
//         <h3 className={styles.cardTitle}>{title}</h3>
//       </div>
//       <div className={styles.hoverPanel}>
//         <h3 className={styles.hoverTitle}>{title}</h3>
//         {description && <p className={styles.desc}>{description}</p>}
//         <div className={styles.ctaRow}>
//           <a href="#" className={styles.cardLink}>
//             {linkText}
//           </a>
//           <button className={styles.roundArrow} aria-label="Open">→</button>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const FeaturedSection = () => {
//   const features = [
//     {
//       img: "https://images.unsplash.com/photo-1583229447819-9d7bcb38a69b?q=80&w=1200&auto=format&fit=crop",
//       title: "Network Camera",
//       description:
//         "High-performance network cameras with AI analytics and night vision.",
//       link: "View More",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?q=80&w=1200&auto=format&fit=crop",
//       title: "PTZ Camera",
//       description:
//         "Precision pan-tilt-zoom with smart tracking and low-light clarity.",
//       link: "View More",
//     },
//     {
//       img: "/images/nvr.jpg",
//       title: "Network Video Recorder",
//       description:
//         "AcuSeek NVRs enable instant video retrieval through natural language.",
//       link: "View More",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1200&auto=format&fit=crop",
//       title: "Video Intercom",
//       description: "Secure entry with HD video, two-way audio, and mobile access.",
//       link: "View More",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
//       title: "Access Control",
//       description: "Face, fingerprint, and card terminals for every scenario.",
//       link: "View More",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1600267175164-c7a2cbb39cc6?q=80&w=1200&auto=format&fit=crop",
//       title: "LED Displays",
//       description: "Indoor and outdoor LED with vibrant color and high reliability.",
//       link: "View More",
//     },
//   ];

//   const trackRef = React.useRef(null);
//   const [canPrev, setCanPrev] = React.useState(false);
//   const [canNext, setCanNext] = React.useState(true);

//   const updateArrows = React.useCallback(() => {
//     const el = trackRef.current;
//     if (!el) return;
//     const { scrollLeft, scrollWidth, clientWidth } = el;
//     setCanPrev(scrollLeft > 4);
//     setCanNext(scrollLeft + clientWidth < scrollWidth - 4);
//   }, []);

//   React.useEffect(() => {
//     const el = trackRef.current;
//     if (!el) return;
//     updateArrows();
//     const onScroll = () => updateArrows();
//     el.addEventListener("scroll", onScroll, { passive: true });
//     return () => el.removeEventListener("scroll", onScroll);
//   }, [updateArrows]);

//   const scrollByOneCard = (dir) => {
//     const el = trackRef.current;
//     if (!el) return;
//     const firstCard = el.querySelector(`.${styles.card}`);
//     const cardWidth = firstCard
//       ? firstCard.getBoundingClientRect().width
//       : el.clientWidth * 0.25;
//     const gap = 24;
//     const delta = dir === "next" ? cardWidth + gap : -(cardWidth + gap);
//     el.scrollBy({ left: delta, behavior: "smooth" });
//   };

//   return (
//     <section className={styles.featuredSection}>
//       <div className="container">
//         {/* <div className={styles.header}>
//           <h2 className={styles.sectionTitle}>Products</h2>
//           <a href="/products" className={styles.seeAllLink}>See All Products →</a>
//         </div> */}

//         <div className={styles.slider}>
//           <button
//             className={`${styles.arrow} ${!canPrev ? styles.disabled : ""}`}
//             onClick={() => scrollByOneCard("prev")}
//             aria-label="Previous"
//           >
//             ‹
//           </button>

//           <div className={styles.track} ref={trackRef}>
//             {features.map((feature, index) => (
//               <FeatureCard
//                 key={index}
//                 image={feature.img}
//                 title={feature.title}
//                 description={feature.description}
//                 linkText={feature.link}
//               />
//             ))}
//           </div>

//           <button
//             className={`${styles.arrow} ${styles.next} ${!canNext ? styles.disabled : ""}`}
//             onClick={() => scrollByOneCard("next")}
//             aria-label="Next"
//           >
//             ›
//           </button>

//           <div className={styles.edgeLeft} />
//           <div className={styles.edgeRight} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedSection;

// ?

import React from "react";
import styles from "./FeaturedSection.module.css";


// ✅ Import your images properly from src/assets
import cam1 from "../../assets/Picsart_25-08-22_09-59-03-985.jpg";
import cam2 from "../../assets/Picsart_25-08-22_10-05-50-045.jpg";
import cam3 from "../../assets/Picsart_25-08-22_10-02-00-821.jpg";
import cam4 from "../../assets/Picsart_25-08-22_10-05-50-045.jpg";
import cam5 from "../../assets/DSC02622.jpg";

// Reusable Card Component with the correct structure
const FeatureCard = ({ image, title, description }) => (
  <div className={styles.card}>
    <div className={styles.imageWrapper}>
      <img src={image} alt={title} />
      <div className={styles.gradientOverlay}></div>
      <div className={styles.titleBar}>
        <h3>{title}</h3>
      </div>
      <div className={styles.hoverPanel}>
        <h4>{title}</h4>
        <p>{description}</p>
        <a href="#">
          Learn More <span>→</span>
        </a>
      </div>
    </div>
  </div>
);

// Main Section Component
const FeaturedSection = () => {
  const features = [
    {
      // img: "../../assets/Picsart_25-08-22_09-59-03-985.jpg",
      img: cam1,
      title: "AI Network Cameras",
      desc: "High-performance cameras with AI analytics.",
    },
    {
      // img: "../../assets/Picsart_25-08-22_10-05-50-045.jpg",
      img: cam2,
      title: "Intelligent NVRs",
      desc: "Reliable storage with smart search capabilities.",
    },
    {
      // img: "../../assets/Picsart_25-08-22_10-02-00-821.jpg",
      img: cam3,
      title: "Access Control",
      desc: "Secure and seamless entry management.",
    },
    {
      // img: "../../assets/Picsart_25-08-22_10-05-50-045.jpg",
      img: cam4,
      title: "Video Intercom",
      desc: "Crystal-clear communication for any building.",
    },
    {
      // img: "../../assets/DSC02622.jpg",
      img: cam4,
      title: "PTZ Cameras",
      desc: "Precision pan-tilt-zoom with smart tracking.",
    },
  ];

  // This is a simple hook to handle the scrolling buttons
  const scrollRef = React.useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount =
        direction === "left"
          ? -current.offsetWidth * 0.75
          : current.offsetWidth * 0.75;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className={styles.featuredSection}>
      <div className="container">
        <div className={styles.header}>
          <h2>Product Showcase</h2>
          <div className={styles.navButtons}>
            <button onClick={() => scroll("left")}>‹</button>
            <button onClick={() => scroll("right")}>›</button>
          </div>
        </div>
        <div className={styles.scrollContainer} ref={scrollRef}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              image={feature.img}
              title={feature.title}
              description={feature.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
