// import React, { useState } from 'react';
// import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
// import styles from './SDK.module.css';

// const SDK = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const sdkItems = [
//     {
//       name: 'Device Network SDK_Win64',
//       info: 'V6.1.9.48 | 338.84MB | 2023/06/14',
//       description: 'Used for secondary development based on device network SDK. Supports remote accessing and controlling Hikvision...'
//     },
//     {
//       name: 'Device Network SDK_Win32',
//       info: 'V6.1.9.48 | 292.34MB | 2023/06/14',
//       description: 'Used for secondary development based on device network SDK. Supports remote accessing and controlling Hikvision...'
//     },
//     {
//       name: 'Device Network SDK_Linux32',
//       info: 'V6.1.9.48 | 62.98MB | 2023/06/14',
//       description: 'Used for secondary development based on device network SDK. Supports remote accessing and controlling Hikvision...'
//     },
//     {
//       name: 'Device Network SDK_Linux64',
//       info: 'V6.1.9.48 | 64.12MB | 2023/06/14',
//       description: 'Used for secondary development based on device network SDK. Supports remote accessing and controlling Hikvision...'
//     }
//   ];
//   return (
//     <div className={styles.sdkContainer}>
//       <div className={styles.searchSection}>
//         <input 
//           type="text" 
//           placeholder="Type key words here..." 
//           className={styles.searchInput}
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button className={styles.searchButton}><MagnifyingGlassIcon className={styles.searchIcon} /></button>
//       </div>

//       <div className={styles.filterSection}>
//         <span className={styles.filterLabel}>Tool type:</span>
//         <div className={styles.filterOptions}>
//           <button className={styles.filterButton}>All</button>
//           <button className={styles.filterButton}>Product Selectors & System Designers</button>
//           <button className={styles.filterButton}>Installation & Maintenance Tools</button>
//           <button className={styles.filterButton}>Management Software</button>
//           <button className={styles.filterButton}>&#9660;</button>
//         </div>
//       </div>

//       <div className={styles.sdkListContainer}>
//         {(() => {
//           const filteredItems = sdkItems.filter(item => 
//             item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             item.description.toLowerCase().includes(searchTerm.toLowerCase())
//           );
          
//           if (filteredItems.length === 0 && searchTerm) {
//             return (
//               <div className={styles.noResults}>
//                 <p>No SDK found matching your search criteria.</p>
//                 <p className={styles.noResultsSubtext}>The SDK you're looking for is currently not available. Please try a different search term or check back later.</p>
//               </div>
//             );
//           }
          
//           return filteredItems.map((item, index) => (
//             <div key={index} className={styles.sdkItem}>
//               <img src="/path/to/your/sdk-icon.png" alt="SDK Icon" className={styles.sdkIcon} />
//               <div className={styles.sdkDetails}>
//                 <div className={styles.sdkName}>{item.name}</div>
//                 <div className={styles.sdkInfo}>{item.info}</div>
//                 <div className={styles.sdkDescription}>{item.description}</div>
//               </div>
//               <button className={styles.downloadButton}>
//                 <span>Download</span>
//                 <span className={styles.downloadIcon}>&#x2193;</span>
//               </button>
//             </div>
//           ));
//         })()}
//       </div>
//     </div>
//   );
// };

// export default SDK;


// ?
import React, { useState, useEffect } from "react";
import styles from "./SDK.module.css"; // You can use SDK.module.css or create a shared one
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import apiClient from "../../../api/apiClient";

const SDK = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const storageUrl =
    import.meta.env.VITE_API_STORAGE_URL || "http://127.0.0.1:8000/storage";

  useEffect(() => {
    const fetchSdk = async () => {
      try {
        const response = await apiClient.get("/support-files?type=SDK");
        setItems(response.data);
      } catch (err) {
        setError("Failed to load SDK files. Please try again later.");
        console.error("Fetch SDK Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSdk();
  }, []);

  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.description &&
        item.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (loading)
    return (
      <div className={styles.sdkContainer}>
        <p>Loading SDKs...</p>
      </div>
    );
  if (error)
    return (
      <div className={styles.sdkContainer}>
        <p style={{ color: "red" }}>{error}</p>
      </div>
    );

  return (
    <div className={styles.sdkContainer}>
      <div className={styles.searchSection}>
        <input
          type="text"
          placeholder="Type key words here..."
          className={styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className={styles.searchButton}>
          <MagnifyingGlassIcon className={styles.searchIcon} />
        </button>
      </div>

      <div className={styles.sdkListContainer}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className={styles.sdkItem}>
              {/* Optional Icon */}
              <div className={styles.sdkDetails}>
                <div className={styles.sdkName}>{item.name}</div>
                <div className={styles.sdkInfo}>
                  {item.version} | {item.size} | {item.release_date}
                </div>
                <div className={styles.sdkDescription}>{item.description}</div>
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
            <p>No SDK found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SDK;