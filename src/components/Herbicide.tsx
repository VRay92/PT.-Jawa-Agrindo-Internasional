import * as React from "react";

interface IHerbicideProps {}

const Herbicide: React.FunctionComponent<IHerbicideProps> = (props) => {
  return (
    <div className=" flex px-[5rem] pt-20">
      <table className="w-full">
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
              <img src="macerio.jpg" className="w-[15rem]" />
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
              <img src="piribac.png" className="w-[15rem]" />
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
              <img src="kloopir.jpg" className="w-[15rem]" />
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
              <img src="pounder.jpg" className="w-[15rem]" />
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
              <img src="vectral.jpg" className="w-[15rem]" />
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
              <img src="warrant gold logo.png" className="w-[15rem]" />
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
