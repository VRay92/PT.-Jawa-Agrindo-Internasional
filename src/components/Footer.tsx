import * as React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <section className="bg-black pb-[5rem] pt-10 md:px-[9rem]">
      <div className="container flex flex-col justify-between align-middle text-white md:flex-row">
        <div className="flex flex-col">
          <h1>PT. Jawa Agrindo Internasional @ 2024 </h1>
          <h1>All Rights Reserved.</h1>
        </div>
        <div className="flex gap-4 pt-5 text-2xl">
          <FaTwitter></FaTwitter>
          <FaInstagram></FaInstagram>
          <FaSquareFacebook></FaSquareFacebook>
          <FaYoutube></FaYoutube>
        </div>
      </div>
    </section>
  );
};

export default Footer;
