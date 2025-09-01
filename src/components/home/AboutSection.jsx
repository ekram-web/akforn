import React from "react";
import { motion } from "framer-motion";
import styles from "./AboutSection.module.css"; // We will create this new CSS file

const aboutItems = [
  {
    name: "Our Mission",
    desc: "Pioneering the future of security with innovative technology.",
    imgUrl: "https://picsum.photos/seed/about1/800/600",
  },
  {
    name: "Global Presence",
    desc: "Trusted by clients in over 50 countries worldwide.",
    imgUrl: "https://picsum.photos/seed/about2/800/600",
  },
  {
    name: "Expert Team",
    desc: "A dedicated team of professionals with decades of experience.",
    imgUrl: "https://picsum.photos/seed/about3/800/600",
  },
  {
    name: "Our Commitment",
    desc: "Unwavering dedication to quality, reliability, and support.",
    imgUrl: "https://picsum.photos/seed/about4/800/600",
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className={styles.sectionTitle}>
            {/* <span>About</span> */}
            <span>AK VISTION</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            More than a company, we are your partners in protection.
          </p>
        </motion.div>

        <motion.div
          className={styles.aboutGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {aboutItems.map((item) => (
            <motion.a
              href="/about"
              key={item.name}
              className={styles.aboutCard}
              variants={itemVariants}
            >
              <div className={styles.cardBackground}>
                <img src={item.imgUrl} alt={item.name} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.name}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
                <div className={styles.cardLink}>
                  Learn More <span>→</span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

// ?
// import styles from "./AboutSection.module.css";

// export default function AboutSection() {
//   return (
//     <section className={styles.section}>
//       <div className={styles.container}>
//         <div className={styles.copy}>
//           <h2>About akvision</h2>
//           <p>
//             akvision is a world-leading IoT solution provider with video as its
//             core competency. We advance the core technologies of audio and video
//             encoding, video image processing, and related data storage, as well
//             as futuristic technologies such as cloud computing, big data, and
//             deep learning.
//           </p>
//         </div>
//         <div className={styles.media}>
//           <img
//             src="https://ext.same-assets.com/2463856760/537603209.jpeg"
//             alt="About"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
