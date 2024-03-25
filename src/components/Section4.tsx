import * as React from "react";
import Card from "./Card";
import { SlBriefcase } from "react-icons/sl";
import { AiTwotoneShop } from "react-icons/ai";
import { SlNotebook } from "react-icons/sl";
import { SiHomeassistantcommunitystore } from "react-icons/si";

interface ISection4Props {}

const Section4: React.FunctionComponent<ISection4Props> = (props) => {
  return (
    <section className=" bg-[#ebecf0] py-[5rem]">
      <div className="container">
        <div className="items-center justify-center text-center text-[#0D2A40]">
          <h1 className="text-3xl font-bold">What Clients Say </h1>
          <p className="mt-5 text-sm">
            Problems trying to resolve the conflict between
            <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div
          id="card-container"
          className=" mt-10 flex flex-col justify-between gap-5 p-5 md:flex-row md:gap-10"
        >
          <Card
            bgcolor="bg-white"
            textcolor="text-teal-800"
            name="Regina Miles"
            occupation="Designer"
            imageURL="profile1.webp"
            description="This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space."
          />
          <Card
            bgcolor="bg-teal-800"
            textcolor="text-white"
            name="Regina Miles"
            occupation="Designer"
            imageURL="profile2.webp"
            description="This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space."
          ></Card>
          <Card
            bgcolor="bg-white"
            textcolor="text-teal-800"
            name="Regina Miles"
            occupation="Designer"
            imageURL="profile3.webp"
            description="This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space."
          ></Card>
        </div>
      </div>
    </section>
  );
};

export default Section4;
