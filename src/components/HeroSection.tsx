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
  const [article, getArticle] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();

  return (
    <section className="relative">
      <div
        id="background-web"
        className="relative hidden h-[660px] w-full md:block"
      >
        <Image
          fill
          sizes="100vw"
          src="/hero-section.webp"
          alt="hero"
          className="object-cover"
        ></Image>
      </div>
      <div
        id="background-mobile"
        className="relative block h-[720px] w-full md:hidden"
      >
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
        className="container absolute top-10 flex h-[550px] flex-col items-center justify-center md:top-20 md:h-[550px] md:flex-row"
      >
        <div
          id="left-section"
          className="items-center justify-center md:w-6/12"
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
            onLoad={() => setLoading(false)}
          />
        </div>
      </header>
      <a
        id="element"
        className="absolute bottom-0 left-[40%] mt-10 animate-bounce text-7xl text-white md:left-[48%]"
        href="#pesticide"
      >
        <h1 className="text-sm">scroll down</h1>
        <MdKeyboardDoubleArrowDown />
      </a>
    </section>
  );
};

export default HeroSection;
