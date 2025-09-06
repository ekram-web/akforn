// import React, { useState } from 'react';
// import styles from './Software.module.css';
// import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

// function Software() {
//   const [searchTerm, setSearchTerm] = useState('');
  
//   const softwareItems = [
//     { id: 'Software A', description: 'Description for Software A.', version: '1.0.0', date: '2023-01-01' },
//     { id: 'Software B', description: 'Description for Software B.', version: '2.1.0', date: '2023-02-15' },
//     { id: 'Software C', description: 'Description for Software C.', version: '3.0.0', date: '2023-03-20' },
//   ];

//   return (
//     <div className={styles.softwarePageContainer}>
//       <div className={styles.softwareMainContent}>
//         <div className={styles.softwareHeader}>
//           <h1 className={styles.softwareTitle}>Software</h1>
//           <div className={styles.searchSection}>
//             <input 
//               type="text" 
//               placeholder="Search: Type key words here..." 
//               className={styles.searchInput}
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <button className={styles.searchButton}>
//               <MagnifyingGlassIcon className={styles.searchIcon} />
//             </button>
//           </div>
//         </div>

//         <div className={styles.softwareList}>
//           {(() => {
//             const filteredItems = softwareItems.filter(item => 
//               item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
//               item.description.toLowerCase().includes(searchTerm.toLowerCase())
//             );
            
//             if (filteredItems.length === 0 && searchTerm) {
//               return (
//                 <div className={styles.noResults}>
//                   <p>No software found matching your search criteria.</p>
//                   <p className={styles.noResultsSubtext}>The software you're looking for is currently not available. Please try a different search term or check back later.</p>
//                 </div>
//               );
//             }
            
//             return filteredItems.map((item) => (
//             <div key={item.id} className={styles.softwareItem}>
//               <img src="/path/to/your/software-icon.png" alt="Software Icon" className={styles.softwareIcon} />
//               <div className={styles.softwareDetails}>
//                 <h2 className={styles.softwareName}>{item.id}</h2>
//                 <p className={styles.softwareInfo}>{item.version} | {item.date}</p>
//                 <p className={styles.softwareDescription}>{item.description}</p>
//               </div>
//               <button className={styles.downloadButton}>
//                 <span>Download</span>
//                 <span className={styles.downloadIcon}>&#x2193;</span>
//               </button>
//             </div>
//             ));
//           })()}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Software;


// ??
import React, { useState, useEffect } from "react";
import styles from "./Software.module.css"; // Or a shared CSS file
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import apiClient from "../../../api/apiClient";

const Software = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const storageUrl =
    import.meta.env.VITE_API_STORAGE_URL || "http://127.0.0.1:8000/storage";

  useEffect(() => {
    const fetchSoftware = async () => {
      try {
        const response = await apiClient.get("/support-files?type=Software");
        setItems(response.data);
      } catch (err) {
        setError("Failed to load software files. Please try again later.");
        console.error("Fetch Software Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSoftware();
  }, []);

  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.description &&
        item.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (loading)
    return (
      <div className={styles.softwarePageContainer}>
        <p>Loading Software...</p>
      </div>
    );
  if (error)
    return (
      <div className={styles.softwarePageContainer}>
        <p style={{ color: "red" }}>{error}</p>
      </div>
    );

  return (
    <div className={styles.softwarePageContainer}>
      <div className={styles.softwareMainContent}>
        <div className={styles.softwareHeader}>
          <h1 className={styles.softwareTitle}>Software</h1>
          <div className={styles.searchSection}>
            <input
              type="text"
              placeholder="Search software..."
              className={styles.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className={styles.searchButton}>
              <MagnifyingGlassIcon className={styles.searchIcon} />
            </button>
          </div>
        </div>

        <div className={styles.softwareList}>
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className={styles.softwareItem}>
                <div className={styles.softwareDetails}>
                  <h2 className={styles.softwareName}>{item.name}</h2>
                  <p className={styles.softwareInfo}>
                    {item.version} | {item.release_date}
                  </p>
                  <p className={styles.softwareDescription}>
                    {item.description}
                  </p>
                </div>
                <a
                  href={`${storageUrl}/${item.file_url}`}
                  className={styles.downloadButton}
                  download
                >
                  <span>Download</span>
                  <span className={styles.downloadIcon}>&#x2193;</span>
                </a>
              </div>
            ))
          ) : (
            <div className={styles.noResults}>
              <p>No software found matching your search criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Software;