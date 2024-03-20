import * as React from "react";
import Card from "./Card";
import Video from "./Video";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoSpeedometerOutline } from "react-icons/io5";

interface ISection5Props {}

const Section5: React.FunctionComponent<ISection5Props> = (props) => {
  return (
    <section className=" bg-[#252b42] pb-[5rem] ">
      <div className=" grid grid-cols-2 grid-rows-3 md:flex text-center justify-center items-center text-white md:pt-10 container">
        <img src="col-md-3.png" className="h-auto md:min-w-[10rem]" />
        <img src="col-md-3-1.png" className="h-auto md:min-w-[8rem]" />
        <img src="col-md-3-2.png" className="h-auto md:min-w-[8rem]" />
        <img src="col-md-3-3.png" className="h-auto md:min-w-[8rem]" />
        <img src="col-md-3-4.png" className="h-auto md:min-w-[8rem]" />
        <img src="col-md-3-5.png" className="h-auto md:min-w-[8rem]" />
      </div>
    </section>
  );
};

export default Section5;
