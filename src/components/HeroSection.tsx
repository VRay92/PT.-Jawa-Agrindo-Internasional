"use client";
import * as React from "react";

import Navbar from "./Navbar";
import { useRouter } from "next/navigation";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
interface IHeroSectionProps {
  children: any;
}

const HeroSection: React.FunctionComponent<IHeroSectionProps> = (props) => {
  const router = useRouter();
  return (
    <div className="max-w-[1920px] bg-background bg-cover bg-no-repeat pt-10">
      <header
        id="hero-section"
        className="container relative flex flex-col items-center justify-center md:h-[550px] md:flex-row"
      >
        <div
          id="left-section"
          className="items-center  justify-center md:w-6/12"
        >
          <div className="md:mb-15 mb-[5rem] text-center text-white md:w-[27rem] md:text-left">
            <h1 className="mb-10 mt-10 text-3xl font-bold md:text-6xl">
              Your Trusted Partner in Agriculture
            </h1>
            <p className="text-xl">
              Accelerated innovation provides for new game-changing tools
            </p>
            <div className="mt-5 flex flex-col items-center justify-center md:flex-row md:justify-between">
              <button
                className="my-5 h-[2.5rem] w-6/12 rounded-2xl bg-orange-400 font-medium hover:bg-white hover:text-orange-400 md:my-0"
                onClick={() => router.push("/about")}
              >
                Find Out More
              </button>
              <button className="h-[2.5rem] w-2/5 rounded-2xl border-2 border-white bg-white bg-opacity-15 font-semibold hover:border-none hover:bg-[#ffc132]">
                Contact us
              </button>
            </div>
          </div>
        </div>
        <div
          id="right-section"
          className="mb-10 flex h-auto w-full justify-center md:w-6/12"
        >
          <img
            src="product.png"
            className="hidden h-[10rem] md:relative md:-bottom-10 md:block md:h-[15rem] "
          />
          <img
            src="macerio2.png"
            className="margin-auto visible h-[15rem] md:hidden"
          />
        </div>
      </header>
      {props.children}
    </div>
  );
};

export default HeroSection;
