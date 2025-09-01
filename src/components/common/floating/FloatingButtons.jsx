import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './FloatingButtons.module.css';

const FloatingButtons = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const toggleContactDropdown = () => {
    setIsContactOpen(!isContactOpen);
  };
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsContactOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const contactOptions = [
    { id: 'sales', label: 'Sales', path: '/contact/sales' },
    { id: 'subscribe', label: 'Subscribe', path: '/contact/subscribe' },
    { id: 'technical', label: 'Technical Support', path: '/contact/technical' },
    { id: 'faq', label: 'FAQ & Chat', path: '/contact/faq' },
  ];

  return (
    <div className={styles.floatingButtonsContainer}>
      {/* Contact Button with Dropdown */}
      <div className={styles.contactContainer} ref={dropdownRef}>
        <button 
          className={`${styles.floatingButton} ${styles.contactButton}`} 
          onClick={toggleContactDropdown}
          aria-expanded={isContactOpen}
          aria-label="Contact options"
        >
          <div className={styles.iconWrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
            </svg>
          </div>
        </button>
        
        {isContactOpen && (
          <div className={styles.contactDropdown}>
            {contactOptions.map((option) => (
              <Link 
                key={option.id} 
                to={option.path} 
                className={styles.dropdownItem}
                onClick={() => setIsContactOpen(false)}
              >
                {option.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Scroll to Top Button */}
      <button onClick={scrollToTop} className={styles.floatingButton} aria-label="Scroll to top">
        <div className={styles.iconWrapper}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
            <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z" clipRule="evenodd" />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default FloatingButtons;