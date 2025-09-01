import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import styles from './SDK.module.css';

const SDK = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const sdkItems = [
    {
      name: 'Device Network SDK_Win64',
      info: 'V6.1.9.48 | 338.84MB | 2023/06/14',
      description: 'Used for secondary development based on device network SDK. Supports remote accessing and controlling Hikvision...'
    },
    {
      name: 'Device Network SDK_Win32',
      info: 'V6.1.9.48 | 292.34MB | 2023/06/14',
      description: 'Used for secondary development based on device network SDK. Supports remote accessing and controlling Hikvision...'
    },
    {
      name: 'Device Network SDK_Linux32',
      info: 'V6.1.9.48 | 62.98MB | 2023/06/14',
      description: 'Used for secondary development based on device network SDK. Supports remote accessing and controlling Hikvision...'
    },
    {
      name: 'Device Network SDK_Linux64',
      info: 'V6.1.9.48 | 64.12MB | 2023/06/14',
      description: 'Used for secondary development based on device network SDK. Supports remote accessing and controlling Hikvision...'
    }
  ];
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
        <button className={styles.searchButton}><MagnifyingGlassIcon className={styles.searchIcon} /></button>
      </div>

      <div className={styles.filterSection}>
        <span className={styles.filterLabel}>Tool type:</span>
        <div className={styles.filterOptions}>
          <button className={styles.filterButton}>All</button>
          <button className={styles.filterButton}>Product Selectors & System Designers</button>
          <button className={styles.filterButton}>Installation & Maintenance Tools</button>
          <button className={styles.filterButton}>Management Software</button>
          <button className={styles.filterButton}>&#9660;</button>
        </div>
      </div>

      <div className={styles.sdkListContainer}>
        {(() => {
          const filteredItems = sdkItems.filter(item => 
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
          );
          
          if (filteredItems.length === 0 && searchTerm) {
            return (
              <div className={styles.noResults}>
                <p>No SDK found matching your search criteria.</p>
                <p className={styles.noResultsSubtext}>The SDK you're looking for is currently not available. Please try a different search term or check back later.</p>
              </div>
            );
          }
          
          return filteredItems.map((item, index) => (
            <div key={index} className={styles.sdkItem}>
              <img src="/path/to/your/sdk-icon.png" alt="SDK Icon" className={styles.sdkIcon} />
              <div className={styles.sdkDetails}>
                <div className={styles.sdkName}>{item.name}</div>
                <div className={styles.sdkInfo}>{item.info}</div>
                <div className={styles.sdkDescription}>{item.description}</div>
              </div>
              <button className={styles.downloadButton}>
                <span>Download</span>
                <span className={styles.downloadIcon}>&#x2193;</span>
              </button>
            </div>
          ));
        })()}
      </div>
    </div>
  );
};

export default SDK;