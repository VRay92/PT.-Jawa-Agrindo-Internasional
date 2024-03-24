import * as React from "react";
import Herbicide from "./Herbicide";
import Fungicide from "./Fungicide";
import Insecticide from "./Insecticide";
import Adjuvant from "./Adjuvant";

interface IProductsCatalogueProps {}

const ProductsCatalogue: React.FunctionComponent<IProductsCatalogueProps> = (
  props,
) => {
  const [option, SetOption] = React.useState<number>(1);
  return (
    <section className=" container w-full bg-[#ffffff] ">
      <div id="pesticide" className="mt-10  text-xl text-[#0D2A40]">
        <div className="flex">
          {option === 1 ? (
            <h1 className="flex h-12 w-40 items-center justify-center bg-[#ffc132] text-center  text-white underline decoration-white">
              Herbicide
            </h1>
          ) : (
            <button
              className=" h-[3rem] w-[10rem] text-center hover:bg-[#ffe19a] "
              onClick={() => {
                SetOption(1);
                console.log("Nilai option", option);
              }}
            >
              Herbicide
            </button>
          )}
          {option === 2 ? (
            <h1 className=" flex h-12 w-40 items-center justify-center bg-[#7E3F98] text-center text-white underline decoration-white">
              Fungicide
            </h1>
          ) : (
            <button
              className=" h-[3rem] w-[10rem]  text-center hover:bg-[#dc95fa]"
              onClick={() => {
                SetOption(2);
                console.log("Nilai option", option);
              }}
            >
              Fungicide
            </button>
          )}
          {option === 3 ? (
            <h1 className="flex h-12 w-40 items-center justify-center bg-[#9A1F22] text-center  text-white underline decoration-white">
              Insecticide
            </h1>
          ) : (
            <button
              className=" h-[3rem] w-[10rem]  text-center  hover:bg-[#ff9597] "
              onClick={() => {
                SetOption(3);
                console.log("Nilai option", option);
              }}
            >
              Insecticide
            </button>
          )}
          {option === 4 ? (
            <h1 className="flex h-12 w-40 items-center justify-center bg-[#93C842] text-center text-white underline decoration-white">
              Adjuvant
            </h1>
          ) : (
            <button
              className=" h-[3rem] w-[10rem]  text-center  hover:bg-[#cdf196]  "
              onClick={() => {
                SetOption(4);
                console.log("Nilai option", option);
              }}
            >
              Adjuvant
            </button>
          )}
        </div>
        <div className="flex w-full">
          {option === 1 && <Herbicide />}
          {option === 2 && <Fungicide />}
          {option === 3 && <Insecticide />}
          {option === 4 && <Adjuvant />}
        </div>
      </div>
    </section>
  );
};

export default ProductsCatalogue;
