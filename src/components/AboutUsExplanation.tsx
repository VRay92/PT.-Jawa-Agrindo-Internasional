"use client";
import * as React from "react";
import { useRouter } from "next/navigation";

interface IAboutUsExplanationProps {}

const AboutUsExplanation: React.FunctionComponent<IAboutUsExplanationProps> = (
  props,
) => {
  const router = useRouter();
  return (
    <section
      id="section"
      className="container mt-[5rem] flex w-full flex-col text-center md:h-auto md:flex-row md:text-justify"
    >
      <div className="text-[#0D2A40]">
        <div className="flex w-full flex-col justify-center md:flex-row">
          <img src="factory.webp" className="h-fit md:mb-5 md:w-1/2" />
          <div className="mb-20 md:ml-[5rem]">
            <h1 className="mb-5 mt-10 w-full text-3xl font-semibold md:mt-0 md:text-4xl md:font-bold">
              About <br /> our company
            </h1>
            <p className="text-justify text-base">
              As a leading science-based agtech company, we help millions of
              farmers around the world to grow safe and nutritious food, while
              taking care of the planet. By improving crop productivity and
              making farming more efficient, we enable growers to provide
              healthy, high quality food safely and sustainably. Farmers must
              adapt to the effects of climate change, improve the soil and
              enhance biodiversity, and respond to societys views on food and
              agricultural technology.And we are transparent about what were
              doing and the impact its making.
            </p>
          </div>
        </div>
        <div className="mt-10 flex w-full flex-col justify-center text-center md:flex-row md:text-justify">
          <img src="aboutus1.jpg" className="md:w-[35rem]" />
          <div className="mb-20 md:ml-[5rem]">
            <h2 className="mb-1 mt-10 text-2xl font-semibold md:mt-0 ">
              1 June 2023
            </h2>
            <p className="text-justify">
              After joining the company in April 1, Bill Anderson becomes CEO of
              PT. Jawa Agrindo Internasional
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col text-center md:flex-row md:text-justify">
          <img src="aboutus2.jpg" className="md:w-[35rem]" />

          <div className="mb-20 text-center md:ml-[5rem] md:text-justify">
            <h2 className="mb-1 mt-10 text-2xl font-semibold md:mt-0 ">
              8 November 2023
            </h2>
            <p className="text-justify">
              PT. Jawa Agrindo Internasional announces new operating model
              Dynamic Shared Ownership to focus on the mission, drive innovation
              and strengthen performance.
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row  ">
          <img src="aboutus3.avif" className="md:w-[35rem]" />
          <div className="mb-20 text-center md:ml-[5rem] md:text-justify">
            <h2 className=" mb-1 mt-10 text-2xl font-semibold md:mt-0 ">
              17 January 2024
            </h2>
            <p>
              In a joint declaration, the Board of Management of PT. Jawa
              Agrindo Internasional and the employee representatives on the
              Supervisory Board agree on principles for the future of the
              company, particularly in its home country of Germany.
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col text-center md:flex-row md:text-justify">
          <img src="aboutus4.jpg" className="md:w-[35rem]" />
          <div className="mb-20 md:ml-[5rem]">
            <h2 className="mb-1 mt-10 text-2xl font-semibold md:mt-0 ">
              5 March 2024
            </h2>
            <p className="text-justify">
              Capital Markets Day - PT. Jawa Agrindo Internasional shares a
              comprehensive update on company direction
            </p>
          </div>
        </div>
        <div className="mb-[10rem] mt-10 text-center ">
          <h2 className="mb-1 text-2xl">End 2024</h2>
          <p className="text-justify">
            Dynamic Shared Ownership rolled out to every corner of
            #TeamJawaAgrindo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsExplanation;
