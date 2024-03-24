"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
interface ITeamsHeroSectionProps {}

const TeamsHeroSection: React.FunctionComponent<ITeamsHeroSectionProps> = (
  props
) => {
  const router = useRouter();
  return (
    <div className="">
      <header
        id="hero-section"
        className="flex flex-col md:flex-row justify-center items-center md:h-[30rem] relative bg-slate-500 container"
      >
        <div
          id="left-section"
          className="md:w-6/12  justify-center items-center "
        >
          <div className="text-white text-center md:text-left md:w-[27rem] mb-[5rem] md:mb-15">
            <h1 className="text-3xl md:text-6xl font-bold mb-10">
              Your Trusted Partner in Agriculture
            </h1>
            <p className="text-xl">
              Accelerated innovation provides for new game-changing tools
            </p>
          </div>
        </div>
        <div id="right-section" className="md:w-6/12 h-full bg-red-500 ">
          <img src="team.jpg" className="w-full h-full object-cover" />
        </div>
      </header>
    </div>
  );
};

export default TeamsHeroSection;
