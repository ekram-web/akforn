// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import styles from "./ProductPage.module.css";
// import AnimateOnScroll from "../common/AnimateOnScroll";


// import cam1 from "../../assets/dvr4.jpeg";
// import cam2 from "../../assets/dvr5.jpeg";
// import cam3 from "../../assets/dvr1.jpeg";
// import cam4 from "../../assets/dvr3.jpeg";
// import cam5 from "../../assets/drv2.jpeg";
// const recorderProducts = [
//   {
//     id: 1,
//     name: "8-Channel NVR",
//     category: "NVR",
//     channels: 8,
//     desc: "High-performance recording with 4K output.",
//     // img: "https://picsum.photos/seed/nvr1/500/500",
//     img: cam4,
//     buyNowUrl: "https://kirbgebeya.com/products",
//   },
//   {
//     id: 2,
//     name: "16-Channel Hybrid DVR",
//     category: "DVR",
//     channels: 16,
//     desc: "Supports both analog and IP cameras for flexible upgrades.",
//     // img: "https://picsum.photos/seed/dvr1/500/500",
//     img: cam2,
//     buyNowUrl: "https://kirbgebeya.com/products",
//   },
//   {
//     id: 3,
//     name: "12TB Surveillance Hard Drive",
//     category: "Storage",
//     channels: "N/A",
//     desc: "Engineered for 24/7 reliability and data integrity.",
//     // img: "https://picsum.photos/seed/hdd1/500/500",
//     img: cam3,
//     buyNowUrl: "https://kirbgebeya.com/products",
//   },
//   {
//     id: 4,
//     name: "32-Channel AI NVR",
//     category: "NVR",
//     channels: 32,
//     desc: "Advanced AI features for smart search and analytics.",
//     // img: "https://picsum.photos/seed/nvr2/500/500",
//     img: cam1,
//     buyNowUrl: "https://kirbgebeya.com/products",
//   },
// ];

// const RecordersPage = () => {
//   const [activeProduct, setActiveProduct] = useState(null);
//   const [categoryFilter, setCategoryFilter] = useState("All");
//   const [channelFilter, setChannelFilter] = useState("All");

//   const filteredProducts = recorderProducts.filter((product) => {
//     const categoryMatch =
//       categoryFilter === "All" || product.category === categoryFilter;
//     const channelMatch =
//       channelFilter === "All" || product.channels === parseInt(channelFilter);
//     return (
//       categoryMatch && (product.category !== "Storage" ? channelMatch : true)
//     );
//   });

//   return (
//     <div className={styles.productPage}>
//       <section
//         className={styles.heroSection}
//         style={{
//           backgroundImage:
//             "url('https://media.istockphoto.com/id/477723398/es/foto/grabador-de-v%C3%ADdeo-digital-dvr-port%C3%A1til.jpg?s=612x612&w=0&k=20&c=ZwCa43hNPtgD9qJ1VPVUQMy2SJDkpeYNEac6FD0AkV8=')",
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
//             Recorders & Storage
//           </motion.h1>
//         </div>
//       </section>
//       <div className="container">
//         <AnimateOnScroll>
//           <section className={styles.introSection}>
//             <p>
//               Optimize your recording and storage with our reliable NVRs, DVRs,
//               and high-capacity hard drives, ensuring you capture and retain
//               every critical moment.
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
//               <option value="NVR">NVR</option>
//               <option value="DVR">DVR</option>
//               <option value="Storage">Storage</option>
//             </select>
//             <select
//               value={channelFilter}
//               onChange={(e) => setChannelFilter(e.target.value)}
//             >
//               <option value="All">All Channels</option>
//               <option value="4">4 Channel</option>
//               <option value="8">8 Channel</option>
//               <option value="16">16 Channel</option>
//               <option value="32">32 Channel</option>
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
// export default RecordersPage;


// ??
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ProductPage.module.css";
import AnimateOnScroll from "../common/AnimateOnScroll";
import apiClient from "../../api/apiClient";

const RecordersPage = () => {
  const [pageContent, setPageContent] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [activeProduct, setActiveProduct] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [channelFilter, setChannelFilter] = useState("All");

  const storageUrl =
    import.meta.env.VITE_API_STORAGE_URL || "http://127.0.0.1:8000/storage";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [contentRes, productsRes] = await Promise.all([
          apiClient.get("/product-pages/recorders"),
          apiClient.get("/products?category=Recorders"),
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
    // Ensure channelFilter is treated as a string for comparison if product.channels is a number
    const channelMatch =
      channelFilter === "All" || String(product.channels) === channelFilter;
    return categoryMatch && channelMatch;
  });

  // Get unique, non-null values for filters
  const uniqueSubCategories = [
    ...new Set(products.map((p) => p.sub_category).filter(Boolean)),
  ];
  const uniqueChannels = [
    ...new Set(products.map((p) => p.channels).filter(Boolean)),
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
              value={channelFilter}
              onChange={(e) => setChannelFilter(e.target.value)}
            >
              <option value="All">All Channels</option>
              {uniqueChannels
                .sort((a, b) => a - b)
                .map((ch) => (
                  <option key={ch} value={ch}>
                    {ch} Channel
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

export default RecordersPage;