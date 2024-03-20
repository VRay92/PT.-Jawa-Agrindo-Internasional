import * as React from "react";
import Card from "./Card";
import { SlBriefcase } from "react-icons/sl";
import { AiTwotoneShop } from "react-icons/ai";
import { SlNotebook } from "react-icons/sl";
import { SiHomeassistantcommunitystore } from "react-icons/si";

interface ISection2Props {
  Card: string;
  children: string;
}

const Section2: React.FunctionComponent<ISection2Props> = (props) => {
  return (
    <section className=" bg-[#252b42] py-[5rem]">
      <div className="container">
        <div className="text-center justify-center items-center text-white pt-10">
          <h1 className="text-3xl font-bold">What We Do </h1>
          <p className="mt-5 text-sm">
            Problems trying to resolve the conflict between
            <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div
          id="card-container"
          className=" flex gap-2 md:gap-10 justify-between mt-10"
        >
          <Card
            bgcolor="bg-white"
            textcolor="text-teal-800"
            description="Environmental"
          >
            <SlBriefcase />
          </Card>
          <Card
            bgcolor="bg-teal-800"
            textcolor="text-white"
            description="Save money and time"
          >
            <AiTwotoneShop />
          </Card>
          <Card
            bgcolor="bg-white"
            textcolor="text-teal-800"
            description="Financial Services"
          >
            <SlNotebook color="teal-800" />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Section2;
