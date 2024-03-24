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
        <div className="text-center justify-center items-center text-[#0D2A40]">
          <h1 className="text-3xl font-bold">What Clients Say </h1>
          <p className="mt-5 text-sm">
            Problems trying to resolve the conflict between
            <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div
          id="card-container"
          className=" flex flex-col md:flex-row gap-5 md:gap-10 justify-between mt-10 p-5"
        >
          <Card
            bgcolor="bg-white"
            textcolor="text-teal-800"
            name="Regina Miles"
            occupation="Designer"
            imageURL="profile1.png"
            description="This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space."
          />
          <Card
            bgcolor="bg-teal-800"
            textcolor="text-white"
            name="Regina Miles"
            occupation="Designer"
            imageURL="profile2.png"
            description="This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space."
          ></Card>
          <Card
            bgcolor="bg-white"
            textcolor="text-teal-800"
            name="Regina Miles"
            occupation="Designer"
            imageURL="profile3.png"
            description="This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space."
          ></Card>
        </div>
      </div>
    </section>
  );
};

export default Section4;
