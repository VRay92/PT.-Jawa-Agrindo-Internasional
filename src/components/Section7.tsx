import * as React from "react";

interface ISection7Props {}

const Section7: React.FunctionComponent<ISection7Props> = (props) => {
  return (
    <section className=" bg-[#ffffff] pb-[5rem] md:px-[9rem] mt-10">
      <div className="container flex flex-col md:flex-row justify-between ">
        <div>
          <h1 className="font-bold text-2xl text-[#0D2A40]">
            Consulting Agriculture For Your Business
          </h1>
          <p className="text-[##0D2A40]">
            Connect with Us Today. Reach Out and Let's Start Building Together
          </p>
        </div>
        <button className="rounded-md bg-orange-400 w-[8rem] h-[3rem] text-white font-bold mt-5">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Section7;
