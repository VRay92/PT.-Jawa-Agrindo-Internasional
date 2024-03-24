import * as React from "react";
import Card3 from "./Card3";
import { LuPhone } from "react-icons/lu";
import { BiMap } from "react-icons/bi";
import { FiSend } from "react-icons/fi";

interface ISection6Props {}

const Section6: React.FunctionComponent<ISection6Props> = (props) => {
  return (
    <section className=" bg-[#ebecf0] pb-[5rem] ">
      <div className="container">
        <div className=" text-center justify-center items-center text-[#0D2A40] md:pt-10">
          <h1 className="text-3xl pt-5 font-bold">Get In Touch </h1>
          <p className="mt-5 text-sm">
            Problems trying to resolve the conflict between
            <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="flex flex-col md:flex-row align-middle items-center mt-16 mx-[2rem] md:mx-[9rem]">
          <Card3 bgcolor="bg-[#9A1F22]" height="md:h-[20rem]">
            <div className="flex justify-center mb-2 text-[#fed150]">
              <LuPhone />
            </div>
            <h1 className="text-xl md:text-xs  text-white">Georgia Young</h1>
            <h1 className="text-xs  text-white">georgia.young@example.com</h1>
            <h1 className="text-base  text-white font-bold mt-2">
              Get Support
            </h1>
            <button className="text-sm border border-[#fed150] w-[9rem] h-[2rem] rounded-lg text-[#fed150]">
              Submit Request
            </button>
          </Card3>
          <Card3 bgcolor="bg-[#fed150]" height="md:h-[25rem]">
            <div className="flex justify-center mb-5 text-[#9A1F22]">
              <BiMap />
            </div>
            <h1 className="text-xl md:text-xs  text-black">Georgia Young</h1>
            <h1 className="text-xs  text-black">georgia.young@example.com</h1>
            <h1 className="text-xl  text-black font-bold mt-5">Get Support</h1>
            <button className="text-sm border border-[#9A1F22] w-[9rem] h-[2rem] rounded-lg text-[#9A1F22]">
              Submit Request
            </button>
          </Card3>
          <Card3 bgcolor="bg-[#9A1F22]" height="md:h-[20rem]">
            <div className="flex justify-center mb-5 text-[#fed150]">
              <FiSend />
            </div>
            <h1 className="text-xl md:text-xs  text-white">Georgia Young</h1>
            <h1 className="text-xs  text-white">georgia.young@example.com</h1>
            <h1 className="text-base  text-white font-bold mt-2">
              Get Support
            </h1>
            <button className="text-sm border border-[#fed150] w-[9rem] h-[2rem] rounded-lg text-[#fed150]">
              Submit Request
            </button>
          </Card3>
        </div>
      </div>
    </section>
  );
};

export default Section6;
