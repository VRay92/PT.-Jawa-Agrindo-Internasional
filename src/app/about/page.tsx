"use client";
import * as React from "react";
import AboutUsSection1 from "@/components/AboutUsSection1";
import AboutUsSection2 from "@/components/AboutUsSection2";
import AboutUsExplanation from "@/components/AboutUsExplanation";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import AboutUsHeroSection from "@/components/AboutUsHeroSection";

interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = (props) => {
  return (
    <div>
      <AboutUsHeroSection />
      <AboutUsExplanation />
      <AboutUsSection1 />
      <AboutUsSection2 />
    </div>
  );
};

export default About;
