import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/header/Navbar";
import Footer from "../components/common/Footer/Footer";
import FloatingButtons from "../components/common/floating/FloatingButtons";

import SearchOverlay from "../components/common/search/SearchOverlay";

const MainLayout = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <main style={{ flex: "1" }}>
        {/* The <Outlet> component renders the current page's content */}
        <Outlet />
      </main>
      <Footer />

      <SearchOverlay />
      <FloatingButtons />
    </div>
  );
};

export default MainLayout;
