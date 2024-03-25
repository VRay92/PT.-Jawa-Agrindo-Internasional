import * as React from "react";

interface ISection7Props {}

const Section7: React.FunctionComponent<ISection7Props> = (props) => {
  return (
    <section className=" mt-10 bg-[#ffffff] pb-[5rem] md:px-[9rem]">
      <div className="container flex flex-col justify-between md:flex-row ">
        <div>
          <h1 className="text-2xl font-bold text-[#0D2A40]">
            Consulting Agriculture For Your Business
          </h1>
          <p className="text-[##0D2A40]">
            Connect with Us Today. Reach Out and Lets Start Building Together
          </p>
        </div>
        <button className="mt-5 h-[3rem] w-[8rem] rounded-md bg-orange-400 font-bold text-white">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Section7;
