import * as React from "react";

interface ICardProps {
  bgcolor: string;
  textcolor: string;
  name: string;
  occupation: string;
  description: string;
  imageURL: string;
}

const Card: React.FunctionComponent<ICardProps> = (props) => {
  return (
    <div
      id="container"
      className={`flex flex-col shadow-xl ${props.bgcolor} h-72 w-full items-center justify-center rounded-lg p-5 text-left align-middle md:px-10`}
    >
      <div className="mb-5 flex w-full justify-between">
        <img src={props.imageURL} className="h-auto w-[6rem]" />
        <div className="justify-left ml-5 flex-col ">
          <img src="stars5.png" className="h-auto md:w-[10rem]" />
          <h1 className={`text-sm font-bold md:text-lg ${props.textcolor}`}>
            {props.name}
          </h1>
          <p className={`text-xs ${props.textcolor}`}>{props.occupation}</p>
        </div>
      </div>
      <p className={`text-xs ${props.textcolor} text-justify`}>
        {props.description}
      </p>
    </div>
  );
};

export default Card;
