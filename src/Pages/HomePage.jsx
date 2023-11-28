import React from "react";
import HeroSection from "../Component/HeroSection/HeroSection";
import WorkList from "../Component/work List/WorkList";
import Counter from "../Component/counter/Counter";
import FeaturedProject from "../Component/FeaturedProject/FeaturedProject";

const HomePage = () => {
  return (
    <div>
     <HeroSection/>
    <WorkList/>
    <Counter/>
    <FeaturedProject/>
    </div>
  );
};

export default HomePage;
