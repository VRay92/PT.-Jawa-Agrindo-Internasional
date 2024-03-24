import * as React from "react";
import Card from "./Card";
import Video from "./Video";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoSpeedometerOutline } from "react-icons/io5";

interface ISection2Props {
  children: any;
}

const Section2: React.FunctionComponent<ISection2Props> = (props) => {
  return (
    <section className=" bg-[#ebecf0] pb-[5rem]">
      {props.children}
      <div className="container">
        <div className=" text-center justify-center items-center text-[#0D2A40] pt-10">
          <h1 className="text-3xl pt-5 font-bold">Who We Are </h1>
          <p className="mt-5 text-sm">
            Problems trying to resolve the conflict between
            <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div
          id="container"
          className="flex flex-col md:flex-row justify-between mt-10"
        >
          <div id="left-container1" className="w-full md:w-6/12 mb-10">
            <Video />
          </div>
          <div
            id="right-container1"
            className="mt-2 md:ml-10 text-[#0D2A40] w-full md:w-6/12"
          >
            <h1 className="text-3xl font-bold text-center md:text-left">
              Most trusted in our field
            </h1>
            <p className="mt-5 text-sm text-center md:text-left">
              Most calendars are designed for teams. Slate is designed for
              freelancers who want a simple way to plan their schedule.
            </p>
            <div className="flex items-center mt-5 gap-5 md:gap-0 px-3 md:px-0">
              <FaPeopleGroup
                size={40}
                color="orange"
                className="global-class-name"
              />
              <div className="md:ml-10">
                <h2 className="font-bold text-md">
                  the quick fox jumps over the lazy dog
                </h2>
                <p>Things on a very small scale ...</p>
              </div>
            </div>
            <div className="flex items-center mt-14 gap-5 md:gap-0 px-3 md:px-0">
              <IoSpeedometerOutline
                size={40}
                color="orange"
                className="global-class-name"
              />
              <div className="md:ml-10">
                <h2 className="font-bold">
                  Connect with Us Today. Reach Out and Let's Start Building
                  Together.
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

export default Section2;
