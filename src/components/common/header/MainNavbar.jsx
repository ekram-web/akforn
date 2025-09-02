
// import React from "react";
// import { Link } from "react-router-dom";
// import { mainNavigation } from "../../../config/navigation";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import styles from "./MainNavbar.module.css";

// import logoImage from "../../../../public/Logo.png"; // Adjust the path as necessary

// const MainNavbar = () => {
//   return (
//     <div className={styles.mainNavbar}>
//       <div className={`container ${styles.container}`}>
//         {/* Logo */}
//         <Link to="/" className={styles.logo}>
//           <img
//             src= {logoImage}
//             alt="AK Vision Logo"
//             className={styles.logoImg}
//           />
//           <span className={styles.logoText}>AK VISION</span>
//         </Link>

//         {/* Navigation Links */}
//         <nav className={styles.navLinks}>
//           {mainNavigation.map((item) => (
//             <div key={item.id} className={styles.navItem}>
//               {/* --- THIS IS THE KEY CHANGE --- */}
//               {/* If item has a mega menu, render a non-clickable span. Otherwise, render a Link. */}
//               {item.mega ? (
//                 <span className={styles.navLabel}>{item.label}</span>
//               ) : (
//                 <Link to={item.path}>{item.label}</Link>
//               )}

//               {item.mega && (
//                 <div className={styles.mega}>
//                   <div className={styles.megaGrid}>
//                     {item.mega.map((col, idx) => (
//                       <div key={idx} className={styles.megaCol}>
//                         <div className={styles.megaColTitle}>{col.title}</div>
//                         <div className={styles.megaColLinks}>
//                           {col.links.map((l, i) => (
//                             <Link
//                               key={i}
//                               to={l.path}
//                               className={styles.megaLink}
//                             >
//                               {l.label}
//                             </Link>
//                           ))}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </nav>

//         {/* Search Box */}
//         <div className={styles.searchBox}>
//           <MagnifyingGlassIcon className={styles.searchIcon} />
//           <input
//             type="text"
//             placeholder="Search..."
//             className={styles.searchInput}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainNavbar;




// ??

"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { mainNavigation } from "../../../config/navigation";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import styles from "./MainNavbar.module.css";
import logoImage from "../../../../public/Logo.png";

const MainNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveMegaMenu(null); // Close any open mega menus when toggling main menu
  };

  const toggleMegaMenu = (itemId) => {
    setActiveMegaMenu(activeMegaMenu === itemId ? null : itemId);
  };

  return (
    <div className={styles.mainNavbar}>
      <div className={`container ${styles.container}`}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <img
            src={logoImage || "/placeholder.svg"}
            alt="AK Vision Logo"
            className={styles.logoImg}
          />
          <span className={styles.logoText}>AK VISION</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className={`${styles.navLinks} ${styles.desktopNav}`}>
          {mainNavigation.map((item) => (
            <div key={item.id} className={styles.navItem}>
              {item.mega ? (
                <span className={styles.navLabel}>{item.label}</span>
              ) : (
                <Link to={item.path}>{item.label}</Link>
              )}

              {item.mega && (
                <div className={styles.mega}>
                  <div className={styles.megaGrid}>
                    {item.mega.map((col, idx) => (
                      <div key={idx} className={styles.megaCol}>
                        <div className={styles.megaColTitle}>{col.title}</div>
                        <div className={styles.megaColLinks}>
                          {col.links.map((l, i) => (
                            <Link
                              key={i}
                              to={l.path}
                              className={styles.megaLink}
                            >
                              {l.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Search Box */}
        <div className={`${styles.searchBox} ${styles.desktopSearch}`}>
          <MagnifyingGlassIcon className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className={styles.mobileMenuIcon} />
          ) : (
            <Bars3Icon className={styles.mobileMenuIcon} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenuOverlay}>
          <div className={styles.mobileMenu}>
            {/* Mobile Search */}
            <div className={styles.mobileSearchBox}>
              <MagnifyingGlassIcon className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search..."
                className={styles.searchInput}
              />
            </div>

            {/* Mobile Navigation */}
            <nav className={styles.mobileNavLinks}>
              {mainNavigation.map((item) => (
                <div key={item.id} className={styles.mobileNavItem}>
                  {item.mega ? (
                    <div>
                      <button
                        className={styles.mobileNavButton}
                        onClick={() => toggleMegaMenu(item.id)}
                      >
                        <span>{item.label}</span>
                        <ChevronDownIcon
                          className={`${styles.chevronIcon} ${
                            activeMegaMenu === item.id
                              ? styles.chevronRotated
                              : ""
                          }`}
                        />
                      </button>

                      {activeMegaMenu === item.id && (
                        <div className={styles.mobileMegaMenu}>
                          {item.mega.map((col, idx) => (
                            <div key={idx} className={styles.mobileMegaCol}>
                              <div className={styles.mobileMegaColTitle}>
                                {col.title}
                              </div>
                              <div className={styles.mobileMegaColLinks}>
                                {col.links.map((l, i) => (
                                  <Link
                                    key={i}
                                    to={l.path}
                                    className={styles.mobileMegaLink}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {l.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={styles.mobileNavLink}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainNavbar;
