import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./ProductsPage.module.css";
import AnimateOnScroll from "../components/common/AnimateOnScroll";

const categories = [
  {
    name: "Cameras",
    path: "/products/cameras",
    img: "https://picsum.photos/seed/cat-cam/800/600",
  },
  {
    name: "Recorders & Storage",
    path: "/products/recorders",
    img: "https://picsum.photos/seed/cat-rec/800/600",
  },
  {
    name: "Switches & Accessories",
    path: "/products/switches",
    img: "https://picsum.photos/seed/cat-sw/800/600",
  },
  {
    name: "Systems & Smart Devices",
    path: "/products/systems",
    img: "https://picsum.photos/seed/cat-sys/800/600",
  },
];

const ProductsPage = () => {
  return (
    <div className={styles.page}>
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroTitle}
          >
            Our Products
          </motion.h1>
        </div>
      </section>

      <div className="container">
        <AnimateOnScroll>
          <section className={styles.introSection}>
            <p>
              Explore our comprehensive range of security and surveillance
              solutions, engineered for reliability and performance in any
              environment.
            </p>
          </section>
        </AnimateOnScroll>

        <div className={styles.categoryGrid}>
          {categories.map((cat, index) => (
            <AnimateOnScroll key={cat.name} delay={index * 0.1}>
              <Link to={cat.path} className={styles.categoryCard}>
                <img
                  src={cat.img}
                  alt={cat.name}
                  className={styles.cardImage}
                />
                <div className={styles.cardOverlay}></div>
                <h3 className={styles.cardTitle}>{cat.name}</h3>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
