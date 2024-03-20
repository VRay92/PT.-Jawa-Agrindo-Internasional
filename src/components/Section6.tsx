import * as React from "react";
import Card3 from "./Card3";
import { LuPhone } from "react-icons/lu";
import { BiMap } from "react-icons/bi";
import { FiSend } from "react-icons/fi";

interface ISection6Props {
  Card3: any;
}

const Section6: React.FunctionComponent<ISection6Props> = (props) => {
  return (
    <section className=" bg-[#252b42] pb-[5rem] ">
      <div className="container">
        <div className=" text-center justify-center items-center text-white md:pt-10">
          <h1 className="text-3xl pt-5 font-bold">Get In Touch </h1>
          <p className="mt-5 text-sm">
            Problems trying to resolve the conflict between
            <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="flex align-middle items-center mt-16 mx-[2rem]">
          <Card3 bgcolor="bg-white" height="md:h-64" className="">
            <div className="flex justify-center mb-2 text-[#FF7B47]">
              <LuPhone />
            </div>
            <h1 className="text-xs  text-black">Georgia Young</h1>
            <h1 className="text-xs  text-black">georgia.young@example.com</h1>
            <h1 className="text-base  text-black font-bold mt-2">
              Get Support
            </h1>
            <button className="text-sm border border-[#FF7B47] w-[9rem] h-[2rem] rounded-lg text-[#FF7B47]">
              Submit Request
            </button>
          </Card3>
          <Card3 bgcolor="bg-teal-800" height="md:h-80">
            <div className="flex justify-center mb-5 text-white">
              <BiMap />
            </div>
            <h1 className="text-xs  text-white">Georgia Young</h1>
            <h1 className="text-xs  text-white">georgia.young@example.com</h1>
            <h1 className="text-xl  text-white font-bold mt-5">Get Support</h1>
            <button className="text-sm border border-white w-[9rem] h-[2rem] rounded-lg text-white">
              Submit Request
            </button>
          </Card3>
          <Card3 bgcolor="bg-white" height="md:h-64">
            <div className="flex justify-center mb-5 text-[#FF7B47]">
              <FiSend />
            </div>
            <h1 className="text-xs  text-black">Georgia Young</h1>
            <h1 className="text-xs  text-black">georgia.young@example.com</h1>
            <h1 className="text-base  text-black font-bold mt-2">
              Get Support
            </h1>
            <button className="text-sm border border-[#FF7B47] w-[9rem] h-[2rem] rounded-lg text-[#FF7B47]">
              Submit Request
            </button>
          </Card3>
        </div>
      </div>
    </section>
  );
};

export default Section6;
