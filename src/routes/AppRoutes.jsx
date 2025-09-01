// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import MainLayout from "../layouts/MainLayout";
// import HomePage from "../pages/HomePage";
// import ProductsPage from "../pages/ProductsPage";
// import ServicesPage from "../pages/ServicesPage";
// import SupportPage from "../pages/SupportPage";
// // import PartnersPage from "../pages/PartnersPage";
// import Blog from "../components/Blog/Blog";
// import Firmware from "../components/Support/Download/Firmware";
// import SDK from "../components/Support/Download/SDK";
// import Software from "../components/Support/Download/Software";

// import Guide from "../components/Support/HowTo/Guide";
// import Video from "../components/Support/HowTo/Video";

// // Contact pages
// import SalesContactPage from "../components/contact/SalesContactPage";
// import SubscribePage from "../components/contact/SubscribePage";
// import TechnicalSupportPage from "../components/contact/TechnicalSupportPage";
// import FaqChatPage from "../components/contact/FaqChatPage";
// import AboutPage from "../pages/AboutPage";

// // We can create and import other pages here later
// // import ProductsPage from '../pages/ProductsPage';

// import LegalPage, {
//   PrivacyPolicyContent,
//   TermsOfUseContent,
//   CookiePolicyContent,
// } from "../components/Legal/Legal";

// const AppRoutes = () => {
//   return (
//     <Routes>
//       {/* All routes inside here will use the MainLayout */}
//       <Route path="/" element={<MainLayout />}>
//         {/* The default page at "/" */}
//         <Route index element={<HomePage />} />

//         {/* Example of another page we can add later */}
//         <Route path="products" element={<ProductsPage />} />
//         <Route path="services" element={<ServicesPage />} />

//         <Route path="support" element={<SupportPage />}>
//           <Route path="download">
//             <Route path="firmware" element={<Firmware />} />
//             <Route path="sdk" element={<SDK />} />
//             <Route path="software" element={<Software />} />
//           </Route>
//           <Route path="howto">
//             <Route path="guide" element={<Guide />} />
//             <Route path="video" element={<Video />} />
//           </Route>
//         </Route>
//         {/* <Route path="partners" element={<PartnersPage />} /> */}
//         <Route path="blog" element={<Blog />} />
//         <Route path="about" element={<AboutPage />} />

//         {/* Contact Routes */}
//         <Route path="contact">
//           <Route path="sales" element={<SalesContactPage />} />
//           <Route path="subscribe" element={<SubscribePage />} />
//           <Route path="technical" element={<TechnicalSupportPage />} />
//           <Route path="faq" element={<FaqChatPage />} />
//         </Route>

//         {/* Legal Routes */}

//         <Route path="legal" element={<LegalPage />}>
//           <Route path="privacy-policy" element={<PrivacyPolicyContent />} />
//           <Route path="terms-of-use" element={<TermsOfUseContent />} />
//           <Route path="cookie-policy" element={<CookiePolicyContent />} />
//         </Route>
//       </Route>
//     </Routes>
//   );
// };

// export default AppRoutes;

// ??
import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

// Import Main Pages
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import SupportPage from "../pages/SupportPage";
// import PartnersPage from "../pages/PartnersPage";
import Blog from "../components/Blog/Blog";
import AboutPage from "../pages/AboutPage";
// import ProductsPage from "../pages/ProductsPage"; // General Products Page (if needed)

// Import Product Category Pages
import CamerasPage from "../components/Products/CamerasPage";
import RecordersPage from "../components/Products/RecordersPage";
import SwitchesPage from "../components/Products/SwitchesPage";
import SystemsPage from "../components/Products/SystemsPage";

// Import Support Sub-Pages
import Firmware from "../components/Support/Download/Firmware";
import SDK from "../components/Support/Download/SDK";
import Software from "../components/Support/Download/Software";
import Guide from "../components/Support/HowTo/Guide";
import Video from "../components/Support/HowTo/Video";

// Import Contact Pages
import SalesContactPage from "../components/contact/SalesContactPage";
import SubscribePage from "../components/contact/SubscribePage";
import TechnicalSupportPage from "../components/contact/TechnicalSupportPage";
import FaqChatPage from "../components/contact/FaqChatPage";

// Import Legal Pages
import LegalPage, {
  PrivacyPolicyContent,
  TermsOfUseContent,
  CookiePolicyContent,
} from "../components/Legal/Legal";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        {/* --- PRODUCTS ROUTES (New and Simplified) --- */}
        <Route path="/products/cameras" element={<CamerasPage />} />
        <Route path="/products/recorders" element={<RecordersPage />} />
        <Route path="/products/switches" element={<SwitchesPage />} />
        <Route path="/products/systems" element={<SystemsPage />} />
        <Route path="services" element={<ServicesPage />} />{" "}
        <Route path="support" element={<SupportPage />}>
          {" "}
          <Route path="download">
            <Route path="firmware" element={<Firmware />} />
            <Route path="sdk" element={<SDK />} />
            <Route path="software" element={<Software />} />{" "}
          </Route>{" "}
          <Route path="howto">
            <Route path="guide" element={<Guide />} />
            <Route path="video" element={<Video />} />{" "}
          </Route>{" "}
        </Route>
        {/* We will remove the partners page as you requested */}
        {/* <Route path="partners" element={<PartnersPage />} /> */}
        <Route path="blog" element={<Blog />} />
        <Route path="about" element={<AboutPage />} />
        {/* Contact Routes */}{" "}
        <Route path="contact">
          <Route path="sales" element={<SalesContactPage />} />
          <Route path="subscribe" element={<SubscribePage />} />
          <Route path="technical" element={<TechnicalSupportPage />} />
          <Route path="faq" element={<FaqChatPage />} />{" "}
        </Route>
        <Route path="legal" element={<LegalPage />}>
          <Route path="privacy-policy" element={<PrivacyPolicyContent />} />
          <Route path="terms-of-use" element={<TermsOfUseContent />} />
          <Route path="cookie-policy" element={<CookiePolicyContent />} />{" "}
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
