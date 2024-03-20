import * as React from "react";
import Navbar from "./Navbar";

interface IHeroSectionProps {}

const HeroSection: React.FunctionComponent<IHeroSectionProps> = (props) => {
  return (
    <div className="bg-background bg-cover bg-no-repeat">
      <Navbar />
      <div className=""></div>
      <header
        id="hero-section"
        className="flex flex-col md:flex-row justify-center items-center md:h-[500px] container"
      >
        <div
          id="left-section"
          className="md:w-6/12 pt-[5rem] md:pt-[8rem] justify-center items-center"
        >
          <div className="text-white text-center md:text-left md:w-[25rem] mb-[5rem] md:mb-[10rem]">
            <h1 className="text-3xl md:text-6xl font-bold mb-10">
              First-Class Business Consultant
            </h1>
            <p className="text-xl">
              We know how large objects will act, but things on a small scale.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between mt-5">
              <button className="w-6/12 my-5 md:my-0 bg-orange-400 h-[2.5rem] rounded-2xl">
                Get Quote Now
              </button>
              <button className="w-2/5 border border-white h-[2.5rem] rounded-2xl">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div
          id="right-section"
          className="flex w-6/12 md:h-[500px] items-center justify-center"
        >
          <img src="agent-v 1.png" className="h-full min-w-[20rem]" />
        </div>
      </header>
    </div>
  );
};

export default HeroSection;
