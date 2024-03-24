"use client";
import * as React from "react";
import { useRouter } from "next/navigation";

interface IAboutUsExplanationProps {
  children: any;
}

const AboutUsExplanation: React.FunctionComponent<IAboutUsExplanationProps> = (
  props
) => {
  const router = useRouter();
  return (
    <header
      id="section"
      className="flex flex-col md:flex-row mt-[5rem] w-full text-center md:text-justify md:h-auto container"
    >
      {props.children}
      <div className="text-[#0D2A40]">
        <div className="flex flex-col md:flex-row w-full justify-center">
          <img src="value.jpg" className="md:w-[35rem] h-fit md:mb-5" />
          <div className="md:ml-[5rem] mb-20">
            <h1 className="text-3xl md:text-6xl text-center md:text-left md:font-bold mt-10 md:mt-0 mb-5">
              About our company
            </h1>
            <p className="text-base md:text-justify">
              As a leading science-based agtech company, we help millions of
              farmers around the world to grow safe and nutritious food, while
              taking care of the planet. By improving crop productivity and
              making farming more efficient, we enable growers to provide
              healthy, high quality food safely and sustainably. Farmers must
              adapt to the effects of climate change, improve the soil and
              enhance biodiversity, and respond to society's views on food and
              agricultural technology.And we are transparent about what we're
              doing and the impact it's making.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center md:flex-row mt-10 w-full text-center md:text-justify">
          <img src="aboutus1.jpg" className="md:w-[35rem]" />
          <div className="md:ml-[5rem] mb-20">
            <h2 className="text-2xl mb-1 font-semibold mt-10 md:mt-0 ">
              1 June 2023
            </h2>
            <p>
              After joining the company in April 1, Bill Anderson becomes CEO of
              Bayer AG
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-10 text-center md:text-justify">
          <img src="aboutus2.jpg" className="md:w-[35rem]" />

          <div className="md:ml-[5rem] text-center md:text-justify mb-20">
            <h2 className="text-2xl mb-1 font-semibold mt-10 md:mt-0 ">
              8 November 2023
            </h2>
            <p>
              Bayer announces new operating model Dynamic Shared Ownership to
              focus on the mission, drive innovation and strengthen performance.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-10  ">
          <img src="aboutus3.avif" className="md:w-[35rem]" />
          <div className="md:ml-[5rem] text-center md:text-justify mb-20">
            <h2 className=" text-2xl mb-1 font-semibold mt-10 md:mt-0 ">
              17 January 2024
            </h2>
            <p>
              In a joint declaration, the Board of Management of Bayer AG and
              the employee representatives on the Supervisory Board agree on
              principles for the future of the company, particularly in its home
              country of Germany.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-10 text-center md:text-justify">
          <img src="aboutus4.jpg" className="md:w-[35rem]" />
          <div className="md:ml-[5rem] mb-20">
            <h2 className="text-2xl mb-1 font-semibold mt-10 md:mt-0 ">
              5 March 2024
            </h2>
            <p>
              Capital Markets Day - Bayer shares a comprehensive update on
              company direction
            </p>
          </div>
        </div>
        <div className="mt-10 mb-[10rem] text-center ">
          <h2 className="text-2xl mb-1">End 2024</h2>
          <p>
            Dynamic Shared Ownership rolled out to every corner of #TeamBayer.
          </p>
        </div>
      </div>
    </header>
  );
};

export default AboutUsExplanation;
