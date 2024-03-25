import * as React from "react";
import Card from "./Card";
import Video from "./Video";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoSpeedometerOutline } from "react-icons/io5";
import { getBlogPosts } from "@/utils/contentful";

interface ISection2Props {
  children: any;
}

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
      {props.children}
      <div className="container">
        <div className=" items-center justify-center pt-10 text-center text-[#0D2A40]">
          <h1 className="pt-5 text-3xl font-bold">Who We Are </h1>
          <p className="mt-5 text-sm">
            Problems trying to resolve the conflict between
            <br />
            the two major realms of Classical physics: Newtonian mechanics
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
            <p className="mt-5 text-center text-sm md:text-left">
              Most calendars are designed for teams. Slate is designed for
              freelancers who want a simple way to plan their schedule.
            </p>
            <div className="mt-5 flex items-center gap-5 px-3 md:gap-0 md:px-0">
              <FaPeopleGroup
                size={40}
                color="orange"
                className="global-class-name"
              />
              <div className="md:ml-10">
                <h2 className="text-md font-bold">
                  the quick fox jumps over the lazy dog
                </h2>
                <p>Things on a very small scale ...</p>
              </div>
            </div>
            <div className="mt-14 flex items-center gap-5 px-3 md:gap-0 md:px-0">
              <IoSpeedometerOutline
                size={40}
                color="orange"
                className="global-class-name"
              />
              <div className="md:ml-10">
                <h2 className="font-bold">
                  Connect with Us Today. Reach Out and Let's Start Building
                  Together.
                </h2>
                <p>Things on a very small scale ...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
