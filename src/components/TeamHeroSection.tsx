"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
interface ITeamsHeroSectionProps {}

const TeamsHeroSection: React.FunctionComponent<ITeamsHeroSectionProps> = (
  props,
) => {
  const router = useRouter();
  return (
    <div className="">
      <header
        id="hero-section"
        className="container relative flex flex-col items-center justify-center bg-gradient-to-r from-slate-500 to-transparent md:h-[30rem] md:flex-row"
      >
        <div
          id="left-section"
          className="items-center  justify-center md:w-6/12 "
        >
          <div className="md:mb-15 mb-[5rem] text-center text-white md:w-[27rem] md:text-left">
            <h1 className="mb-10 text-3xl font-bold md:text-6xl">
              Your Trusted Partner in Agriculture
            </h1>
            <p className="text-xl">
              Accelerated innovation provides for new game-changing tools
            </p>
          </div>
        </div>
        <div id="right-section" className="h-full bg-red-500 md:w-6/12 ">
          <img src="team.jpg" className="h-full w-full object-cover" />
        </div>
      </header>
    </div>
  );
};

export default TeamsHeroSection;
