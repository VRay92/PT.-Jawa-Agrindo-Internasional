"use client";
import * as React from "react";

import Navbar from "./Navbar";
import { useRouter } from "next/navigation";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { getBlogPosts } from "@/utils/contentful";
import Image from "next/image";
import { BiMenuAltRight } from "react-icons/bi";

interface IHeroSectionProps {
  children: any;
}

const HeroSection: React.FunctionComponent<IHeroSectionProps> = (props) => {
  const [onClick, SetOnClick] = React.useState(false);
  const [article, getArticle] = React.useState();
  const router = useRouter();

  return (
    <div>
      {onClick && (
        <div className="">
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
      )}
      <div className="">
        <button
          className="absolute right-0 top-2 ml-10 mt-3 block hover:text-white md:hidden"
          onClick={() => SetOnClick((prevState) => !prevState)}
        >
          <BiMenuAltRight size={40} />
        </button>

        <div className="relative hidden h-[660px] w-full md:block">
          <Image
            fill
            sizes="100vw"
            src="/hero-section.webp"
            alt="hero"
            className="object-cover"
          ></Image>
        </div>
        <div className="relative block h-[660px] w-full md:hidden">
          <Image
            fill
            sizes="100vw"
            src="/hero-section-mobile.webp"
            alt="hero"
            className="object-cover"
          ></Image>
        </div>

        <header
          id="hero-section"
          className={`container absolute top-32 flex h-[550px] flex-col items-center justify-center md:top-32 md:h-[550px] md:flex-row`}
        >
          <div
            id="left-section"
            className="items-center  justify-center md:w-6/12"
          >
            <div className="md:mb-15 mb-[5rem] text-center text-white md:w-[27rem] md:text-left">
              <h1 className="mb-10 mt-32 text-3xl font-bold md:mt-10 md:text-6xl">
                Your Trusted Partner in Agriculture
              </h1>
              <p className="text-xl">
                Accelerated innovation provides for new game-changing tools
              </p>
              <div className="mt-5 flex flex-col items-center justify-center md:flex-row md:justify-between">
                <button
                  className="my-5 h-[2.5rem] w-6/12 rounded-2xl bg-orange-400 font-medium hover:bg-white hover:text-orange-400 md:my-0"
                  onClick={() => router.push("/about")}
                >
                  Find Out More
                </button>
              </div>
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

export default HeroSection;
