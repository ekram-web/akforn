// import React, { useState } from "react";
// import styles from "./Newsroom.module.css"; // Changed to CSS Module import
// import {
//   ArrowRight,
//   ChevronLeft,
//   ChevronRight,
//   Play,
//   Pause,
// } from "lucide-react";

// const Newsroom = () => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   const featuredStory = {
//     category: "Success Story",
//     title:
//       "Crafting a digital oasis: a Saudi university's journey to smart education",
//     tags: ["Education", "Saudi Arabia", "Security and Intelligence"],
//     image: "https://ext.same-assets.com/2463856760/32746476.jpeg",
//   };

//   const newsItems = [
//     {
//       title:
//         "Bringing Invisible science to life: Hikvision's caring partnership with Wonder Hub",
//       category: "Blog",
//       date: "June 26, 2025",
//       image: "https://ext.same-assets.com/2463856760/146643026.jpeg",
//     },
//     {
//       title:
//         "Hikvision launches new DeepinViewX bullet camera for enhanced perimeter protection",
//       category: "Latest News",
//       date: "July 01, 2025",
//       image: "https://ext.same-assets.com/2463856760/3136571966.jpeg",
//     },
//     {
//       title:
//         "Hikvision launches brand-new WonderHub, simplifying smart building management",
//       category: "Latest News",
//       date: "July 02, 2025",
//       image: "https://ext.same-assets.com/2463856760/2060804859.jpeg",
//     },
//   ];

//   const sportsStory = {
//     title:
//       "Putting video on the podium: Improving sporting safety and fan experiences",
//     category: "Blog",
//     date: "June 30, 2025",
//     image: "https://ext.same-assets.com/2463856760/1689404548.jpeg",
//   };

//   return (
//     <section className={styles.newsroomSection}>
//       <div className="container">
//         {" "}
//         {/* Using global container */}
//         {/* Header */}
//         <div className={styles.header}>
//           <h2 className={styles.sectionTitle}>Newsroom</h2>
//           <button className={styles.viewMoreButton}>
//             View more <ArrowRight className={styles.arrowIcon} />
//           </button>
//         </div>
//         {/* Featured Story Carousel */}
//         <div className={styles.featuredStory}>
//           <div className={styles.featuredImageWrapper}>
//             <img
//               src={featuredStory.image}
//               alt={featuredStory.title}
//               className={styles.imageFull}
//             />
//             <div className={styles.gradientOverlay}></div>
//             <div className={styles.featuredText}>
//               <div className={styles.categoryText}>
//                 {featuredStory.category}
//               </div>
//               <h3 className={styles.featuredTitle}>{featuredStory.title}</h3>
//               <div className={styles.tags}>
//                 {featuredStory.tags.map((tag, index) => (
//                   <span key={index}>
//                     {tag}
//                     {index < featuredStory.tags.length - 1 && ","}
//                   </span>
//                 ))}
//               </div>
//             </div>
//             {/* Carousel Controls */}
//             <div className={styles.carouselControls}>
//               <button className={styles.controlButton}>
//                 <ChevronLeft />
//               </button>
//               <div className={styles.dots}>
//                 <div className={`${styles.dot} ${styles.dotActive}`}></div>
//                 <div className={styles.dot}></div>
//                 <div className={styles.dot}></div>
//               </div>
//               <button className={styles.controlButton}>
//                 <ChevronRight />
//               </button>
//               <button
//                 onClick={() => setIsPlaying(!isPlaying)}
//                 className={styles.controlButton}
//               >
//                 {isPlaying ? <Pause /> : <Play />}
//               </button>
//             </div>
//           </div>
//         </div>
//         {/* News Grid */}
//         <div className={styles.newsGrid}>
//           {/* Sports Story */}
//           <div className={styles.sportsStory}>
//             <img
//               src={sportsStory.image}
//               alt={sportsStory.title}
//               className={styles.sportsImage}
//             />
//             <div className={styles.gradientOverlay}></div>
//             <div className={styles.sportsText}>
//               <div className={styles.categoryText}>
//                 {sportsStory.category} | {sportsStory.date}
//               </div>
//               <h3 className={styles.sportsTitle}>{sportsStory.title}</h3>
//             </div>
//           </div>
//           {/* News Items */}
//           <div className={styles.newsItemsList}>
//             {newsItems.map((item, index) => (
//               <div key={index} className={styles.newsItem}>
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className={styles.newsItemImage}
//                 />
//                 <div className={styles.newsItemText}>
//                   <div className={styles.categoryTextSmall}>
//                     {item.category} | {item.date}
//                   </div>
//                   <h4 className={styles.newsItemTitle}>{item.title}</h4>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Newsroom;

// ??
// import { useEffect, useRef, useState } from "react";
// import styles from "./Newsroom.module.css";

// const slides = [
//   {
//     type: "video",
//     src: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
//     poster: "https://ext.same-assets.com/2463856760/3080777839.jpeg",
//     title:
//       "akvision helps  Shopping Center boost safety, efficiency and customer satisfaction",
//     meta: "Retail, Security and Intelligence, Spain",
//   },
//   {
//     type: "image",
//     src: "https://ext.same-assets.com/2463856760/3773348314.jpeg",
//     title: "Smart campus solutions in action",
//     meta: "Education, AIoT",
//   },
//   {
//     type: "image",
//     src: "https://ext.same-assets.com/2463856760/4036971297.jpeg",
//     title: "Transportation success story",
//     meta: "Transportation, City",
//   },
// ];

