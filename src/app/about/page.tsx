"use client";
import * as React from "react";
import HeroSection from "@/components/HeroSection";
import AboutUsSection1 from "@/components/AboutUsSection1";
import AboutUsSection2 from "@/components/AboutUsSection2";
import AboutUsExplanation from "@/components/AboutUsExplanation";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = (props) => {
  return (
    <div>
      <HeroSection></HeroSection>
      <AboutUsExplanation></AboutUsExplanation>
      <AboutUsSection1 />
      <AboutUsSection2 />
    </div>
  );
};

export default About;
