import * as React from "react";

import Navbar from "./Navbar";
import { useRouter } from "next/navigation";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { getBlogPosts } from "@/utils/contentful";
import Image from "next/image";
import { BiMenuAltRight } from "react-icons/bi";

interface IAboutUsHeroSectionProps {}

const AboutUsHeroSection: React.FunctionComponent<IAboutUsHeroSectionProps> = (
  props,
) => {
  const [onClick, SetOnClick] = React.useState(false);
  const router = useRouter();

  return (
    <div>
      {onClick && (
        <div className="">
          <button
            className="flex h-[3rem] w-full items-center justify-center bg-[#ffc132] align-middle text-xl  text-white shadow-lg hover:bg-[#3A8CB1] hover:text-white"
            onClick={() => {
              router.push("/");
              SetOnClick(false);
            }}
          >
            Home
          </button>
          <button
            className="flex h-[3rem] w-full items-center justify-center bg-[#ffc132] align-middle text-xl  text-white shadow-lg hover:bg-[#3A8CB1] hover:text-white"
            onClick={() => {
              router.push("/about");
              SetOnClick(false);
            }}
          >
            About
          </button>
          <button
            className="flex h-[3rem] w-full items-center justify-center gap-2 bg-[#ffc132] align-middle text-xl  text-white shadow-lg hover:bg-[#3A8CB1] hover:text-white"
            onClick={() => {
              router.push("/products");
              SetOnClick(false);
            }}
          >
            Product
          </button>
          <button
            className="flex h-[3rem] w-full items-center justify-center gap-2 bg-[#ffc132] align-middle text-xl  text-white shadow-lg hover:bg-[#3A8CB1] hover:text-white"
            onClick={() => {
              router.push("/teams");
              SetOnClick(false);
            }}
          >
            Teams
          </button>
        </div>
      )}
      <div className="">
        <div className="relative hidden h-[660px] w-full md:block md:h-[660px]">
          <Image
            fill
            sizes="100vw"
            src="/hero-section2.webp"
            alt="hero"
            className="object-cover"
          ></Image>
        </div>
        <div className="relative block h-[660px] w-full md:hidden md:h-[660px]">
          <Image
            fill
            sizes="100vw"
            src="/hero-section2-mobile.webp"
            alt="hero"
            className="object-cover"
          ></Image>
        </div>
        <button
          className="ml-10 mt-3 block text-4xl text-white hover:text-black active:text-white md:hidden"
          onClick={() => SetOnClick((prevState) => !prevState)}
        >
          <BiMenuAltRight />
        </button>
        <header
          id="hero-section"
          className={`container absolute top-32 flex h-[550px] flex-col items-center justify-center md:top-32 md:h-[550px] md:flex-row`}
        >
          <div
            id="left-section"
            className="items-center  justify-center md:w-6/12"
          >
            <div className="md:mb-15 mb-[5rem] text-center text-white md:w-[27rem] md:text-left">
              <h1 className="mb-10 mt-24 text-3xl  font-bold md:mt-10 md:text-6xl">
                Your Trusted Partner in Agriculture
              </h1>
              <p className="text-xl">
                Accelerated innovation provides for new game-changing tools
              </p>
            </div>
          </div>
          <div
            id="right-section"
            className="mb-10 flex h-auto w-full justify-center md:w-6/12"
          >
            <img
              src="product.webp"
              className="hidden h-[10rem] md:relative md:-bottom-10 md:block md:h-[15rem]"
            />
          </div>
        </header>
        <a
          className="absolute bottom-0 left-1/2 mt-10  animate-bounce items-center justify-center text-center text-7xl text-white"
          href="#pesticide"
        >
          <h1 className="text-sm">scroll down</h1>
          <MdKeyboardDoubleArrowDown />
        </a>
      </div>
    </div>
  );
};

export default AboutUsHeroSection;
