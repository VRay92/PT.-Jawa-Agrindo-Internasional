import * as React from "react";

interface ICard4Props {
  imageURL: string;
  description: string;
  textcolor: string;
  occupation: string;
  name: string;
  bgcolor: string;
}

const Card4: React.FunctionComponent<ICard4Props> = (props) => {
  return (
    <div className="flex flex-col items-center shadow-2xl bg-white rounded-md p-5 w-full md:w-1/4">
      <img src={props.imageURL} className="size-[5rem] rounded-full mt-5"></img>
      <p className={`text-xs ${props.textcolor} pt-5 font-bold`}>
        {props.occupation}
      </p>
      <h1 className={`${props.textcolor} font-bold text-xl mb-2`}>
        {props.name}
      </h1>
      <p className="text-xs pt-2 mb-5">{props.description}</p>
    </div>
  );
};

export default Card4;
