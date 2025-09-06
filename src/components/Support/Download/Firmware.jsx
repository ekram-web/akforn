// import React, { useState } from 'react';
// import styles from './Firmware.module.css';
// import { MagnifyingGlassIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

// function Firmware() {
//   const [expandedItems, setExpandedItems] = useState({});
//   const [searchTerm, setSearchTerm] = useState('');

//   const firmwareItems = [
//     {
//       id: 'DS-1005KI',
//       versions: [
//         { name: 'Firmware_V1.3.4', size: '', date: '' },
//         { name: 'Firmware_V1.3.1_171012', size: '', date: '' },
//       ],
//     },
//     { id: 'DS-1006KI', versions: [] },
//     { id: 'DS-1100KI(B)', versions: [] },
//   ];

//   const toggleExpand = (id) => {
//     setExpandedItems(prev => ({
//       ...prev,
//       [id]: !prev[id]
//     }));
//   };

//   return (
//     <div className={styles.firmwarePageContainer}>
//       <div className={styles.firmwareMainContent}>
//         <div className={styles.firmwareHeader}>
//           <h1 className={styles.firmwareTitle}>Firmware</h1>
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

//         <div className={styles.firmwareList}>
//           {(() => {
//             const filteredItems = firmwareItems.filter(item => 
//               item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
//               item.versions.some(version => 
//                 version.name.toLowerCase().includes(searchTerm.toLowerCase())
//               )
//             );
            
//             if (filteredItems.length === 0 && searchTerm) {
//               return (
//                 <div className={styles.noResults}>
//                   <p>No firmware found matching your search criteria.</p>
//                   <p className={styles.noResultsSubtext}>The firmware you're looking for is currently not available. Please try a different search term or check back later.</p>
//                 </div>
//               );
//             }
            
//             return filteredItems.map((item) => (
//             <div key={item.id} className={styles.firmwareItem}>
//               <h2 className={styles.firmwareItemId} onClick={() => toggleExpand(item.id)}>
//                 <span>{item.id}</span>
//                 {expandedItems[item.id] ? (
//                   <MinusIcon className={`${styles.toggleIcon} ${styles.expanded}`} />
//                 ) : (
//                   <PlusIcon className={styles.toggleIcon} />
//                 )}
//               </h2>
//               <div className={`${styles.firmwareVersions} ${expandedItems[item.id] ? '' : styles.collapsed}`}>
//                 {item.versions.length > 0 ? (
//                   item.versions.map((version, index) => (
//                     <div key={index} className={styles.firmwareVersionItem}>
//                       <div className={styles.firmwareVersionHeader}>
//                         <p className={styles.firmwareVersionLabel}>Firmware</p>
//                         <button className={styles.downloadButton}>
//                           <span>Download</span>
//                           <span className={styles.downloadIcon}>&#x2193;</span>
//                         </button>
//                       </div>
//                       <div className={styles.firmwareVersionContent}>
//                         <span className={styles.firmwareVersionName}>{version.name}</span>
//                         <div className={styles.firmwareVersionMeta}>
//                           {version.size && <span className={styles.firmwareVersionInfo}>{version.size}</span>}
//                           {version.date && <span className={styles.firmwareVersionInfo}>{version.date}</span>}
//                         </div>
//                         <p className={styles.firmwareAppliedTo}>Applied to: <span>{item.id}</span></p>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <p className={styles.noFirmware}>No firmware versions available.</p>
//                 )}
//               </div>
//             </div>
//             ));
//           })()}
//         </div>
//       </div>


//     </div>
//   );
// }

// export default Firmware;


// ??
import React, { useState, useEffect } from "react";
import styles from "./Firmware.module.css";
import {
  MagnifyingGlassIcon,
  PlusIcon,
  MinusIcon,
} from "@heroicons/react/24/outline";
import apiClient from "../../../api/apiClient";

const Firmware = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [expandedItems, setExpandedItems] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  // Get the base storage URL from your Laravel .env file for constructing download links
  const storageUrl =
    import.meta.env.VITE_API_STORAGE_URL || "http://127.0.0.1:8000/storage";

  useEffect(() => {
    const fetchFirmware = async () => {
      try {
        const response = await apiClient.get("/support-files?type=Firmware");
        setItems(response.data);
      } catch (err) {
        setError("Failed to load firmware files. Please try again later.");
        console.error("Fetch Firmware Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchFirmware();
  }, []);

  const toggleExpand = (model) => {
    setExpandedItems((prev) => ({ ...prev, [model]: !prev[model] }));
  };

  // Create a copy to filter, preserving the original data
  const filteredItems = items.filter(
    (item) =>
      item.product_model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group the filtered items by product model
  const groupedItems = filteredItems.reduce((acc, current) => {
    const model = current.product_model;
    if (!acc[model]) {
      acc[model] = [];
    }
    acc[model].push(current);
    return acc;
  }, {});

  if (loading)
    return (
      <div className={styles.firmwarePageContainer}>
        <p>Loading Firmware...</p>
      </div>
    );
  if (error)
    return (
      <div className={styles.firmwarePageContainer}>
        <p style={{ color: "red" }}>{error}</p>
      </div>
    );

  return (
    <div className={styles.firmwarePageContainer}>
      <div className={styles.firmwareMainContent}>
        <div className={styles.firmwareHeader}>
          <h1 className={styles.firmwareTitle}>Firmware</h1>
          <div className={styles.searchSection}>
            <input
              type="text"
              placeholder="Search by model or version..."
              className={styles.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className={styles.searchButton}>
              <MagnifyingGlassIcon className={styles.searchIcon} />
            </button>
          </div>
        </div>

        <div className={styles.firmwareList}>
          {Object.keys(groupedItems).length > 0 ? (
            Object.entries(groupedItems).map(([model, versions]) => (
              <div key={model} className={styles.firmwareItem}>
                <h2
                  className={styles.firmwareItemId}
                  onClick={() => toggleExpand(model)}
                >
                  <span>{model}</span>
                  {expandedItems[model] ? (
                    <MinusIcon className={styles.toggleIcon} />
                  ) : (
                    <PlusIcon className={styles.toggleIcon} />
                  )}
                </h2>
                <div
                  className={`${styles.firmwareVersions} ${
                    expandedItems[model] ? styles.expanded : styles.collapsed
                  }`}
                >
                  {versions.map((version) => (
                    <div
                      key={version.id}
                      className={styles.firmwareVersionItem}
                    >
                      <div className={styles.firmwareVersionHeader}>
                        <p className={styles.firmwareVersionLabel}>Firmware</p>
                        <a
                          href={`${storageUrl}/${version.file_url}`}
                          className={styles.downloadButton}
                          download
                        >
                          <span>Download</span>
                          <span className={styles.downloadIcon}>&#x2193;</span>
                        </a>
                      </div>
                      <div className={styles.firmwareVersionContent}>
                        <span className={styles.firmwareVersionName}>
                          {version.name}
                        </span>
                        <div className={styles.firmwareVersionMeta}>
                          {version.size && (
                            <span className={styles.firmwareVersionInfo}>
                              {version.size}
                            </span>
                          )}
                          {version.release_date && (
                            <span className={styles.firmwareVersionInfo}>
                              {version.release_date}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className={styles.noResults}>
              <p>No firmware found matching your search criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Firmware;