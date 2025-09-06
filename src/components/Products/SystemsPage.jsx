// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import styles from "./ProductPage.module.css";
// import AnimateOnScroll from "../common/AnimateOnScroll";

// import cam1 from "../../assets/jakub-zerdzicki-GpNaHFeN5bk-unsplash.jpg";
// import cam2 from "../../assets/yosuke-ota-2uyCMNGYhnM-unsplash.jpg";

// const systemProducts = [
//   {
//     id: 1,
//     name: "Biometric Access Control",
//     category: "Access Control",
//     application: "Corporate",
//     desc: "Secure your premises with advanced fingerprint and facial recognition.",
//     // img: "https://picsum.photos/seed/ac1/500/500",

//     img: cam1,
//     buyNowUrl: "https://kirbgebeya.com/products",
//   },
//   {
//     id: 2,
//     name: "Smart Time Attendance",
//     category: "Time Attendance",
//     application: "Workforce",
//     desc: "Automate employee check-in and manage records with ease.",
//     // img: "https://picsum.photos/seed/ta1/500/500",
//     img: cam2,
//     buyNowUrl: "https://kirbgebeya.com/products",
//   },
//   {
//     id: 3,
//     name: "Integrated Fire Alarm System",
//     category: "Fire Alarms",
//     application: "Safety",
//     desc: "Early detection and automated alerts for maximum protection.",
//     // img: "https://picsum.photos/seed/fa1/500/500",
// img: cam1,
//     buyNowUrl: "https://kirbgebeya.com/products",
//   },
//   {
//     id: 4,
//     name: "Smart Home Hub",
//     category: "Smart Devices",
//     application: "Residential",
//     desc: "Control all your smart security devices from a single, intuitive interface.",
//     // img: "https://picsum.photos/seed/sh1/500/500",
//     img: cam2,
//     buyNowUrl: "https://kirbgebeya.com/products",
//   },
// ];

// const SystemsPage = () => {
//   const [activeProduct, setActiveProduct] = useState(null);
//   const [categoryFilter, setCategoryFilter] = useState("All");
//   const [applicationFilter, setApplicationFilter] = useState("All");

//   const filteredProducts = systemProducts.filter((product) => {
//     const categoryMatch =
//       categoryFilter === "All" || product.category === categoryFilter;
//     const applicationMatch =
//       applicationFilter === "All" || product.application === applicationFilter;
//     return categoryMatch && applicationMatch;
//   });

//   return (
//     <div className={styles.productPage}>
//       <section
//         className={styles.heroSection}
//         style={{
//           backgroundImage:
//             "url('https://picsum.photos/seed/system-hero/1920/1080')",
//         }}
//       >
//         <div className={styles.heroOverlay}></div>
//         <div className="container">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className={styles.heroTitle}
//           >
//             Systems & Smart Devices
//           </motion.h1>
//         </div>
//       </section>
//       <div className="container">
//         <AnimateOnScroll>
//           <section className={styles.introSection}>
//             <p>
//               Integrate and automate your security with our advanced systems and
//               smart devices, from access control to comprehensive fire alarm
//               solutions.
//             </p>
//           </section>
//         </AnimateOnScroll>
//         <AnimateOnScroll>
//           <div className={styles.filterBar}>
//             <select
//               value={categoryFilter}
//               onChange={(e) => setCategoryFilter(e.target.value)}
//             >
//               <option value="All">All Categories</option>
//               <option value="Access Control">Access Control</option>
//               <option value="Time Attendance">Time Attendance</option>
//               <option value="Fire Alarms">Fire Alarms</option>
//               <option value="Smart Devices">Smart Devices</option>
//             </select>
//             <select
//               value={applicationFilter}
//               onChange={(e) => setApplicationFilter(e.target.value)}
//             >
//               <option value="All">All Applications</option>
//               <option value="Corporate">Corporate</option>
//               <option value="Workforce">Workforce</option>
//               <option value="Safety">Safety</option>
//               <option value="Residential">Residential</option>
//             </select>
//           </div>
//         </AnimateOnScroll>
//         <div className={styles.productGrid}>
//           {filteredProducts.map((product, index) => (
//             <AnimateOnScroll key={product.id} delay={index * 0.05}>
//               <div className={styles.productCard}>
//                 <div className={styles.imageWrapper}>
//                   <img src={product.img} alt={product.name} />
//                   <button
//                     className={styles.quickViewButton}
//                     onClick={() => setActiveProduct(product)}
//                   >
//                     Quick View
//                   </button>
//                 </div>
//                 <div className={styles.cardContent}>
//                   <p className={styles.cardCategory}>{product.category}</p>
//                   <h3 className={styles.cardTitle}>{product.name}</h3>
//                 </div>
//               </div>
//             </AnimateOnScroll>
//           ))}
//         </div>
//       </div>
//       <AnimatePresence>
//         {activeProduct && (
//           <motion.div
//             className={styles.modalOverlay}
//             onClick={() => setActiveProduct(null)}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className={styles.modalContent}
//               onClick={(e) => e.stopPropagation()}
//               initial={{ opacity: 0, y: 50, scale: 0.95 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: 50, scale: 0.95 }}
//               transition={{ duration: 0.3, ease: "easeOut" }}
//             >
//               <img
//                 src={activeProduct.img}
//                 alt={activeProduct.name}
//                 className={styles.modalImage}
//               />
//               <div className={styles.modalText}>
//                 <h2>{activeProduct.name}</h2>
//                 <p>{activeProduct.desc}</p>
//                 <a
//                   href={activeProduct.buyNowUrl}
//                   className={styles.buyNowButton}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Buy Now on Kir Gebeya
//                 </a>
//               </div>
//               <button
//                 className={styles.closeModalButton}
//                 onClick={() => setActiveProduct(null)}
//               >
//                 ×
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };
// export default SystemsPage;
// ??

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ProductPage.module.css";
import AnimateOnScroll from "../common/AnimateOnScroll";
import apiClient from "../../api/apiClient";

