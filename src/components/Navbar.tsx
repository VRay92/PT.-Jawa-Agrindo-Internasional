"use client";
import * as React from "react";
import { SlMagnifier } from "react-icons/sl";
import { usePathname, useRouter } from "next/navigation";
import { BiMenuAltRight } from "react-icons/bi";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  const router = useRouter();
  const [onClick, SetOnClick] = React.useState(false);
  return (
    <div className="relative">
      <nav className="relative bg-[#ffc132]">
        <div id="main-navbar" className="container">
          <div className="flex h-[5rem] items-center justify-center align-middle md:justify-between md:px-0 ">
            <img
              src="logoJAI.png"
              alt="logo"
              className="w-[18rem] cursor-pointer"
              onClick={() => {
                router.push("/");
              }}
            />

            {/* menu button */}
            <div
              id="menu"
              className="hidden items-center text-[#0D2A40] md:flex"
            >
              <button
                className={`h-[5rem] px-4 hover:border-b-4 hover:border-white hover:text-white  ${usePathname() === "/" ? "border-b-4 border-white text-white" : ""}`}
                onClick={() => {
                  router.push("/");
                }}
              >
                Home
              </button>

              <button
                className={`h-[5rem] border-b-4 border-[#ffc132] px-4 hover:border-white hover:text-white ${usePathname() === "/about" ? "border-b-4 border-white text-white" : ""}`}
                onClick={() => {
                  router.push("/about");
                }}
              >
                About
              </button>
              <button
                className={`h-[5rem] border-b-4 border-[#ffc132] px-4 hover:border-white hover:text-white ${usePathname() === "/products" ? "border-b-4 border-white text-white" : ""}`}
                onClick={() => {
                  router.push("/products");
                }}
              >
                Product
              </button>
              <button
                className={`mr-5 h-[5rem] border-b-4 border-[#ffc132] px-4 hover:border-white hover:text-white ${usePathname() === "/teams" ? "border-b-4 border-white text-white" : ""}`}
                onClick={() => {
                  router.push("/teams");
                }}
              >
                Teams
              </button>
              <div className=" flex">
                <div
                  id="searchbar"
                  className="hidden h-[2.2rem] items-center gap-3 rounded-md bg-white pl-2 md:flex"
                >
                  <SlMagnifier color="black" />
                  <input
                    type="text"
                    className="h-[2.2rem] rounded-r-md border-none"
                    placeholder="Search.."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* navbar drop-down */}
      <div
        className={`absolute top-20 z-[99] w-full ${onClick ? "block" : "hidden"}`}
      >
        <button
          className="flex h-[2.5rem] w-full items-center justify-center bg-[#ffc132] align-middle text-xl  text-white shadow-lg hover:bg-[#3A8CB1] hover:text-white"
          onClick={() => {
            router.push("/");
            SetOnClick(false);
          }}
        >
          Home
        </button>
        <button
          className="flex h-[2.5rem] w-full items-center justify-center bg-[#ffc132] align-middle text-xl  text-white shadow-lg hover:bg-[#3A8CB1] hover:text-white"
          onClick={() => {
            router.push("/about");
            SetOnClick(false);
          }}
        >
          About
        </button>
        <button
          className="flex h-[2.5rem] w-full items-center justify-center gap-2 bg-[#ffc132] align-middle text-xl  text-white shadow-lg hover:bg-[#3A8CB1] hover:text-white"
          onClick={() => {
            router.push("/products");
            SetOnClick(false);
          }}
        >
          Product
        </button>
        <button
          className="flex h-[2.5rem] w-full items-center justify-center gap-2 bg-[#ffc132] align-middle text-xl  text-white shadow-lg hover:bg-[#3A8CB1] hover:text-white"
          onClick={() => {
            router.push("/teams");
            SetOnClick(false);
          }}
        >
          Teams
        </button>
      </div>

      <button
        className="absolute right-0 top-2 ml-10 mt-3 block hover:text-white md:hidden"
        onClick={() => SetOnClick((prevState) => !prevState)}
      >
        <BiMenuAltRight size={40} />
      </button>
    </div>
  );
};

export default Navbar;
