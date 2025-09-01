import React from "react";
import { useUI } from "../../../context/UIContext";
import styles from "./SearchOverlay.module.css";

const SearchOverlay = () => {
  const { isSearchOpen, setIsSearchOpen } = useUI();
  const [query, setQuery] = React.useState("");
  if (!isSearchOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.box}>
        <input
          autoFocus
          className={styles.input}
          placeholder="Search products, solutions..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className={styles.actions}>
          <button className={styles.primary}>Search</button>
          <button
            className={styles.secondary}
            onClick={() => setIsSearchOpen(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