const SystemsPage = () => {
  const [pageContent, setPageContent] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [activeProduct, setActiveProduct] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [applicationFilter, setApplicationFilter] = useState("All");

  const storageUrl =
    import.meta.env.VITE_API_STORAGE_URL || "http://127.0.0.1:8000/storage";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [contentRes, productsRes] = await Promise.all([
          apiClient.get("/product-pages/systems"),
          apiClient.get("/products?category=Systems"),
        ]);
        setPageContent(contentRes.data);
        setProducts(productsRes.data);
      } catch (err) {
        setError("Failed to load page data. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      categoryFilter === "All" || product.sub_category === categoryFilter;
    const applicationMatch =
      applicationFilter === "All" || product.application === applicationFilter;
    return categoryMatch && applicationMatch;
  });

  // Get unique, non-null values for filters
  const uniqueSubCategories = [
    ...new Set(products.map((p) => p.sub_category).filter(Boolean)),
  ];
  const uniqueApplications = [
    ...new Set(products.map((p) => p.application).filter(Boolean)),
  ];

  if (loading)
    return (
      <div style={{ padding: "4rem", textAlign: "center" }}>
        Loading Products...
      </div>
    );
  if (error)
    return (
      <div style={{ padding: "4rem", textAlign: "center", color: "red" }}>
        {error}
      </div>
    );

  return (
    <div className={styles.productPage}>
      <section
        className={styles.heroSection}
        style={{
          backgroundImage: `url(${storageUrl}/${pageContent?.hero_image_url})`,
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
            {pageContent?.title}
          </motion.h1>
        </div>
      </section>
      <div className="container">
        <AnimateOnScroll>
          <section className={styles.introSection}>
            <p>{pageContent?.intro_text}</p>
          </section>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className={styles.filterBar}>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="All">All Categories</option>
              {uniqueSubCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <select
              value={applicationFilter}
              onChange={(e) => setApplicationFilter(e.target.value)}
            >
              <option value="All">All Applications</option>
              {uniqueApplications.map((app) => (
                <option key={app} value={app}>
                  {app}
                </option>
              ))}
            </select>
          </div>
        </AnimateOnScroll>
        <div className={styles.productGrid}>
          {filteredProducts.map((product, index) => (
            <AnimateOnScroll key={product.id} delay={index * 0.05}>
              <div className={styles.productCard}>
                <div className={styles.imageWrapper}>
                  <img
                    src={`${storageUrl}/${product.image_url}`}
                    alt={product.name}
                  />
                  <button
                    className={styles.quickViewButton}
                    onClick={() => setActiveProduct(product)}
                  >
                    Quick View
                  </button>
                </div>
                <div className={styles.cardContent}>
                  <p className={styles.cardCategory}>{product.sub_category}</p>
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
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
            >
              <img
                src={`${storageUrl}/${activeProduct.image_url}`}
                alt={activeProduct.name}
                className={styles.modalImage}
              />
              <div className={styles.modalText}>
                <h2>{activeProduct.name}</h2>
                <p>{activeProduct.description}</p>
                <a
                  href={activeProduct.buy_now_url}
                  className={styles.buyNowButton}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy Now
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

export default SystemsPage;