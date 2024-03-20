import * as React from "react";

interface ICardProps {
  bgcolor: string;
  textcolor: string;
  children: string;
  description: string;
}

const Card: React.FunctionComponent<ICardProps> = (props) => {
  return (
    <div
      id="container"
      className={`flex flex-col shadow-xl ${props.bgcolor} w-full h-40 md:h-48 rounded-lg items-center justify-center align-middle text-center`}
    >
      <div
        className={`text-4xl md:text-6xl ${props.textcolor} font-bold bg-transparent mb-3`}
      >
        {props.children}
      </div>
      <h1 className="text-sm md:text-lg font-bold">{props.description}</h1>
    </div>
  );
};

export default Card;
