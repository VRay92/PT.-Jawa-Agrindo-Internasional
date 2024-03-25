import * as React from "react";
import Card from "./Card";
import Video from "./Video";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoSpeedometerOutline } from "react-icons/io5";

interface ISection5Props {}

const Section5: React.FunctionComponent<ISection5Props> = (props) => {
  return (
    <div className=" flex flex-col gap-10 bg-[#ffffff] px-16 pb-[5rem] pt-10 text-[#0D2A40] md:container md:mx-0 md:flex-row md:pt-20">
      <img src="macerio.webp" className="md:h-auto md:w-[8rem] md:flex-1" />
      <img src="piribac.webp" className="md:h-auto md:w-[8rem] md:flex-1" />
      <img src="kloopir.webp" className="md:h-auto md:w-[8rem] md:flex-1" />
      <img src="pounder.webp" className="md:h-auto md:w-[8rem] md:flex-1" />
      <img src="vectral.webp" className="md:h-auto md:w-[8rem] md:flex-1" />
    </div>
  );
};

export default Section5;
