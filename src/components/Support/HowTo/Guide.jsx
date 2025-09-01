import React, { useState } from "react";
import styles from "./Guide.module.css";

// A simple PDF icon component, defined right here
const PdfIcon = () => (
  <svg
    className={styles.pdfIcon}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
  >
    <path
      fill="currentColor"
      d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm120-208c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16h-48zm0 96c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16h-48z"
    />
  </svg>
);

// Sample data (this will come from your API in the future)
const guidesData = [
  {
    title: "How to install and debug DS-TMG034 DS-TMG035 radar",
    instructions: [
      "Install and configure DS-TMG035 (60G/ 79G)",
      "Debug the TMG034 Radar (android/ ios/ PC)",
    ],
    pdfLinks: [
      { name: "How-to-debug-the-TMG034-Radar (android)", url: "/sample.pdf" },
      { name: "How-to-debug-the-TMG034-Radar (ios)", url: "/sample.pdf" },
    ],
  },
  {
    title: "How to install and configure DS-TMG42x",
    instructions: ["Sample instruction 1."],
    pdfLinks: [{ name: "DS-TMG42x_guide", url: "/sample.pdf" }],
  },
  {
    title: "How to install and configure DS-TMG4Bx",
    instructions: [],
    pdfLinks: [],
  },
  { title: "How to configure DS-TCG406-E", instructions: [], pdfLinks: [] },
  {
    title: "How to Use Attendance Service on HikCentral Connect",
    instructions: [],
    pdfLinks: [],
  },
  { title: "How to Configure VCA of the NVR", instructions: [], pdfLinks: [] },
];

const categories = [
  "All",
  "Access Control",
  "Alarm Products",
  "DVR",
  "ITS",
  "Network Cameras",
  "Network Products",
  "NVR",
  "Parking Management",
  "Software",
  "Thermal Products",
  "Transmission and Display Products",
  "Turbo HD Camera",
  "Video Intercom",
];

const Guide = () => {
  // This state will keep track of which accordion item is open.
  // We use `null` to mean "none are open".
  const [openIndex, setOpenIndex] = useState(null);

  // This function will be called when a header is clicked
  const handleToggle = (index) => {
    // If the clicked item is already open, close it. Otherwise, open it.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.pageContainer}>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.title}>How To Guide</h1>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Type key words here..." />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                style={{ width: "20px", height: "20px" }}
              >
                <path
                  fill="currentColor"
                  d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                />
              </svg>
            </button>
          </div>
        </header>

        <div className={styles.filterSection}>
          <span className={styles.categoryLabel}>Category:</span>
          <div className={styles.categoryList}>
            {categories.map((cat) => (
              <button key={cat} className={cat === "All" ? styles.active : ""}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <main className={styles.guidesList}>
          {guidesData.map((guide, index) => (
            <div className={styles.accordionItem} key={index}>
              <button
                className={styles.accordionHeader}
                onClick={() => handleToggle(index)}
              >
                <span
                  className={`${styles.icon} ${
                    openIndex === index ? styles.open : ""
                  }`}
                >
                  +
                </span>
                <span className={styles.headerTitle}>{guide.title}</span>
              </button>
              {openIndex === index && (
                <div className={styles.accordionContent}>
                  <p>You can follow these instructions to:</p>
                  <ol className={styles.instructionsList}>
                    {guide.instructions.map((inst, idx) => (
                      <li key={idx}>{inst}</li>
                    ))}
                  </ol>
                  <div className={styles.pdfList}>
                    {guide.pdfLinks.map((link, idx) => (
                      <a
                        href={link.url}
                        download
                        key={idx}
                        className={styles.pdfLink}
                      >
                        <PdfIcon /> {link.name} .pdf
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Guide;
