"use client";
import * as React from "react";
import HeroSection from "@/components/HeroSection";
import AboutUsSection1 from "@/components/AboutUsSection1";
import AboutUsSection2 from "@/components/AboutUsSection2";
import AboutUsExplanation from "@/components/AboutUsExplanation";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = (props) => {
  function scrollToAnchor(event: any) {
    event.preventDefault();

    const targetElement = document.querySelector("#toAnchor");

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  }
  return (
    <div>
      <HeroSection>
        <a
          className="flex flex-col text-white text-7xl text-center items-center animate-bounce transition-transform"
          href="#toAnchor"
          onClick={scrollToAnchor}
        >
          <p className="text-sm mb-2">scroll down</p>
          <MdKeyboardDoubleArrowDown />
        </a>
      </HeroSection>
      <AboutUsExplanation>
        <div id="toAnchor" />
      </AboutUsExplanation>
      <AboutUsSection1 />
      <AboutUsSection2 />
    </div>
  );
};

export default About;
