// export const mainNavigation = [
//   {
//     id: "products",
//     label: "Products",
//     path: "/products",
//     mega: [
//       {
//         title: "Camera Categories",
//         links: [
//           {
//             label: "Analog Cameras",
//             path: "/products/category/analog-cameras",
//           },
//           { label: "IP Cameras", path: "/products/category/ip-cameras" },
//           {
//             label: "Wireless Cameras",
//             path: "/products/category/wireless-cameras",
//           },
//           { label: "Dome Cameras", path: "/products/category/dome-cameras" },
//           { label: "Dash Cameras", path: "/products/category/dash-cameras" },
//           { label: "PTZ Cameras", path: "/products/category/ptz-cameras" },
//           { label: "Solar Cameras", path: "/products/category/solar-cameras" },
//           {
//             label: "Two Lens Cameras",
//             path: "/products/category/two-lens-cameras",
//           },
//         ],
//       },
//       {
//         title: "Recorders & Storage",
//         links: [
//           {
//             label: "NVR (Network Video Recorder)",
//             path: "/products/category/nvr",
//           },
//           {
//             label: "DVR (Digital Video Recorder)",
//             path: "/products/category/dvr",
//           },
//           { label: "Internal Hard Disks", path: "/products/category/storage" },
//         ],
//       },
//       {
//         title: "Switches & Accessories",
//         links: [
//           { label: "PoE Switches", path: "/products/category/poe-switches" },
//           { label: "Routers", path: "/products/category/routers" },
//           { label: "Network Cables", path: "/products/category/cables" },
//           { label: "HDMI Cables", path: "/products/category/hdmi-cables" },
//           { label: "Monitors", path: "/products/category/monitors" },
//         ],
//       },
//       {
//         title: "Systems & Smart Devices",
//         links: [
//           {
//             label: "Time Attendance Systems",
//             path: "/products/category/time-attendance",
//           },
//           {
//             label: "Access Control Systems",
//             path: "/products/category/access-control",
//           },
//           { label: "Scanners (QR & UPC)", path: "/products/category/scanners" },
//           {
//             label: "Fire Alarm Systems",
//             path: "/products/category/fire-alarms",
//           },
//           {
//             label: "Smarter Devices",
//             path: "/products/category/smart-devices",
//           },
//         ],
//       },
//     ],
//   },
//   { id: "services", label: "Service", path: "/services" },
//   {
//     id: "support",
//     label: "Support",
//     path: "/support",
//     mega: [
//       {
//         title: "Download",
//         links: [
//           { label: "Firmware", path: "/support/download/firmware" },
//           { label: "SDK", path: "/support/download/sdk" },
//           { label: "Software", path: "/support/download/software" },
//         ],
//       },
//       {
//         title: "How to's",
//         links: [
//           { label: "Guide", path: "/support/howto/guide" },
//           { label: "Video", path: "/support/howto/video" },
//         ],
//       },
//     ],
//   },
//   // { id: "partners", label: "Partners", path: "/partners" },
//   { id: "blog", label: "Blog", path: "/blog" },
//   { id: "about", label: "About Us", path: "/about" },
// ];

// ??

export const mainNavigation = [
  {
    id: "Home",
    label: "Home",
    path: "/",
  },
  {
    id: "products",
    label: "Products",
    path: "/products", // You can create a general products overview page for this link later
    mega: [
      {
        title: "Product Categories",
        links: [
          { label: "Cameras", path: "/products/cameras" },
          { label: "Recorders & Storage", path: "/products/recorders" },
          { label: "Switches & Accessories", path: "/products/switches" },
          { label: "Systems & Smart Devices", path: "/products/systems" },
        ],
      },
      // This second column is an example of how you can add more to the mega menu later
      // {
      //   title: "Featured",
      //   links: [
      //     { label: "New Arrivals", path: "/products/new" },
      //     { label: "Promotions", path: "/products/promotions" },
      //   ],
      // },
    ],
  },
  {
    id: "services",
    label: "Service",
    path: "/services",
  },
  {
    id: "support",
    label: "Support",
    path: "/support",
    mega: [
      {
        title: "Downloads",
        links: [
          { label: "Firmware", path: "/support/download/firmware" },
          { label: "SDK", path: "/support/download/sdk" },
          { label: "Software", path: "/support/download/software" },
        ],
      },
      {
        title: "How-to's",
        links: [
          { label: "Guides", path: "/support/howto/guide" },
          { label: "Videos", path: "/support/howto/video" },
        ],
      },
    ],
  },
  {
    id: "blog",
    label: "Blog",
    path: "/blog",
  },
  {
    id: "about",
    label: "About Us",
    path: "/about",
  },
];
