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
            Our Satisfied Customer: A Testimonial of Excellence
          </p>
        </div>
        <div
          id="card-container"
          className=" mt-10 flex flex-col justify-between gap-5 p-5 md:flex-row md:gap-10"
        >
          <Card
            bgcolor="bg-white"
            textcolor="text-teal-800"
            name="Ethan Reynolds"
            occupation="Customer"
            imageURL="profile1.webp"
            description="From the moment I reached out to them, they displayed unmatched professionalism and dedication. Their attention to detail and commitment to ensuring customer satisfaction truly impressed me. I highly recommend PT.Jawa Agrindo Internasional."
          />
          <Card
            bgcolor="bg-teal-800"
            textcolor="text-white"
            name="Regina Miles"
            occupation="Customer"
            imageURL="profile2.webp"
            description="Collaborating with PT.Jawa Agrindo Internasional was a game-changer for our project. Their expertise, creativity, and dedication were evident from the start, and they delivered outstanding results on time and within budget."
          ></Card>
          <Card
            bgcolor="bg-white"
            textcolor="text-teal-800"
            name="Marcus Bennett"
            occupation="Customer"
            imageURL="profile3.webp"
            description="Their encouragement and expertise have been invaluable to me, and I am incredibly grateful for their mentorship. I highly recommend to anyone seeking guidance and support on their journey to success."
          ></Card>
        </div>
      </div>
    </section>
  );
};

export default Section4;
