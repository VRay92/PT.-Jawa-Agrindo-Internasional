import * as React from "react";

interface ICard5Props {
  textcolor: string;
  imageURL: string;
  occupation: string;
  email: string;
  phone: string;
  name1: string;
}

const Card5: React.FunctionComponent<ICard5Props> = (props) => {
  return (
    <div className="flex w-full flex-col items-center justify-center rounded-md bg-white py-10 text-center shadow-2xl md:h-[20rem] md:py-0">
      <div className=" size-[7rem] rounded-t-md ">
        <img src={props.imageURL} className="h-full rounded-full" />
      </div>
      <div className=" space-y-2 p-5 text-xs">
        <h1 className={`${props.textcolor} text-xl font-bold`}>
          {props.name1}
        </h1>
        <p className={`${props.textcolor} font-bold`}>{props.occupation}</p>
        <p className="">{props.email}</p>
        <p className="">{props.phone}</p>
      </div>
    </div>
  );
};

export default Card5;
