import React from "react";
import HeroPage from "./views/HeroPage";
import HeroSection from "./components/HeroSection";

const App: React.FC = () => {
  return (
    <div>
      <div className="">
        <HeroPage />
        <HeroSection />
      </div>
    </div>
  );
};

export default App;
