import * as React from "react";
import Image from "next/image";

interface IHerbicideProps {}

const Herbicide: React.FunctionComponent<IHerbicideProps> = (props) => {
  return (
    <div className=" flex pb-20 pt-20 md:px-[5rem]">
      <table className="hidden w-full md:block">
        <thead>
          <tr className="h-[5rem] bg-[#ffc132] text-xl text-white">
            <th className="w-1/4">Brands</th>
            <th className="w-1/4">Product Name</th>
            <th className="w-1/4">Product Type/Group</th>
            <th className="w-1/4">Description</th>
          </tr>
        </thead>
        <tbody className="w-fit">
          <tr className="h-[10rem]">
            <td className="">
              <Image
                width={240}
                height={240}
                src="/macerio.webp"
                alt="macerio"
              />
            </td>
            <td>
              Macerio<sup>TM</sup>52WP
            </td>
            <td>Herbicide Selective Pre & Post-Emergent</td>
            <td className="space-y-5 px-5 pt-5 text-start text-base">
              Herbicide in the form of light brown suspendable powder, used to
              control both broadleaf and narrow-leaf weeds in corn crops. <br />
              Crop Target: corn
              <br />
              <button className=" h-[2rem] w-[5rem] rounded-md bg-orange-400 text-white">
                Details
              </button>
            </td>
          </tr>
          <tr>
            <td colSpan={4} className="h-[2rem] border-b-2 border-[#ebecf0]" />
          </tr>

          <tr className="h-[10rem]">
            <td className="">
              <Image
                width={240}
                height={240}
                src="/piribac.webp"
                alt="piribac"
              />
            </td>
            <td>
              Piribac<sup>TM</sup>400SC
            </td>
            <td>
              Herbicide Systemic <br /> Post-Emergent
            </td>
            <td className="space-y-5 px-5 pt-5 text-start text-base">
              Post-emergent herbicide that works systematically and on contact,
              to control narrow-leaf, broadleaf, and sedge weeds
              <br />
              Crop Target: rice
              <br />
              <button className=" h-[2rem] w-[5rem] rounded-md bg-orange-400 text-white">
                Details
              </button>
            </td>
          </tr>
          <tr>
            <td colSpan={4} className="h-[2rem] border-b-2 border-[#ebecf0]" />
          </tr>

          <tr className="h-[10rem]">
            <td className="">
              <Image
                width={240}
                height={240}
                src="/kloopir.webp"
                alt="kloopir"
              />
            </td>
            <td>Kloopir 666EC</td>
            <td>
              Herbicide Systemic <br /> Post-Emergent
            </td>
            <td className="space-y-5 px-5 pt-5 text-start text-base">
              Systemic post-emergent herbicide and arboricide, in concentrated
              emulsifiable form
              <br />
              Crop Target: rice, rubber, palm
              <br />
              <button className=" h-[2rem] w-[5rem] rounded-md bg-orange-400 text-white">
                Details
              </button>
            </td>
          </tr>
          <tr>
            <td colSpan={4} className="h-[2rem] border-b-2 border-[#ebecf0]" />
          </tr>

          <tr className="h-[10rem]">
            <td className="">
              <Image
                width={240}
                height={240}
                src="/pounder.webp"
                alt="pounder"
              />
            </td>
            <td>Pounder 865SL</td>
            <td>
              Herbicide Selective <br /> Post-Emergent
            </td>
            <td className="space-y-5 px-5 pt-5 text-start text-base">
              Systemic post-emergent herbicide and arboricide, in concentrated
              emulsifiable form
              <br />
              Crop Target: rice, rubber, palm
              <br />
              <button className=" h-[2rem] w-[5rem] rounded-md bg-orange-400 text-white">
                Details
              </button>
            </td>
          </tr>
          <tr>
            <td colSpan={4} className="h-[2rem] border-b-2 border-[#ebecf0]" />
          </tr>

          <tr className="h-[10rem]">
            <td className="">
              <Image
                width={240}
                height={240}
                src="/vectral.webp"
                alt="vectral"
              />
            </td>
            <td>
              Vectral <sup>TM</sup> 200SL
            </td>
            <td>
              Herbicide Selective <br /> Pre-Emergent
            </td>
            <td className="space-y-5 px-5 pt-5 text-start text-base">
              Selective systemic pre-emergent herbicide in water-soluble
              solution form, to control broadleaf weeds.
              <br />
              Crop Target: palm
              <br />
              <button className=" h-[2rem] w-[5rem] rounded-md bg-orange-400 text-white">
                Details
              </button>
            </td>
          </tr>
          <tr>
            <td colSpan={4} className="h-[2rem] border-b-2 border-[#ebecf0]" />
          </tr>

          <tr className="h-[10rem]">
            <td className="">
              <Image
                width={240}
                height={240}
                src="/warrantgold.webp"
                alt="warrantgold"
              />
            </td>
            <td>Warrant Gold 480SL</td>
            <td>Herbicide Selective</td>
            <td className="space-y-5 px-5 pt-5 text-start text-base">
              Herbicide in water-soluble solution form, used to control
              broadleaf weeds and grass weeds.
              <br />
              Crop Target: palm
              <br />
              <button className=" h-[2rem] w-[5rem] rounded-md bg-orange-400 text-white">
                Details
              </button>
            </td>
          </tr>
          <tr>
            <td colSpan={4} className="h-[2rem] border-b-2 border-[#ebecf0]" />
          </tr>
        </tbody>
      </table>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <table className=" w-full md:hidden">
        <thead>
          <tr className="h-[5rem] w-full bg-[#ffc132] text-xl text-white">
            <th className="w-full">Brands</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-[10rem]">
            <td>
              <Image
                width={240}
                height={240}
                src="/macerio.webp"
                alt="macerio"
              />
            </td>
          </tr>
          <tr>
            <td colSpan={4} className="h-[2rem] border-b-2 border-[#ebecf0]" />
          </tr>

          <tr className="h-[10rem]">
            <td>
              <img src="piribac.webp" className="w-[15rem]" />
            </td>
          </tr>
          <tr>
            <td colSpan={4} className="h-[2rem] border-b-2 border-[#ebecf0]" />
          </tr>

          <tr className="h-[10rem]">
            <td>
              <Image
                width={240}
                height={240}
                src="/kloopir.webp"
                alt="kloopir"
              />
            </td>
          </tr>
          <tr>
            <td colSpan={4} className="h-[2rem] border-b-2 border-[#ebecf0]" />
          </tr>

          <tr className="h-[10rem]">
            <td>
              <Image
                width={240}
                height={240}
                src="/pounder.webp"
                alt="pounder"
              />
            </td>
          </tr>
          <tr>
            <td colSpan={4} className="h-[2rem] border-b-2 border-[#ebecf0]" />
          </tr>

          <tr className="h-[10rem]">
            <td>
              <Image
                width={240}
                height={240}
                src="/vectral.webp"
                alt="vectral"
              />
            </td>
          </tr>
          <tr>
            <td colSpan={4} className="h-[2rem] border-b-2 border-[#ebecf0]" />
          </tr>

          <tr className="h-[10rem]">
            <td>
              <img src="warrantgold.webp" className="w-full" />
            </td>
          </tr>
          <tr>
            <td colSpan={4} className="h-[2rem] border-b-2 border-[#ebecf0]" />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Herbicide;
{
  /* <div className="flex flex-col w-6/12 space-y-10 pt-10">
        <img src="kloopir.jpg" className="w-[15rem]" />
      </div>
      <div className="flex  flex-col w-6/12 h-[20rem]">
        <img src="pounder.jpg" />
        <img src="vectral.jpg" />
        <img src="piribac.png" />
      </div> */
}