// const Chevron = ({ dir }) => (
//   <svg
//     width="22"
//     height="22"
//     viewBox="0 0 24 24"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     aria-hidden
//   >
//     {dir === "left" ? (
//       <path
//         d="M15 18l-6-6 6-6"
//         stroke="#fff"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     ) : (
//       <path
//         d="M9 6l6 6-6 6"
//         stroke="#fff"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     )}
//   </svg>
// );

// export default function Newsroom() {
//   const [index, setIndex] = useState(0);
//   const [playing, setPlaying] = useState(true);
//   const videoRefs = useRef([]);
//   const len = slides.length;

//   const go = (dir) => setIndex((i) => (i + dir + len) % len);
//   const goTo = (i) => setIndex(i);

//   useEffect(() => {
//     // control video playback depending on active index
//     videoRefs.current.forEach((v, i) => {
//       if (!v) return;
//       if (i === index && playing) {
//         v.play().catch(() => {});
//       } else {
//         try {
//           v.pause();
//         } catch (e) {}
//       }
//     });
//   }, [index, playing]);

//   useEffect(() => {
//     if (!playing) return;
//     const id = setInterval(() => setIndex((i) => (i + 1) % len), 6000);
//     return () => clearInterval(id);
//   }, [playing, len]);

//   // compute positions for 3-up effect
//   const order = [(index - 1 + len) % len, index, (index + 1) % len];

//   return (
//     <section className={styles.wrap}>
//       <div className={styles.carousel}>
//         {order.map((idx, pos) => {
//           const s = slides[idx];
//           const isCenter = pos === 1;
//           return (
//             <div
//               key={idx}
//               className={`${styles.slide} ${
//                 isCenter
//                   ? styles.center
//                   : pos === 0
//                   ? styles.left
//                   : styles.right
//               }`}
//             >
//               {s.type === "video" ? (
//                 <video
//                   ref={(el) => (videoRefs.current[idx] = el)}
//                   className={styles.media}
//                   src={s.src}
//                   poster={s.poster}
//                   muted
//                   loop
//                   playsInline
//                 />
//               ) : (
//                 <img className={styles.media} src={s.src} alt="" />
//               )}
//               <div className={styles.overlay}>
//                 <div className={styles.kicker}>Success Story</div>
//                 <h3 className={styles.title}>{s.title}</h3>
//                 <div className={styles.meta}>{s.meta}</div>
//               </div>
//             </div>
//           );
//         })}

//         <button
//           className={`${styles.nav} ${styles.leftBtn}`}
//           aria-label="Previous"
//           onClick={() => go(-1)}
//         >
//           <Chevron dir="left" />
//         </button>
//         <button
//           className={`${styles.nav} ${styles.rightBtn}`}
//           aria-label="Next"
//           onClick={() => go(1)}
//         >
//           <Chevron dir="right" />
//         </button>

//         <div className={styles.controls}>
//           <div className={styles.dots}>
//             {slides.map((_, i) => (
//               <button
//                 key={i}
//                 className={i === index ? styles.dotActive : styles.dot}
//                 onClick={() => goTo(i)}
//                 aria-label={`Go to slide ${i + 1}`}
//               />
//             ))}
//           </div>
//           <button
//             className={styles.play}
//             onClick={() => setPlaying((p) => !p)}
//             aria-label={playing ? "Pause autoplay" : "Play slideshow"}
//           >
//             {playing ? (
//               <svg
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M6 5h4v14H6zM14 5h4v14h-4z" fill="#fff" />
//               </svg>
//             ) : (
//               <svg
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M8 5v14l11-7-11-7z" fill="#fff" />
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// ??
import React, { useRef } from "react";
// Swiper Components & Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

import styles from "./Newsroom.module.css";

import cam1 from "../../assets/14285055_1920_1080_25fps.mp4";
import cam2 from "../../assets/3010403-hd_1920_1080_24fps.mp4";
import cam3 from "../../assets/3719164-hd_1920_1080_24fps.mp4";


// Using reliable demo videos that are guaranteed to work
const videoItems = [
  { id: 1, url: cam1 },
  {
    id: 2,
    url: cam2,
  },
  {
    id: 3,
    url: cam3,
  },
];

const Newsroom = () => {
  const videoRefs = useRef([]);

  // Function to handle mouse enter: play the video
  const handleMouseEnter = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play();
    }
  };

  // Function to handle mouse leave: pause the video
  const handleMouseLeave = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
    }
  };

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
          slidesPerView={"auto"} // THIS IS THE KEY for peek-a-boo
          centeredSlides={true} // THIS IS THE KEY
          spaceBetween={30} // The gap between slides
          navigation={{
            nextEl: `.${styles.swiperButtonNext}`,
            prevEl: `.${styles.swiperButtonPrev}`,
          }}
          className={styles.mySwiper}
        >
          {videoItems.map((item, index) => (
            <SwiperSlide
              key={item.id}
              className={styles.slide}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className={styles.backgroundVideo}
                src={item.url}
                muted
                loop
                playsInline
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* --- The Clean Navigation Arrows --- */}
        <div className={styles.swiperButtonPrev}>&lt;</div>
        <div className={styles.swiperButtonNext}>&gt;</div>
      </div>
    </section>
  );
};

export default Newsroom;
