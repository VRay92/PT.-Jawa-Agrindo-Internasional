import * as React from "react";

interface ICard3Props {
  bgcolor: string;
  textcolor: string;
  children: any;
  description: string;
  height: string;
  Card3: any;
}

const Card3: React.FunctionComponent<ICard3Props> = (props) => {
  return (
    <div
      id="container"
      className={`flex flex-col mb-10 shadow-xl ${props.bgcolor} w-full ${props.height} items-center justify-center align-middle text-center h-[20rem]`}
    >
      <div
        id="description"
        className={`text-6xl md:text-6xl ${props.textcolor} font-bold bg-transparent mb-3`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Card3;
