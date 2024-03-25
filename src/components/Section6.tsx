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
        <div className=" items-center justify-center text-center text-[#0D2A40] md:pt-10">
          <h1 className="pt-5 text-3xl font-bold">Get In Touch </h1>
          <p className="mt-5 text-sm">
            Problems trying to resolve the conflict between
            <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="mx-[2rem] mt-16 flex flex-col items-center align-middle md:mx-[9rem] md:flex-row">
          <Card3 bgcolor="bg-[#9A1F22]" height="md:h-[20rem]">
            <div className="mb-2 flex justify-center text-[#fed150]">
              <LuPhone />
            </div>
            <h1 className="text-xl text-white  md:text-xs">Georgia Young</h1>
            <h1 className="text-xs  text-white">georgia.young@example.com</h1>
            <h1 className="mt-2  text-base font-bold text-white">
              Get Support
            </h1>
            <button className="h-[2rem] w-[9rem] rounded-lg border border-[#fed150] text-sm text-[#fed150]">
              Submit Request
            </button>
          </Card3>
          <Card3 bgcolor="bg-[#fed150]" height="md:h-[25rem]">
            <div className="mb-5 flex justify-center text-[#9A1F22]">
              <BiMap />
            </div>
            <h1 className="text-xl text-black  md:text-xs">Georgia Young</h1>
            <h1 className="text-xs  text-black">georgia.young@example.com</h1>
            <h1 className="mt-5  text-xl font-bold text-black">Get Support</h1>
            <button className="h-[2rem] w-[9rem] rounded-lg border border-[#9A1F22] text-sm text-[#9A1F22]">
              Submit Request
            </button>
          </Card3>
          <Card3 bgcolor="bg-[#9A1F22]" height="md:h-[20rem]">
            <div className="mb-5 flex justify-center text-[#fed150]">
              <FiSend />
            </div>
            <h1 className="text-xl text-white  md:text-xs">Georgia Young</h1>
            <h1 className="text-xs  text-white">georgia.young@example.com</h1>
            <h1 className="mt-2  text-base font-bold text-white">
              Get Support
            </h1>
            <button className="h-[2rem] w-[9rem] rounded-lg border border-[#fed150] text-sm text-[#fed150]">
              Submit Request
            </button>
          </Card3>
        </div>
      </div>
    </section>
  );
};

export default Section6;
