import React from "react";
import HeroSection from "../components/home/HeroSection";
import FeaturedSection from "../components/home/FeaturedSection";
import AboutSection from "../components/home/AboutSection";
import CoreTechnologies from "../components/home/CoreTechnologies";
import Newsroom from "../components/home/Newsroom";

import AnimateOnScroll from "../components/common/AnimateOnScroll";

const HomePage = () => {
  return (
    <>
      <HeroSection />

      <AnimateOnScroll>
        <FeaturedSection />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <CoreTechnologies />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <Newsroom />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <AboutSection />
      </AnimateOnScroll>
    </>
  );
};

export default HomePage;
