import * as React from "react";

interface ICard3Props {
  bgcolor: string;
  children: any;
  height: string;
}

const Card3: React.FunctionComponent<ICard3Props> = (props) => {
  return (
    <div
      id="container"
      className={`mb-10 flex flex-col shadow-xl ${props.bgcolor} w-full ${props.height} h-[20rem] items-center justify-center text-center align-middle`}
    >
      <div
        id="description"
        className={`mb-3 bg-transparent text-6xl font-bold md:text-6xl`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Card3;
