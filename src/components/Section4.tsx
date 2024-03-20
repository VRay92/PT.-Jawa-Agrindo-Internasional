import * as React from "react";
import Card from "./Card";
import Video from "./Video";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoSpeedometerOutline } from "react-icons/io5";

interface ISection4Props {}

const Section4: React.FunctionComponent<ISection4Props> = (props) => {
  return (
    <section className=" bg-[#252b42] pb-[5rem] ">
      <div className="container">
        <div className=" text-center justify-center items-center text-white md:pt-10">
          <h1 className="text-3xl pt-5 font-bold">Who We Are </h1>
          <p className="mt-5 text-sm">
            Problems trying to resolve the conflict between
            <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div id="container" className="flex flex-col md:flex-row">
          <div
            id="video"
            className="gap-10 justify-between mt-10 mb-20 h-[20rem]"
          >
            <Video />
          </div>
          <div
            id="right-container"
            className="mt-2 md:mt-28 md:ml-10 text-white"
          >
            <h1 className="text-3xl font-bold text-center md:text-left">
              Most trusted in our field{" "}
            </h1>
            <p className="mt-5 text-sm text-center md:text-left">
              Most calendars are designed for teams. Slate is designed for
              freelancers who want a simple way to plan their schedule.
            </p>
            <div className="flex items-center mt-5 gap-5 px-3 md:px-0">
              <FaPeopleGroup
                size={40}
                color="orange"
                className="global-class-name"
              />
              <div className="gap-5 md:ml-10">
                <h2 className="font-bold text-md">
                  the quick fox jumps over the lazy dog
                </h2>
                <p>Things on a very small scale ...</p>
              </div>
            </div>
            <div className="flex items-center mt-14 gap-5 px-3 md:px-0">
              <IoSpeedometerOutline
                size={40}
                color="orange"
                className="global-class-name"
              />
              <div className="md:ml-10">
                <h2 className="font-bold">
                  the quick fox jumps over the lazy dog
                </h2>
                <p>Things on a very small scale ...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
