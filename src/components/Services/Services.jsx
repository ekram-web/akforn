// import React from 'react';
// import { Link } from 'react-router-dom';
// import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
// import styles from './Services.module.css';

// const Services = () => {
//   const products = [
//     {
//       name: 'Security Cameras',
//       imageUrl: 'https://picsum.photos/seed/camera/600/400',
//     },
//     {
//       name: 'Network Routers',
//       imageUrl: 'https://picsum.photos/seed/router/600/400',
//     },
//     {
//       name: 'Ethernet Switches',
//       imageUrl: 'https://picsum.photos/seed/switch/600/400',
//     },
//     {
//       name: 'Cables & Accessories',
//       imageUrl: 'https://picsum.photos/seed/cables/600/400',
//     },
//   ];

//   return (
//     <div className={styles.servicesPage}>
//       {/* Page Header */}
//       <section className={styles.pageHeader}>
//         <div className={styles.headerContent}>
//           <div className={styles.headerText}>
//             <h1 className={styles.pageTitle}>Our Services</h1>
//             <p className={styles.pageSubtitle}>
//               We provide top-tier electronic equipment and expert installation services to meet your needs.
//             </p>
//           </div>
//           <div className={styles.headerImageContainer}>
//             <img src="https://picsum.photos/seed/services/600/400" alt="Professional Services" className={styles.headerImage} />
//           </div>
//         </div>
//       </section>

//       {/* Products Section */}
//       <section className={styles.productsSection}>
//         <h2 className={styles.sectionTitle}>Products We Sell & Install</h2>
//         <div className={styles.productsGrid}>
//           {products.map((product) => (
//             <div key={product.name} className={styles.productCard}>
//               <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
//               <div className={styles.productOverlay}>
//                 <h3 className={styles.productName}>{product.name}</h3>
//               </div>
//             </div>
//           ))}
//         </div>

//       </section>

//       {/* Installation Section */}
//       <section className={styles.installationSection}>
//         <div className={styles.installationContent}>
//           <div className={styles.installationIcon}>
//             <WrenchScrewdriverIcon />
//           </div>
//           <h2 className={styles.sectionTitle}>Professional Installation</h2>
//           <p className={styles.installationDescription}>
//             Our certified technicians ensure your systems are installed correctly and efficiently, with services including site surveys, professional mounting, system configuration, and post-installation support.
//           </p>
//         </div>
//       </section>

//       {/* Service Process Section */}
//       <section className={styles.processSection}>
//         <h2 className={styles.sectionTitle}>Our Service Process</h2>
//         <div className={styles.processSteps}>
//           {[
//             { step: 1, title: 'Consultation' },
//             { step: 2, title: 'Site Assessment' },
//             { step: 3, title: 'Installation' },
//             { step: 4, title: 'Follow-up' },
//           ].map((step, index) => (
//             <React.Fragment key={step.step}>
//               <div className={styles.processStep}>
//                 <div className={styles.stepNumber}>{step.step}</div>
//                 <h3 className={styles.stepTitle}>{step.title}</h3>
//               </div>
//               {index < 3 && <div className={styles.stepConnector}></div>}
//             </React.Fragment>
//           ))}
//         </div>
//         <div className={styles.ctaContainer}>
//           <Link to="/contact/sales" className={styles.ctaButton}>
//             Contact Sales
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services;

// ?

import React from "react";
import { Link } from "react-router-dom";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import AnimateOnScroll from "../common/AnimateOnScroll"; // Import our animation tool
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import styles from "./Services.module.css";

import cam1 from "../../assets/71UF8gP7XML._UF1000,1000_QL80_.jpg";
import cam2 from "../../assets/techietech-tech-6ZXP-5-jJts-unsplash.jpg";
import cam3 from "../../assets/usb-cable-plug-isolated-white-background.jpg";
import cam4 from "../../assets/Picsart_25-08-22_09-59-03-985.jpg";


import test1 from "../../../public/10001.jpg"
import test2 from "../../../public/10002.png"
import test3 from "../../../public/10003.jpg"
import test4 from "../../../public/10004.png"
import test5 from "../../../public/10005.jpg"
import test6 from "../../../public/io.jpg"

const products = [
  {
    name: "Security Cameras",
    // imageUrl: "https://picsum.photos/seed/camera/600/400",
    imageUrl: cam4,
  },
  {
    name: "Network Routers",
    // imageUrl: "https://picsum.photos/seed/router/600/400",
    imageUrl: cam2,
  },
  {
    name: "Ethernet Switches",
    // imageUrl: "https://picsum.photos/seed/switch/600/400",
    imageUrl: cam1,
  },
  {
    name: "Cables & Accessories",
    // imageUrl: "https://picsum.photos/seed/cables/600/400",
    imageUrl: cam3,
  },
];

