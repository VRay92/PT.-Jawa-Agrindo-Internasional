import * as React from "react";

interface ISection8Props {}

const Section8: React.FunctionComponent<ISection8Props> = (props) => {
  return (
    <section className=" bg-[#ffc132] pb-[5rem] pt-[5rem] text-white md:px-[9rem] text-sm">
      <div id="table" className="container flex md:flex-row flex-col">
        <div className=" space-y-2 mb-10 md:mb-0 w-[12rem]">
          <h1 className="font-bold">Company Info</h1>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div className="md:px-10 space-y-2 mb-10 md:mb-0 w-[12rem]">
          <h1 className="font-bold">Legal</h1>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div className="md:px-10 space-y-2 mb-10 md:mb-0 w-[12rem]">
          <h1 className="font-bold">Features</h1>
          <p>Business Marketing</p>
          <p>User Analytic</p>
          <p>Live Chat</p>
          <p>Unlimited Support</p>
        </div>
        <div className="md:px-10 space-y-2 mb-10 md:mb-0 w-[12rem]">
          <h1 className="font-bold">We are hiring</h1>
          <p>We are hiring</p>
          <p>Live Chat</p>
          <p>Customers</p>
          <p>
            debra.holt
            <br />
            @example.com
          </p>
        </div>
        <div className="md:pl-10 space-y-2 mb-10 md:mb-0 w-[12rem]">
          <h1 className="font-bold">Blog</h1>
          <p>Blog</p>
          <p>Unlimited Support</p>
          <p>API</p>
        </div>
      </div>
    </section>
  );
};

export default Section8;
