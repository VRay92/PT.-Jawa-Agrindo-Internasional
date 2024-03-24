"use client";
import * as React from "react";
import { SlMagnifier } from "react-icons/sl";
import { IoCartOutline } from "react-icons/io5";
import { TbMenuDeep } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { BiMenuAltRight } from "react-icons/bi";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  const [onClick, SetOnClick] = React.useState(false);
  const router = useRouter();
  return (
    <div>
      <nav className=" container relative top-0 bg-[#ffc132]">
        <div className="">
          <div className="flex h-[5rem] items-center align-middle md:justify-between md:px-0 ">
            <img src="logoJAI.png" alt="logo" className="w-[18rem] " />
            <button
              className="ml-10 mt-3 block text-4xl text-white hover:text-black active:text-white md:hidden"
              onClick={() => SetOnClick((prevState) => !prevState)}
            >
              <BiMenuAltRight />
            </button>

            <div
              id="menu"
              className="hidden items-center text-[#0D2A40] md:flex"
            >
              <button
                className="h-[5rem] border-b-4 border-[#ffc132] px-4 hover:border-white hover:text-white"
                onClick={() => router.push("/")}
              >
                Home
              </button>
              <button
                className="h-[5rem] border-b-4 border-[#ffc132] px-4 hover:border-white hover:text-white"
                onClick={() => router.push("/about")}
              >
                About
              </button>
              <button
                className="h-[5rem] border-b-4 border-[#ffc132] px-4 hover:border-white hover:text-white"
                onClick={() => router.push("/products")}
              >
                Product
              </button>
              <button
                className="mr-5 h-[5rem] border-b-4 border-[#ffc132] px-4 hover:border-white hover:text-white"
                onClick={() => router.push("/teams")}
              >
                Teams
              </button>
              <div className=" flex">
                <div
                  id="desktop-navbar"
                  className="invisible flex h-[2.2rem]  items-center  gap-3 rounded-md bg-white pl-2 md:visible"
                >
                  <SlMagnifier color="black" />
                  <input
                    type="text"
                    className="h-[2.2rem] rounded-r-md"
                    placeholder="Search.."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {onClick && (
        <div className="">
          <button
            className="flex h-[5rem] w-full items-center justify-center bg-[#ffc132] align-middle text-xl font-bold text-white shadow-lg hover:bg-[#3A8CB1] hover:text-white"
            onClick={() => {
              router.push("/");
              SetOnClick(false);
            }}
          >
            Home
          </button>
          <button
            className="flex h-[5rem] w-full items-center justify-center bg-[#ffc132] align-middle text-xl font-bold text-white shadow-lg hover:bg-[#3A8CB1] hover:text-white"
            onClick={() => {
              router.push("/about");
              SetOnClick(false);
            }}
          >
            About
          </button>
          <button
            className="flex h-[5rem] w-full items-center justify-center gap-2 bg-[#ffc132] align-middle text-xl font-bold text-white shadow-lg hover:bg-[#3A8CB1] hover:text-white"
            onClick={() => {
              router.push("/products");
              SetOnClick(false);
            }}
          >
            Product
          </button>
          <button
            className="flex h-[5rem] w-full items-center justify-center gap-2 bg-[#ffc132] align-middle text-xl font-bold text-white shadow-lg hover:bg-[#3A8CB1] hover:text-white"
            onClick={() => {
              router.push("/teams");
              SetOnClick(false);
            }}
          >
            Teams
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
