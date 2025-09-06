// import React from "react";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";

// import styles from "./About.module.css";
// import AnimateOnScroll from "../common/AnimateOnScroll";
// import Counter from "../common/Counter"; // <-- IMPORT THE NEW COUNTER

// import "swiper/css";
// import "swiper/css/navigation";

// import videoSource from "../../assets/14285055_1920_1080_25fps.mp4";

// import cam1 from "../../assets/DSC02547.jpg";
// import cam2 from "../../../public/10001.jpg";
// import cam3 from "../../../public/10002.png";
// import cam4 from "../../../public/10003.jpg";
// import cam5 from "../../../public/10005.jpg";
// import cam6 from "../../../public/io.jpg";
// import cam7 from "../../../public/10004.png";

// // Data with the '+' removed from the value
// const stats = [
//   { value: 15, label: "Years Of Experience" },
//   { value: 600, label: "Success Projects" },
//   { value: 40, label: "Team Members" },
//   { value: 500, label: "Clients Satisfactions" },
// ];
// const team = [
//   {
//     name: "William Lucas",
//     title: "Co Founder",
//     img: "https://picsum.photos/seed/ceo/400/500",
//   },
//   {
//     name: "Daniel Smith",
//     title: "Senior Architect",
//     img: "https://picsum.photos/seed/cto/400/500",
//   },
//   {
//     name: "Dymond Nisha",
//     title: "Chief Executive",
//     img: "https://picsum.photos/seed/coo/400/500",
//   },
//   {
//     name: "Isabella Rossi",
//     title: "Lead R&D Engineer",
//     img: "https://picsum.photos/seed/eng/400/500",
//   },
// ];
// // Corrected partners array
// const partners = [
//   { name: "Zemzem", src: cam2 },
//   { name: "Boston Spa", src: cam3 },
//   { name: "Adika Taxi", src: cam4 },
//   { name: "DH Geda", src: cam5 },
//   { name: "Garad MAll", src: cam7 },
//   { name: "Addis Ababa Police", src: cam6 },
// ];

// const About = () => {
//   return (
//     <div className={styles.aboutPage}>
//       {/* 1. ELEGANT HERO SECTION */}
//       <section className={styles.heroSection}>
//         <div className={styles.heroImage}></div>
//         <div className="container">
//           <motion.h1
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//           >
//             About Us
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.2 }}
//           >
//             Home / About Us
//           </motion.p>
//         </div>
//       </section>

//       {/* 2. INSPIRING SPACES SECTION */}
//       <section className={styles.inspiringSection}>
//         <div className={`container ${styles.inspiringGrid}`}>
//           <AnimateOnScroll className={styles.inspiringImages}>
//             <img
//               // src="https://picsum.photos/seed/about-main/400/600"
//               src={cam1}
//               alt="Modern Building"
//               className={styles.img1}
//             />
//             {/* <img
//               src="https://picsum.photos/seed/about-sub/400/300"
//               alt="Security Blueprint"
//               className={styles.img2}
//             /> */}
//           </AnimateOnScroll>
//           <AnimateOnScroll className={styles.inspiringText} delay={0.2}>
//             <p className={styles.preTitle}>About Company</p>
//             <h2>Creating Inspiring Security Solutions</h2>
//             <p className={styles.description}>
//               AK VISTION is a term used to refer to an organized collection of
//               technology, systems, and processes engineered to provide
//               unparalleled security and peace of mind.
//             </p>
//             <ul className={styles.checklist}>
//               <li>✓ Advanced AI Analytics</li>
//               <li>✓ Robust & Reliable Hardware</li>
//               <li>✓ Comprehensive System Integration</li>
//             </ul>
//             <a href="/contact" className={styles.readMoreButton}>
//               Read More →
//             </a>
//           </AnimateOnScroll>
//         </div>
//       </section>

