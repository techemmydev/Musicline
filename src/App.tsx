import React from "react";
import HeroPage from "./views/HeroPage";
import HeroSection from "./components/HeroSection";
import CompanyLogos from "./components/CompanyLogos";
import GrowSection from "./components/GrowSection";
import MusicClassSection from "./components/Music";
import GradePrograms from "./components/GradePrograms";
import WhyChooseUs from "./components/WhyChooseUs";
import StatsSection from "./components/StatsSection";
import InstructorsSection from "./components/InstructorsSection";
import Contact from "./components/Contact";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import FAQAccordion from "./components/FAQAccordion";

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
        <WhyChooseUs />
        <StatsSection />
        <InstructorsSection />
        <FAQAccordion />
        <Contact />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
};

export default App;
