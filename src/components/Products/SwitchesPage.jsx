import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ProductPage.module.css";
import AnimateOnScroll from "../common/AnimateOnScroll";

import cam1 from "../../assets/close-up-network-cable.jpg";
import cam2 from "../../assets/electrical-cable-energy-technology-equipment-isolated-white.jpg";
import cam3 from "../../assets/usb-cable-plug-isolated-white-background.jpg";
import cam4 from "../../assets/6138mPynu5L.jpg";
import cam5 from "../../assets/71UF8gP7XML._UF1000,1000_QL80_.jpg";

const switchProducts = [
  {
    id: 1,
    name: "8-Port PoE Switch",
    category: "PoE Switches",
    ports: 8,
    desc: "Power up to 8 devices with this compact and efficient PoE switch.",
    // img: "https://picsum.photos/seed/sw1/500/500",
    img: cam5,
    buyNowUrl: "https://kirbgebeya.com/products",
  },
  {
    id: 2,
    name: "4G Industrial Router",
    category: "Routers",
    ports: "N/A",
    desc: "Reliable 4G LTE connectivity for demanding environments.",
    // img: "https://picsum.photos/seed/rt1/500/500",
    img: cam4,
    buyNowUrl: "https://kirbgebeya.com/products",
  },
  {
    id: 3,
    name: "CAT6 Full Copper Cable",
    category: "Cables",
    ports: "N/A",
    desc: "305-meter box of pure copper CAT6 cable for optimal performance.",
    // img: "https://picsum.photos/seed/cb1/500/500",
    img: cam2,
    buyNowUrl: "https://kirbgebeya.com/products",
  },
  {
    id: 4,
    name: "24-inch 4K Monitor",
    category: "Monitors",
    ports: "N/A",
    desc: "Ultra HD monitor for crystal-clear surveillance footage.",
    // img: "https://picsum.photos/seed/mon1/500/500",
    img: cam3,
    buyNowUrl: "https://kirbgebeya.com/products",
  },
];

const SwitchesPage = () => {
  const [activeProduct, setActiveProduct] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [portFilter, setPortFilter] = useState("All");

  const filteredProducts = switchProducts.filter((product) => {
    const categoryMatch =
      categoryFilter === "All" || product.category === categoryFilter;
    const portMatch =
      portFilter === "All" || product.ports === parseInt(portFilter);
    return (
      categoryMatch && (product.category === "PoE Switches" ? portMatch : true)
    );
  });

  return (
    <div className={styles.productPage}>
      <section
        className={styles.heroSection}
        style={{
          backgroundImage:
            "url('https://picsum.photos/seed/switch-hero/1920/1080')",
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
            Switches & Accessories
          </motion.h1>
        </div>
      </section>
      <div className="container">
        <AnimateOnScroll>
          <section className={styles.introSection}>
            <p>
              Build a robust foundation for your security network with our
              high-performance switches, routers, cables, and other essential
              accessories.
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
              <option value="PoE Switches">PoE Switches</option>
              <option value="Routers">Routers</option>
              <option value="Cables">Cables</option>
              <option value="Monitors">Monitors</option>
            </select>
            <select
              value={portFilter}
              onChange={(e) => setPortFilter(e.target.value)}
            >
              <option value="All">All Ports (Switches)</option>
              <option value="4">4-Port</option>
              <option value="8">8-Port</option>
              <option value="16">16-Port</option>
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
export default SwitchesPage;
