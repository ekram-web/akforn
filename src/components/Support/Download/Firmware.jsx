import React, { useState } from 'react';
import styles from './Firmware.module.css';
import { MagnifyingGlassIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

function Firmware() {
  const [expandedItems, setExpandedItems] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const firmwareItems = [
    {
      id: 'DS-1005KI',
      versions: [
        { name: 'Firmware_V1.3.4', size: '', date: '' },
        { name: 'Firmware_V1.3.1_171012', size: '', date: '' },
      ],
    },
    { id: 'DS-1006KI', versions: [] },
    { id: 'DS-1100KI(B)', versions: [] },
  ];

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className={styles.firmwarePageContainer}>
      <div className={styles.firmwareMainContent}>
        <div className={styles.firmwareHeader}>
          <h1 className={styles.firmwareTitle}>Firmware</h1>
          <div className={styles.searchSection}>
            <input 
              type="text" 
              placeholder="Search: Type key words here..." 
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
          {(() => {
            const filteredItems = firmwareItems.filter(item => 
              item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.versions.some(version => 
                version.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
            );
            
            if (filteredItems.length === 0 && searchTerm) {
              return (
                <div className={styles.noResults}>
                  <p>No firmware found matching your search criteria.</p>
                  <p className={styles.noResultsSubtext}>The firmware you're looking for is currently not available. Please try a different search term or check back later.</p>
                </div>
              );
            }
            
            return filteredItems.map((item) => (
            <div key={item.id} className={styles.firmwareItem}>
              <h2 className={styles.firmwareItemId} onClick={() => toggleExpand(item.id)}>
                <span>{item.id}</span>
                {expandedItems[item.id] ? (
                  <MinusIcon className={`${styles.toggleIcon} ${styles.expanded}`} />
                ) : (
                  <PlusIcon className={styles.toggleIcon} />
                )}
              </h2>
              <div className={`${styles.firmwareVersions} ${expandedItems[item.id] ? '' : styles.collapsed}`}>
                {item.versions.length > 0 ? (
                  item.versions.map((version, index) => (
                    <div key={index} className={styles.firmwareVersionItem}>
                      <div className={styles.firmwareVersionHeader}>
                        <p className={styles.firmwareVersionLabel}>Firmware</p>
                        <button className={styles.downloadButton}>
                          <span>Download</span>
                          <span className={styles.downloadIcon}>&#x2193;</span>
                        </button>
                      </div>
                      <div className={styles.firmwareVersionContent}>
                        <span className={styles.firmwareVersionName}>{version.name}</span>
                        <div className={styles.firmwareVersionMeta}>
                          {version.size && <span className={styles.firmwareVersionInfo}>{version.size}</span>}
                          {version.date && <span className={styles.firmwareVersionInfo}>{version.date}</span>}
                        </div>
                        <p className={styles.firmwareAppliedTo}>Applied to: <span>{item.id}</span></p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className={styles.noFirmware}>No firmware versions available.</p>
                )}
              </div>
            </div>
            ));
          })()}
        </div>
      </div>


    </div>
  );
}

export default Firmware;