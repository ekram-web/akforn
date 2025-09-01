// import React from "react";
// // ... Swiper imports remain the same
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination } from "swiper/modules";

// import styles from "./CoreTechnologies.module.css";

// // Data for our carousel slides
// const slides = [
//   {
//     title: "EaseEngine",
//     description:
//       "akvision's EaseEngine transforms complex systems into intuitive experiences. With this technology, akvision's serverless management platforms eliminate operational overhead, intelligent design creates seamless user journeys, and systems are deployed flexibly across virtually any environment, delivering the ease and simplicity users expect.",
//     imgUrl: "src/assets/cam.png",
//   },
//   {
//     title: "eDVR Series",
//     description:
//       "Discover the efficiency and reliability of akvision's eDVR series. These devices offer enhanced video storage and management capabilities, ensuring your security footage is always accessible and secure with advanced solid-state drive technology.",
//     imgUrl: "https://ext.same-assets.com/2463856760/146643026.jpeg",
//   },
//   // Add more slides here if needed
// ];

// const CoreTechnologies = () => {
//   return (
//     // The main section has the black background
//     <section className={styles.coreTechSection}>
//       {/* The container now wraps everything inside */}
//       <div className="container">
//         <div className={styles.header}>
//           <h2 className={styles.sectionTitle}> Technologies</h2>
//           <a href="#" className={styles.viewAllLink}>
//             View more →
//           </a>
//         </div>

//         <div className={styles.carouselContainer}>
//           <Swiper
//             modules={[Navigation, Pagination]}
//             spaceBetween={50}
//             slidesPerView={1}
//             navigation={{
//               nextEl: `.${styles.swiperButtonNext}`,
//               prevEl: `.${styles.swiperButtonPrev}`,
//             }}
//             pagination={{
//               clickable: true,
//               el: `.${styles.swiperPagination}`,
//               bulletClass: styles.swiperPaginationBullet,
//               bulletActiveClass: styles.swiperPaginationBulletActive,
//             }}
//             className={styles.mySwiper}
//           >
//             {slides.map((slide, index) => (
//               <SwiperSlide key={index} className={styles.slide}>
//                 <div className={styles.slideImage}>
//                   <img src={slide.imgUrl} alt={slide.title} />
//                 </div>
//                 <div className={styles.slideContent}>
//                   <h3 className={styles.slideTitle}>{slide.title}</h3>
//                   <p className={styles.slideDescription}>{slide.description}</p>
//                   <button className={styles.learnMoreButton}>Learn More</button>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Custom Navigation & Pagination Area */}
//           <div className={styles.controls}>
//             <div className={styles.swiperButtonPrev}>&lt;</div>
//             <div className={styles.swiperPagination}></div>
//             <div className={styles.swiperButtonNext}>&gt;</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoreTechnologies;

// ???

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./CoreTechnologies.module.css";

import img1 from "../../assets/cam.png";
import img2 from "../../assets/DSC02606.jpg";
import img3 from "../../assets/Picsart_25-08-22_10-01-18-095.jpg";

const technologies = [
  {
    name: "AcuSense",
    desc: "Utilizing deep learning algorithms, AcuSense technology pinpoints human and vehicle targets, filtering out false alarms with remarkable accuracy.",
    longDesc:
      "Focus on what truly matters. Our advanced AI distinguishes between genuine threats and irrelevant movements, providing you with alerts that are both timely and precise.",
    // imgUrl: "https://picsum.photos/seed/blueprint1/1200/800",
    imgUrl: img1,
  },
  {
    name: "ColorVu",
    desc: "Captures vivid, full-color video 24/7, even in extremely low-light conditions, turning night into day.",
    longDesc:
      "Say goodbye to grainy black-and-white footage. ColorVu technology uses advanced sensors and supplemental lighting to render clear, colorful details around the clock.",
    // imgUrl: "https://picsum.photos/seed/blueprint2/1200/800",
    imgUrl: img2,
  },
  {
    name: "Smart Hybrid Light",
    desc: "Intelligently switches between IR and white light, providing discreet surveillance and active deterrence.",
    longDesc:
      "Get the best of both worlds. The system remains covert with infrared until an event is detected, at which point a powerful white light activates to capture color detail and deter intruders.",
    // imgUrl: "https://picsum.photos/seed/blueprint3/1200/800",
    imgUrl: img3,
  },
];

const CoreTechnologies = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.coreTechSection}>
      <div className={`container ${styles.container}`}>
        {/* Left Column: Interactive List */}
        <div className={styles.leftColumn}>
          <h2 className={styles.sectionTitle}>Our Technology Core</h2>
          <ul className={styles.techList}>
            {technologies.map((tech, index) => (
              <li
                key={tech.name}
                onMouseEnter={() => setActiveIndex(index)}
                className={activeIndex === index ? styles.active : ""}
              >
                <h3>{tech.name}</h3>
                <p>{tech.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Dynamic Content Display */}
        <div className={styles.rightColumn}>
          <div className={styles.imageContainer}>
            <AnimatePresence>
              <motion.img
                key={activeIndex}
                src={technologies[activeIndex].imgUrl}
                alt={technologies[activeIndex].name}
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
                {technologies[activeIndex].longDesc}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreTechnologies;
