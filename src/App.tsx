import React from "react";
import HeroPage from "./views/HeroPage";
import HeroSection from "./components/HeroSection";
import CompanyLogos from "./components/CompanyLogos";
import GrowSection from "./components/GrowSection";
import MusicClassSection from "./components/Music";
import GradePrograms from "./components/GradePrograms";

const App: React.FC = () => {
  return (
    <div>
      <div className="">
        <HeroPage />
        <HeroSection />
        <CompanyLogos />
        <GrowSection />
        <MusicClassSection />
        <GradePrograms />
      </div>
    </div>
  );
};

export default App;
