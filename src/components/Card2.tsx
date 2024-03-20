import * as React from "react";

interface ICard2Props {
  url: string;
  description: string;
  heading: string;
}

const Card2: React.FunctionComponent<ICard2Props> = (props) => {
  return (
    <div className="shadow-2xl md:h-[25rem] bg-white rounded-md mb-20 w-full">
      <div className="flex flex-col text-left md:h-[17rem] p-3 md:p-6">
        <h1 className="text-md md:text-xl text-black font-bold md:my-5">
          {props.heading}
        </h1>
        <article id="description" className="">
          <p className="text-[#718096] text-sm">{props.description}</p>
          <div className="flex justify-between mt-5">
            <h1 className="text-[#718096]">May 20th 2020 </h1>
            <p className="font-bold">Read More</p>
          </div>
        </article>
      </div>
      <div className="h-[8rem]">
        <img
          src={props.url}
          alt="image"
          className=" relative object-cover rounded-b-md h-full w-full"
        />
      </div>
    </div>
  );
};

export default Card2;
