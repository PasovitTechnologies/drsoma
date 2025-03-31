import React from "react";
import Introduction from "../components/AboutComponents/Introduction";
import Positions from "../components/AboutComponents/Positions";
import Education from "../components/AboutComponents/Education";
import Specializations from "../components/AboutComponents/Specializations";
import Additional from "../components/AboutComponents/Additional";
import { ParallaxProvider } from "react-scroll-parallax";
import Appointment from "../components/AboutComponents/Appointment";

const About = () => {
  return (
    <ParallaxProvider>
      <Introduction />
      <Positions />
      <Education />
      <Specializations />
      <Additional />
      <Appointment />
    </ParallaxProvider>
  );
};

export default About;
