import React from "react";
import Introduction from "../components/AboutComponents/Introduction";
import Positions from "../components/AboutComponents/Positions";
import Education from "../components/AboutComponents/Education";
import Specializations from "../components/AboutComponents/Specializations";

const About = () => {
  return (
    <div>
      <Introduction />
      <Positions />
      <Education />
      <Specializations />
    </div>
  );
};

export default About;
