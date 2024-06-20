"use client";
import * as React from "react";

import Navbar from "./Navbar";
import { useRouter } from "next/navigation";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { getBlogPosts } from "@/utils/contentful";
import Image from "next/image";
import { BiMenuAltRight } from "react-icons/bi";
import { useEffect } from "react";

interface IHeroSectionProps {
  children: any;
}

const HeroSection: React.FunctionComponent<IHeroSectionProps> = (props) => {
  const [article, getArticle] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();

  useEffect(() => {
    setInterval(() => setLoading(false), 2000);
  }, []);

  return (
    <section className="relative">
      {loading && (
        <div className="fixed left-0 top-0 z-50 h-screen w-screen bg-black bg-opacity-50 backdrop-blur-sm backdrop-filter">
          <span className="absolute left-1/2 top-2/4 -translate-x-1/2 -translate-y-1/2  p-0.5 px-2 text-center text-xs font-medium leading-none text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            <div className="flex h-56 w-56 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </span>
        </div>
      )}
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
