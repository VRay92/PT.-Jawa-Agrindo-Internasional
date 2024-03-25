import * as React from "react";
import Card from "./Card";
import Video from "./Video";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoSpeedometerOutline } from "react-icons/io5";
import { getBlogPosts } from "@/utils/contentful";

interface ISection2Props {}

const Section2: React.FunctionComponent<ISection2Props> = (props) => {
  const [article1, setArticle1] = React.useState([]);
  // React.useEffect(() => {
  //   getOtherArticle();
  // }, []);
  // const getOtherArticle = async () => {
  //   try {
  //     const response = await getBlogPosts();
  //     setArticle1(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <section className=" bg-[#ebecf0] pb-[5rem]">
      <div className="container">
        <div className=" items-center justify-center pt-10 text-center text-[#0D2A40]">
          <h1 className="pt-5 text-3xl font-bold">Who We Are </h1>
          <p className="mt-5 text-justify text-base">
            We develop and manufacture a wide range of cutting-edge pesticides
            tailored to address the diverse needs of farmers, homeowners, and
            industries worldwide. Our products are tested and formulated to
            target specific pests while minimizing environmental impact and
            ensuring user safety.
          </p>
        </div>
        <div
          id="container"
          className="mt-10 flex flex-col justify-between md:flex-row"
        >
          <div id="left-container1" className="mb-10 w-full md:w-6/12">
            <Video />
          </div>
          <div
            id="right-container1"
            className="mt-2 w-full text-[#0D2A40] md:ml-10 md:w-6/12"
          >
            <h1 className="text-center text-3xl font-bold md:text-left">
              Most trusted in our field
            </h1>
            <p className="mt-5 text-center text-base md:text-left">
              PT. Jawa Agrindo is renowned for our unwavering commitment to
              quality, reliability, and effectiveness
            </p>
            <div className="mt-5 flex items-center  gap-5 px-3  md:gap-0 md:px-0">
              <div className="text-5xl">
                <FaPeopleGroup color="orange" />
              </div>

              <div className="ml-3 mt-5 text-justify md:ml-10">
                <h2 className="text-md  font-bold">Trusted Reliability</h2>
                <p>
                  With a long-standing reputation for quality, reliability, and
                  safety, our products are trusted by customers
                </p>
              </div>
            </div>
            <div className="mt-14 flex items-center gap-5 px-3 md:gap-0 md:px-0">
              <div className="text-5xl">
                <IoSpeedometerOutline
                  color="orange"
                  className="global-class-name"
                />
              </div>
              <div className="ml-3 text-justify md:ml-10">
                <h2 className="font-bold">Cutting-edge Innovation</h2>
                <p>
                  Forefront of pesticide development, continuously innovating to
                  create cutting-edge solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
