import React from "react";
import HeroSection from "../components/HomeComponents/HeroSection";
import Specializations from "../components/HomeComponents/Specializations";
import Education from "../components/HomeComponents/Education";
import AdditionalEducation from "../components/HomeComponents/AdditionalEducation";
import ResearchInterests from "../components/HomeComponents/ResearchInterests";
import Projects from "../components/HomeComponents/Projects";
import WorkExperience from "../components/HomeComponents/WorkExperience";
import Awards from "../components/HomeComponents/Awards";
import Memberships from "../components/HomeComponents/Memberships";
import Publications from "../components/HomeComponents/Publications";

const Home = () => {
  return (
    <div className="bg-[#e8e6e6] ">
      <HeroSection />
      <Specializations />
      <Education />
      <AdditionalEducation />
      <ResearchInterests />
      <Projects />
      <WorkExperience />
      <Awards />
      <Memberships />
      <Publications />
    </div>
  );
};

export default Home;