const testimonials = [
  {
    quote:
      "Akvision installed a high-tech security camera system at our office, greatly improving our ability to monitor and manage security operations. Their reliable service and high-resolution cameras provide the clarity and coverage we need to enhance public safety. A trusted partner in security solutions!!",
    // author: "John Doe",
    company: "Addis Ababa Police",
    logo: test6,
  },
  {
    quote:
      "We needed a reliable surveillance system to enhance security at our facility, and Akvision delivered exactly that. From consultation to installation, their service was top-notch. The high-quality cameras and seamless setup exceeded our expectations. Highly recommend their services!",
    // author: "Jane Smith",
    company: "DH Geda",
    logo: test5,
  },
  {
    quote:
      "Akvision installed a top-quality security camera system at our office, allowing us to monitor our operations efficiently. Their expertise and professionalism made the entire process smooth, and now we have enhanced security for both our staff and customers. Highly recommended!",
    // author: "Samuel Lee",
    company: "Adika Taxi",
    logo: test3,
  },
  {
    quote:
      "Managing security in a busy shopping mall is no easy task, but Akvision made it seamless. Their high-quality camera system provides us with clear surveillance, helping us enhance security and prevent incidents. Their team was professional and efficient throughout the installation. Excellent service!",
    // author: "Samuel Lee",
    company: "Garad MAll",
    logo: test4,
  },
  {
    quote:
      "In the banking industry, security is everything. Thanks to Akvision’s advanced surveillance system, we now have full coverage of our premises, ensuring the safety of our customers and employees. Their expertise and precision made all the difference. A great investment in security!",
    // author: "Samuel Lee",
    company: "ZamZam Bank",
    logo: test1,
  },
  {
    quote:
      "Akvision provided us with an outstanding security solution tailored to our needs. Their cameras offer crystal-clear footage, ensuring that our premises are always under careful watch. Their professionalism and technical expertise were truly impressive!",
    // author: "Samuel Lee",
    company: "Boston Spa",
    logo: test2,
  },
];

const Services = () => {
  return (
    <div className={styles.servicesPage}>
      {/* 1. Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <div className={styles.headerContent}>
            <div className={styles.headerText}>
              <h1 className={styles.pageTitle}>Our Services</h1>
              <p className={styles.pageSubtitle}>
                We provide top-tier electronic equipment and expert installation
                services to meet your needs.
              </p>
            </div>
            <div className={styles.headerImageContainer}>
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Professional Services"
                className={styles.headerImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Products Section with ANIMATION */}
      <section className={styles.productsSection}>
        <div className="container">
          <AnimateOnScroll>
            <h2 className={styles.sectionTitle}>Products We Sell & Install</h2>
          </AnimateOnScroll>
          <div className={styles.productsGrid}>
            {products.map((product, index) => (
              <AnimateOnScroll key={product.name} delay={index * 0.1}>
                <div className={styles.productCard}>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className={styles.productImage}
                  />
                  <div className={styles.productOverlay}>
                    <h3 className={styles.productName}>{product.name}</h3>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NEW Testimonials Section with ANIMATION */}
      <section className={styles.testimonialsSection}>
        <div className="container">
          <AnimateOnScroll>
            <h2 className={`${styles.sectionTitle} ${styles.lightText}`}>
              Trusted by Industry Leaders
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <Swiper
              modules={[Pagination, Autoplay]}
              loop={true}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className={styles.testimonialSlider}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className={styles.testimonialSlide}>
                  <p className={styles.quote}>“{testimonial.quote}”</p>
                  <div className={styles.author}>
                    {testimonial.logo && (
                      <img
                        src={testimonial.logo}
                        alt={testimonial.company}
                        className={styles.companyLogo}
                      />
                    )}
                    <span className={styles.authorCompany}>
                      {testimonial.company}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 4. Installation Section with ANIMATION */}
      <section className={styles.installationSection}>
        <div className="container">
          <AnimateOnScroll>
            <div className={styles.installationContent}>
              <div className={styles.installationIcon}>
                <WrenchScrewdriverIcon />
              </div>
              <h2 className={styles.sectionTitle}>Professional Installation</h2>
              <p className={styles.installationDescription}>
                Our certified technicians ensure your systems are installed
                correctly and efficiently, with services including site surveys,
                professional mounting, system configuration, and
                post-installation support.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 5. Service Process Section with ANIMATION */}
      <section className={styles.processSection}>
        <div className="container">
          <AnimateOnScroll>
            <h2 className={styles.sectionTitle}>Our Service Process</h2>
          </AnimateOnScroll>
          <div className={styles.processSteps}>
            {[
              { step: 1, title: "Consultation" },
              { step: 2, title: "Site Assessment" },
              { step: 3, title: "Installation" },
              { step: 4, title: "Follow-up" },
            ].map((step, index) => (
              <React.Fragment key={step.step}>
                <AnimateOnScroll
                  className={styles.processStepWrapper}
                  delay={index * 0.15}
                >
                  <div className={styles.processStep}>
                    <div className={styles.stepNumber}>{step.step}</div>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                  </div>
                </AnimateOnScroll>
                {index < 3 && <div className={styles.stepConnector}></div>}
              </React.Fragment>
            ))}
          </div>
          <AnimateOnScroll>
            <div className={styles.ctaContainer}>
              <Link to="/contact/sales" className={styles.ctaButton}>
                Request a Consultation
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Services;
