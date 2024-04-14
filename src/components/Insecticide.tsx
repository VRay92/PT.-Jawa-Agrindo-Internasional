import * as React from "react";

interface IInsecticideProps {}

const Insecticide: React.FunctionComponent<IInsecticideProps> = (props) => {
  return (
    <div className=" flex  pb-20 pt-20 md:px-[5rem]">
      <table className="hidden w-full md:block">
        <thead>
          <tr className="h-[5rem] bg-[#9A1F22] text-xl text-white">
            <th className="w-1/4">Brands</th>
            <th className="w-1/4">Product Name</th>
            <th className="w-1/4">Product Type/Group</th>
            <th className="w-1/4">Description</th>
          </tr>
        </thead>
        <tbody className="w-fit">
          <tr className="h-[10rem]">
            <td className="">
              <img src="swift.png" alt="swift" className="w-[15rem]" />
            </td>
            <td>Swift 550/50EC</td>
            <td>Insecticide Selective Pre & Post-Emergent</td>
            <td className="space-y-5 px-5 pt-5 text-start text-base">
              Insecticide in the form of light brown suspendable powder, used to
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
              <img src="axolot.webp" alt="axolot" className="w-[15rem]" />
            </td>
            <td>Axolot 40/160 SC</td>
            <td>
              Insecticide Systemic <br /> Post-Emergent
            </td>
            <td className="space-y-5 px-5 pt-5 text-start text-base">
              Post-emergent Insecticide that works systematically and on
              contact, to control narrow-leaf, broadleaf, and sedge weeds
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
              <img src="qaishar.webp" alt="qaishar" className="w-[15rem]" />
            </td>
            <td>Qaishar 10WP</td>
            <td>
              Insecticide Systemic <br /> Post-Emergent
            </td>
            <td className="space-y-5 px-5 pt-5 text-start text-base">
              Systemic post-emergent Insecticide and arboricide, in concentrated
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
              <img src="armcide.webp" alt="armcide" className="w-[15rem]" />
            </td>
            <td>Armcide 50WG</td>
            <td>
              Insecticide Selective <br /> Post-Emergent
            </td>
            <td className="space-y-5 px-5 pt-5 text-start text-base">
              Systemic post-emergent Insecticide and arboricide, in concentrated
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
              <img src="snatch.webp" alt="snatch" className="w-[15rem]" />
            </td>
            <td>Snatch 50/10WG</td>
            <td>
              Insecticide Selective <br /> Pre-Emergent
            </td>
            <td className="space-y-5 px-5 pt-5 text-start text-base">
              Selective systemic pre-emergent Insecticide in water-soluble
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
              <img src="arrow.webp" alt="arrow" className="w-[15rem]" />
            </td>
            <td>Arrow 200EC</td>
            <td>Insecticide Selective</td>
            <td className="space-y-5 px-5 pt-5 text-start text-base">
              Insecticide in water-soluble solution form, used to control
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
      {/* //////////////////////////////////////////////////////////////////////////////////// */}

      <table className="  w-full md:hidden ">
        <thead>
          <tr className="h-[5rem] w-full bg-[#9A1F22] text-xl text-white">
            <th className="w-full">Brands</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-[10rem]">
            <td>
              <img src="swift.png" alt="swift" className="w-[15rem]" />
            </td>
          </tr>
          <tr>
            <td colSpan={4} className="h-[2rem] border-b-2 border-[#ebecf0]" />
          </tr>

          <tr className="h-[10rem]">
            <td>
              <img src="axolot.webp" alt="axolot" className="w-[15rem]" />
            </td>
          </tr>
          <tr>
            <td colSpan={4} className="h-[2rem] border-b-2 border-[#ebecf0]" />
          </tr>

          <tr className="h-[10rem]">
            <td>
              <img src="qaishar.webp" alt="qaishar" className="w-[15rem]" />
            </td>
          </tr>
          <tr>
            <td colSpan={4} className="h-[2rem] border-b-2 border-[#ebecf0]" />
          </tr>

          <tr className="h-[10rem]">
            <td>
              <img src="armcide.webp" alt="armcide" className="w-[15rem]" />
            </td>
          </tr>
          <tr>
            <td colSpan={4} className="h-[2rem] border-b-2 border-[#ebecf0]" />
          </tr>

          <tr className="h-[10rem]">
            <td>
              <img src="snatch.webp" alt="snatch" className="w-[15rem]" />
            </td>
          </tr>
          <tr>
            <td colSpan={4} className="h-[2rem] border-b-2 border-[#ebecf0]" />
          </tr>

          <tr className="h-[10rem]">
            <td>
              <img src="arrow.webp" alt="arrow" className="w-full" />
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

export default Insecticide;
