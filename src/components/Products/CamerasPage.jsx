import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ProductPage.module.css";
import AnimateOnScroll from "../common/AnimateOnScroll";

import cam1 from "../../assets/Picsart_25-08-22_09-59-03-985.jpg";
import cam2 from "../../assets/Picsart_25-08-22_10-05-50-045.jpg";
import cam3 from "../../assets/Picsart_25-08-22_10-02-00-821.jpg";
import cam4 from "../../assets/Picsart_25-08-22_10-07-23-381.jpg";
import cam5 from "../../assets/Picsart_25-08-22_10-00-40-701.jpg";
import cam6 from "../../assets/Picsart_25-08-22_10-01-18-095.jpg";



const cameraProducts = [
  {
    id: 1,
    name: "Analog Bullet Camera",
    category: "Analog Cameras",
    useCase: "Outdoor",
    desc: "Reliable and cost-effective for traditional CCTV setups.",
    // img: "https://picsum.photos/seed/cam1/500/500",
    img: cam1,
    buyNowUrl: "https://kirbgebeya.com/products",
  },
  {
    id: 2,
    name: "IP Dome Camera",
    category: "IP Cameras",
    useCase: "Indoor",
    desc: "Superior image clarity and remote access capabilities.",
    // img: "https://picsum.photos/seed/cam2/500/500",
    img: cam2,
    buyNowUrl: "https://kirbgebeya.com/products",
  },
  {
    id: 3,
    name: "Wireless PTZ Camera",
    category: "Wireless Cameras",
    useCase: "Outdoor",
    desc: "Flexible installation with pan-tilt-zoom functionality.",
    // img: "https://picsum.photos/seed/cam3/500/500",
    img: cam3,
    buyNowUrl: "https://kirbgebeya.com/products",
  },
  {
    id: 4,
    name: "Solar Powered Camera",
    category: "Solar Cameras",
    useCase: "Outdoor",
    desc: "Eco-friendly solution for remote area surveillance.",
    // img: "https://picsum.photos/seed/cam4/500/500",
    img: cam4,
    buyNowUrl: "https://kirbgebeya.com/products",
  },
  {
    id: 5,
    name: "Dual-Lens Dash Cam",
    category: "Dash Cameras",
    useCase: "Vehicle",
    desc: "Capture both the road ahead and the cabin interior.",
    // img: "https://picsum.photos/seed/cam5/500/500",
    img: cam5,
    buyNowUrl: "https://kirbgebeya.com/products",
  },
  {
    id: 6,
    name: "4K PTZ Dome",
    category: "PTZ Cameras",
    useCase: "Indoor",
    desc: "Ultra HD resolution with powerful zoom and smart tracking.",
    // img: "https://picsum.photos/seed/cam6/500/500",
    img: cam6,
    buyNowUrl: "https://kirbgebeya.com/products",
  },
];

const CamerasPage = () => {
  const [activeProduct, setActiveProduct] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [useCaseFilter, setUseCaseFilter] = useState("All");

  const filteredProducts = cameraProducts.filter((product) => {
    const categoryMatch =
      categoryFilter === "All" || product.category === categoryFilter;
    const useCaseMatch =
      useCaseFilter === "All" || product.useCase === useCaseFilter;
    return categoryMatch && useCaseMatch;
  });

  return (
    <div className={styles.productPage}>
      <section
        className={styles.heroSection}
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/cctv-security-camera-dark-background_840989-5159.jpg')",
        }}
      >
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroTitle}
          >
            Cameras
          </motion.h1>
        </div>
      </section>
      <div className="container">
        <AnimateOnScroll>
          <section className={styles.introSection}>
            <p>
              Experience superior image clarity and reliability with our diverse
              range of cameras. From traditional analog to advanced IP
              solutions, we provide the vision you need to secure any
              environment.
            </p>
          </section>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className={styles.filterBar}>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Analog Cameras">Analog Cameras</option>
              <option value="IP Cameras">IP Cameras</option>
              <option value="Wireless Cameras">Wireless Cameras</option>
              <option value="Dome Cameras">Dome Cameras</option>
              <option value="Dash Cameras">Dash Cameras</option>
              <option value="PTZ Cameras">PTZ Cameras</option>
              <option value="Solar Cameras">Solar Cameras</option>
            </select>
            <select
              value={useCaseFilter}
              onChange={(e) => setUseCaseFilter(e.target.value)}
            >
              <option value="All">All Use Cases</option>
              <option value="Indoor">Indoor</option>
              <option value="Outdoor">Outdoor</option>
              <option value="Vehicle">Vehicle</option>
            </select>
          </div>
        </AnimateOnScroll>
        <div className={styles.productGrid}>
          {filteredProducts.map((product, index) => (
            <AnimateOnScroll key={product.id} delay={index * 0.05}>
              <div className={styles.productCard}>
                <div className={styles.imageWrapper}>
                  <img src={product.img} alt={product.name} />
                  <button
                    className={styles.quickViewButton}
                    onClick={() => setActiveProduct(product)}
                  >
                    Quick View
                  </button>
                </div>
                <div className={styles.cardContent}>
                  <p className={styles.cardCategory}>{product.category}</p>
                  <h3 className={styles.cardTitle}>{product.name}</h3>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {activeProduct && (
          <motion.div
            className={styles.modalOverlay}
            onClick={() => setActiveProduct(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <img
                src={activeProduct.img}
                alt={activeProduct.name}
                className={styles.modalImage}
              />
              <div className={styles.modalText}>
                <h2>{activeProduct.name}</h2>
                <p>{activeProduct.desc}</p>
                <a
                  href={activeProduct.buyNowUrl}
                  className={styles.buyNowButton}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy Now on Kir Gebeya
                </a>
              </div>
              <button
                className={styles.closeModalButton}
                onClick={() => setActiveProduct(null)}
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default CamerasPage;
