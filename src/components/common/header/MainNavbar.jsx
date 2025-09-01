// import React from "react";
// import { Link } from "react-router-dom";
// import { mainNavigation } from "../../../config/navigation";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import styles from "./MainNavbar.module.css";

// const MainNavbar = () => {
//   return (
//     <div className={styles.mainNavbar}>
//       <div className={`container ${styles.container}`}>

//         {/* Logo */}
//         <Link to="/" className={styles.logo}>
//           <img
//             src="src\assets\Logo.png"
//             alt="AK Vision Logo"
//             className={styles.logoImg}
//           />
//           <span className={styles.logoText}>AK VISION</span>
//         </Link>

//         {/* Navigation Links */}
//         <nav className={styles.navLinks}>
//           {mainNavigation.map((item) => (
//             <div key={item.id} className={styles.navItem}>
//               <Link to={item.path}>{item.label}</Link>
//               {item.mega && (
//                 <div className={styles.mega}>
//                   <div className={styles.megaGrid}>
//                     {item.mega.map((col, idx) => (
//                       <div key={idx} className={styles.megaCol}>
//                         <div className={styles.megaColTitle}>{col.title}</div>
//                         <div className={styles.megaColLinks}>
//                           {col.links.map((l, i) => (
//                             <Link key={i} to={l.path} className={styles.megaLink}>
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


// ??????
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { mainNavigation } from "../../../config/navigation";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import styles from "./MainNavbar.module.css";
import logoImage from "../../../../public/Logo.png";

const MainNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className={styles.mainNavbar}>
      <div className={`container ${styles.container}`}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <img
            src={logoImage}
            alt="AK Vision Logo"
            className={styles.logoImg}
          />
          <span className={styles.logoText}>AK VISION</span>
        </Link>

        {/* Hamburger button (only mobile) */}
        <button
          className={styles.mobileToggle}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? (
            <XMarkIcon className={styles.mobileIcon} />
          ) : (
            <Bars3Icon className={styles.mobileIcon} />
          )}
        </button>

        {/* Navigation */}
        <nav
          className={`${styles.navLinks} ${mobileOpen ? styles.navOpen : ""}`}
        >
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

        {/* Search Box */}
        <div className={styles.searchBox}>
          <MagnifyingGlassIcon className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
          />
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
