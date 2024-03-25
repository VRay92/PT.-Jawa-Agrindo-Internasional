import * as React from "react";
import Card2 from "./Card2";

interface ISection3Props {}

const Section3: React.FunctionComponent<ISection3Props> = (props) => {
  return (
    <section className=" bg-[#ffffff]">
      <div className=" container mt-16 h-[40rem] items-center justify-center text-center text-[#0D2A40] ">
        <h1 className="text-3xl font-bold">Every Client Matters </h1>
        <p className="mb-10 mt-5 text-sm">
          We understand that each client is unique, with
          <br />
          their own set of challenges, goals, and priorities
        </p>
        <div className="no-scrollbar flex h-[30rem] w-full gap-3 overflow-x-auto p-5 md:gap-10">
          <Card2
            url="gambar1.webp"
            heading="Crop protection"
            description="We're the world leader in protecting crops, providing farmers with advanced and sustainable ways to keep plants healthy from sowing to harvesting."
          />
          <Card2
            url="gambar2.webp"
            heading="Seeds"
            description="We're one of the world's largest developer and producers of innovative seeds and traits across grain, oilseeds, vegetables, fruits and flowers."
          />
          <Card2
            url="gambar3.webp"
            heading="People and culture"
            description="At Syngenta we strive to become the most trusted and innovative team in agriculture. Here, you'll see the true impact of the work you do."
          />
          <Card2
            url="gambar4.webp"
            heading="Successful crop protection starts with planting"
            description="Our seed treatments protect the seeds in the soil when they are exposed to insects, nematodes and droughts. ."
          />
          <Card2
            url="gambar2.webp"
            heading="Crop protection"
            description="We're the world leader in protecting crops, providing farmers with advanced and sustainable ways to keep plants healthy from sowing to harvesting."
          />
          <Card2
            url="gambar1.webp"
            heading="Crop protection"
            description="We're the world leader in protecting crops, providing farmers with advanced and sustainable ways to keep plants healthy from sowing to harvesting."
          />
        </div>
      </div>
    </section>
  );
};

export default Section3;
