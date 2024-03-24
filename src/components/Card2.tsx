import * as React from "react";

interface ICard2Props {
  url: string;
  description: string;
  heading: string;
}

const Card2: React.FunctionComponent<ICard2Props> = (props) => {
  return (
    <div
      id="cardContainer"
      className="shadow-2xl rounded-md flex flex-col bg-white h-[20rem] text-left"
    >
      <h1 className="text-md md:text-xl text-black font-bold mx-5 mt-5 ">
        {props.heading}
      </h1>
      <p className="text-[#718096] text-sm m-5 w-[18rem] justify-start">
        {props.description}
      </p>
      <div className="flex justify-between m-5">
        <h1 className="text-[#718096] text-sm">May 20th 2020 </h1>
        <p className="font-bold">Read More</p>
      </div>

      <img
        src={props.url}
        alt="image"
        className="object-cover rounded-b-md h-[10rem] w-full "
      />
    </div>
  );
};

export default Card2;
