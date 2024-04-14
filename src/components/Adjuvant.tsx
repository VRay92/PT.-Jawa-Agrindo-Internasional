import * as React from "react";

interface IAdjuvantProps {}

const Adjuvant: React.FunctionComponent<IAdjuvantProps> = (props) => {
  return (
    <div className=" flex pb-20 pt-20 md:px-[5rem]">
      <table className="hidden w-full md:block">
        <thead>
          <tr className="h-[5rem] bg-[#93C842] text-xl text-white">
            <th className="w-1/4">Brands</th>
            <th className="w-1/4">Product Name</th>
            <th className="w-1/4">Product Type/Group</th>
            <th className="w-1/4">Description</th>
          </tr>
        </thead>
        <tbody className="mb-20 w-fit">
          <tr className="h-[10rem]">
            <td className="">
              <img
                src="sprayboost.webp"
                alt="sprayboost"
                className="w-[15rem]"
              />
            </td>
            <td>
              Macerio<sup>TM</sup>52WP
            </td>
            <td>Adjuvant Selective Pre & Post-Emergent</td>
            <td className="space-y-5 px-5 pt-5 text-start text-base">
              Adjuvant in the form of light brown suspendable powder, used to
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
              <img src="gaplus.webp" alt="gaplus" className="w-[15rem]" />
            </td>
            <td>
              Piribac<sup>TM</sup>400SC
            </td>
            <td>
              Adjuvant Systemic <br /> Post-Emergent
            </td>
            <td className="space-y-5 px-5 pt-5 text-start text-base">
              Post-emergent Adjuvant that works systematically and on contact,
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
            <td colSpan={4} className=" h-[2rem] border-b-2 border-[#ebecf0]" />
          </tr>
        </tbody>
      </table>
      {/* ////////////////////////////////////////////////////////////////////////// */}
      <table className="w-full md:hidden ">
        <thead>
          <tr className="h-[5rem] w-full bg-[#93C842] text-xl text-white">
            <th className="w-full">Brands</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-[10rem]">
            <td>
              <img
                src="sprayboost.webp"
                alt="sprayboost"
                className="w-[15rem]"
              />
            </td>
          </tr>
          <tr>
            <td colSpan={4} className="h-[2rem] border-b-2 border-[#ebecf0]" />
          </tr>

          <tr className="h-[10rem]">
            <td>
              <img src="gaplus.webp" alt="gaplus" className="w-full" />
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

export default Adjuvant;
