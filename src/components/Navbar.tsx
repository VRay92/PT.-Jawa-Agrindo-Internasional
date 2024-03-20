import * as React from "react";
import { SlMagnifier } from "react-icons/sl";
import { IoCartOutline } from "react-icons/io5";
import { TbMenuDeep } from "react-icons/tb";
interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  return (
    <nav className="container">
      <div className="flex h-[4rem] align-middle items-center px-3 md:px-0 justify-between">
        <h1 className="font-bold text-white text-xl">company</h1>
        <ul className=" text-white hidden md:block">
          <div className="flex gap-10 items-center">
            <li>Home</li>
            <li>Product</li>
            <li>Pricing</li>
            <li>Contact</li>
          </div>
        </ul>
        <IoCartOutline size={30} className="text-white" />
        <div className="flex justify-end md:w-[15rem]">
          <div
            id="desktop-navbar"
            className="flex justify-end items-center  h-[2.5rem] gap-3 bg-white rounded-md pl-2 invisible md:visible"
          >
            <SlMagnifier color="black" />
            <input
              type="text"
              className="w-[15rem] h-[2.5rem] rounded-r-md"
              placeholder="Search.."
            />
          </div>
          <div
            id="mobile-navbar"
            className="flex w-[10rem] visible md:invisible"
          >
            <SlMagnifier size={30} color="black" />
            <TbMenuDeep size={30} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
