import * as React from "react";
import { IoCloseSharp } from "react-icons/io5";

interface IModalProps {
  url: string;
  click: () => void;
}

const Modal: React.FunctionComponent<IModalProps> = (props) => {
  return (
    <div className="fixed left-1/2 top-1/2 z-[99] size-[500px] -translate-x-1/2 -translate-y-1/2 transform bg-slate-300 ">
      <span
        onClick={props.click}
        className="flex cursor-pointer justify-end text-4xl text-white"
      >
        <IoCloseSharp className="bg-slate-500"></IoCloseSharp>
      </span>
      <div className=" px-10 pb-10">
        <img src={props.url} alt="product" />
      </div>
    </div>
  );
};

export default Modal;
