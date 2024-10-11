import React from "react";
import HeroPage from "./views/HeroPage";
import HeroSection from "./components/HeroSection";
import CompanyLogos from "./components/CompanyLogos";
import GrowSection from "./components/GrowSection";

const App: React.FC = () => {
  return (
    <div>
      <div className="">
        <HeroPage />
        <HeroSection />
        <CompanyLogos />
        <GrowSection />
      </div>
    </div>
  );
};

export default App;
