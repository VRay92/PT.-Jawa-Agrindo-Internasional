import * as React from "react";
import Card2 from "./Card2";

interface ISection3Props {}

const Section3: React.FunctionComponent<ISection3Props> = (props) => {
  return (
    <section className=" bg-[#ffffff]">
      <div className=" text-center justify-center items-center text-[#0D2A40] mt-16 h-[40rem] container ">
        <h1 className="text-3xl font-bold">Every Client Matters </h1>
        <p className="mt-5 mb-10 text-sm">
          Problems trying to resolve the conflict between
          <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
        <div className="flex gap-3 md:gap-10 h-[30rem] w-full p-5 overflow-x-auto">
          <Card2
            url="gambar1.jpg"
            heading="Crop protection"
            description="We're the world leader in protecting crops, providing farmers with advanced and sustainable ways to keep plants healthy from sowing to harvesting."
          />
          <Card2
            url="gambar2.jpg"
            heading="Seeds"
            description="We're one of the world's largest developer and producers of innovative seeds and traits across grain, oilseeds, vegetables, fruits and flowers."
          />
          <Card2
            url="gambar3.png"
            heading="People and culture"
            description="At Syngenta we strive to become the most trusted and innovative team in agriculture. Here, you'll see the true impact of the work you do."
          />
          <Card2
            url="gambar4.jpg"
            heading="Successful crop protection starts with planting"
            description="Our seed treatments protect the seeds in the soil when they are exposed to insects, nematodes and droughts. ."
          />
          <Card2
            url="gambar5.jpg"
            heading="Crop protection"
            description="We're the world leader in protecting crops, providing farmers with advanced and sustainable ways to keep plants healthy from sowing to harvesting."
          />
          <Card2
            url="gambar1.jpg"
            heading="Crop protection"
            description="We're the world leader in protecting crops, providing farmers with advanced and sustainable ways to keep plants healthy from sowing to harvesting."
          />
        </div>
      </div>
    </section>
  );
};

export default Section3;
