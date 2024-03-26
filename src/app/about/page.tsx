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
      <HeroSection>
        <a
          href="#contactus"
          className="flex h-[2.5rem] w-2/5 items-center justify-center rounded-2xl border-2 border-white bg-white bg-opacity-15 text-center font-semibold hover:border-none hover:bg-[#ffc132]"
        >
          Contact us
        </a>
      </HeroSection>
      <AboutUsExplanation />
      <AboutUsSection1 />
      <AboutUsSection2 />
    </div>
  );
};

export default About;
