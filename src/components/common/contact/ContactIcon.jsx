import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon } from '@heroicons/react/24/solid';
import styles from './ContactIcon.module.css';

const ContactIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
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
    <div className={styles.contactIconContainer} ref={dropdownRef}>
      <button 
        className={styles.contactButton} 
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-label="Contact options"
      >
        <PhoneIcon className={styles.phoneIcon} />
        <span className={styles.contactText}>Contact</span>
      </button>
      
      {isOpen && (
        <div className={styles.dropdownMenu}>
          {contactOptions.map((option) => (
            <Link 
              key={option.id} 
              to={option.path} 
              className={styles.dropdownItem}
              onClick={() => setIsOpen(false)}
            >
              {option.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactIcon;