import * as React from "react";

interface ICard4Props {
  imageURL: string;
  description: string;
  textcolor: string;
  occupation: string;
  name1: any;
  bgcolor: string;
}

const Card4: React.FunctionComponent<ICard4Props> = (props) => {
  return (
    <div className="flex w-full flex-col items-center rounded-md bg-white p-5 shadow-2xl md:w-1/4">
      <img src={props.imageURL} className="mt-5 size-[5rem] rounded-full"></img>
      <p className={`text-xs ${props.textcolor} pt-5 font-bold`}>
        {props.occupation}
      </p>
      <h1 className={`${props.textcolor} mb-2 text-xl font-bold`}>
        {props.name1}
      </h1>
      <p className="mb-5 pt-2 text-xs">{props.description}</p>
    </div>
  );
};

export default Card4;
