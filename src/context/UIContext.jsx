import React from "react";

const UIContext = React.createContext({
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: () => {},
  isSearchOpen: false,
  setIsSearchOpen: () => {},
});

export const UIProvider = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  const value = React.useMemo(
    () => ({ isMobileMenuOpen, setIsMobileMenuOpen, isSearchOpen, setIsSearchOpen }),
    [isMobileMenuOpen, isSearchOpen]
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUI = () => React.useContext(UIContext);