//       {/* 3. WORKING PROCESS SECTION */}
//       <section className={styles.processSection}>
//         <div className="container">
//           <AnimateOnScroll>
//             <p className={styles.preTitle}>Working Process</p>
//             <h2>Our Working Process</h2>
//           </AnimateOnScroll>
//           <div className={styles.processGrid}>
//             <AnimateOnScroll className={styles.processItem} delay={0.1}>
//               <div className={styles.processNumber}>01</div>
//               <h3>Our Vision</h3>
//               <p>
//                 To be the global leader in security, creating a safer world
//                 through continuous innovation.
//               </p>
//             </AnimateOnScroll>
//             <AnimateOnScroll className={styles.processItem} delay={0.2}>
//               <div className={styles.processNumber}>02</div>
//               <h3>Our Mission</h3>
//               <p>
//                 To provide state-of-the-art, reliable, and user-friendly systems
//                 that protect what matters most.
//               </p>
//             </AnimateOnScroll>
//             <AnimateOnScroll className={styles.processItem} delay={0.3}>
//               <div className={styles.processNumber}>03</div>
//               <h3>Our Goal</h3>
//               <p>
//                 To deliver exceptional service and support, ensuring total
//                 client satisfaction and peace of mind.
//               </p>
//             </AnimateOnScroll>
//           </div>
//         </div>
//       </section>

//       {/* 4. PROMO VIDEO SECTION */}
//       <section className={styles.videoSection}>
//         <div className="container">
//           <AnimateOnScroll>
//             <div className={styles.videoPlayer}>
//               <video
//                 // src="https://www.w3schools.com/html/mov_bbb.mp4"
//                 src={videoSource}
//                 poster="https://picsum.photos/seed/video-poster/1200/675"
//                 controls
//               />
//             </div>
//           </AnimateOnScroll>
//         </div>
//       </section>

//       {/* 5. STATS COUNTER SECTION (Now with animated numbers) */}
//       <section className={styles.statsSection}>
//         <div className={`container ${styles.statsGrid}`}>
//           {stats.map((stat, index) => (
//             <AnimateOnScroll
//               key={stat.label}
//               className={styles.statItem}
//               delay={index * 0.1}
//             >
//               <Counter value={stat.value}>+</Counter>
//               <p>{stat.label}</p>
//             </AnimateOnScroll>
//           ))}
//         </div>
//       </section>

//       {/* 6. MEET THE TEAM SLIDER (With bug fix) */}
//       <section className={styles.teamSection}>
//         <div className="container">
//           <AnimateOnScroll>
//             <p className={styles.preTitle}>Our Team</p>
//             <h2>Meet Our Highly Professional Team</h2>
//           </AnimateOnScroll>
//           <div className={styles.teamSliderContainer}>
//             <Swiper
//               modules={[Navigation]}
//               spaceBetween={30}
//               slidesPerView={3}
//               navigation={{
//                 nextEl: `.${styles.swiperButtonNext}`,
//                 prevEl: `.${styles.swiperButtonPrev}`,
//               }}
//               className={styles.teamSwiper} // <-- THE BUG FIX
//               breakpoints={{
//                 // Responsive breakpoints for the slider
//                 320: { slidesPerView: 1, spaceBetween: 20 },
//                 768: { slidesPerView: 2, spaceBetween: 30 },
//                 1024: { slidesPerView: 3, spaceBetween: 30 },
//               }}
//             >
//               {team.map((member) => (
//                 <SwiperSlide key={member.name}>
//                   <div className={styles.teamMember}>
//                     <div className={styles.memberImage}>
//                       <img src={member.img} alt={member.name} />
//                       <div className={styles.memberOverlay}>
//                         <h3>{member.name}</h3>
//                         <p>{member.title}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//             <div className={styles.swiperButtonPrev}>←</div>
//             <div className={styles.swiperButtonNext}>→</div>
//           </div>
//         </div>
//       </section>

//       {/* 7. PARTNER LOGO MARQUEE */}
//       <section className={styles.partnerSection}>
//         <div className={styles.marquee}>
//           <div className={styles.marqueeTrack}>
//             {[...partners, ...partners].map((p, i) => (
//               <div key={i} className={styles.partnerLogo}>
//                 <img src={p.src} alt={p.name} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;


// ???
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

      {/* 7. PARTNER LOGO MARQUEE (Dynamic) */}
      <section className={styles.partnerSection}>
        <div className={styles.marquee}>
          <div className={styles.marqueeTrack}>
            {[...partners, ...partners].map((p, i) => (
              <div key={`${p.id}-${i}`} className={styles.partnerLogo}>
                <img src={`${storageUrl}/${p.logo_url}`} alt={p.name} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;