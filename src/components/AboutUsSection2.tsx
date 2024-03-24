"use client";
import * as React from "react";
import { useRouter } from "next/navigation";

interface IAboutUsSection2Props {}

const AboutUsSection2: React.FunctionComponent<IAboutUsSection2Props> = (
  props
) => {
  const router = useRouter();
  return (
    <header
      id="hero-section"
      className="flex flex-col md:flex-row justify-center items-center md:h-[500px] container relative"
    >
      <div
        id="left-section"
        className="md:w-6/12 pt-[5rem] md:pt-[8rem] justify-center items-center"
      >
        <div className="text-[#0D2A40] text-center md:text-left md:w-[27rem] mb-[5rem] md:mb-[10rem]">
          <h1 className="text-3xl md:text-6xl font-bold mb-10">
            The value we create
          </h1>
          <p className="text-base text-justify">
            PT. Jawa Agrindo creates value for all our stakeholders - farmers,
            employees, suppliers, food chain partners, the communities where we
            work, and society at large. We measure our success not only by our
            business performance, but also by the benefits we bring to farming
            and the environment.
          </p>
        </div>
      </div>
      <div></div>
      <div
        id="right-section"
        className="flex w-full justify-center mb-10 md md:w-6/12 h-auto"
      >
        <img
          src="value.jpg"
          className="md:w-[35rem] hidden md:block md:relative md:-bottom-10 "
        />
      </div>
    </header>
  );
};

export default AboutUsSection2;
