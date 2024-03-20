import * as React from "react";
import Card2 from "./Card2";

interface ISection3Props {}

const Section3: React.FunctionComponent<ISection3Props> = (props) => {
  return (
    <section className=" bg-[#252b42]">
      <div className=" text-center justify-center items-center text-white pt-10 container">
        <h1 className="text-3xl font-bold">Every Client Matters </h1>
        <p className="mt-5 mb-10 text-sm">
          Problems trying to resolve the conflict between
          <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-10">
          <Card2
            url="pic1.png"
            heading="A single source of truth"
            description="Newton thought that light was made up of particles, but then it was discovered"
          />
          <Card2
            url="pic2.png"
            heading="Fastest way to organize"
            description={`"Quantum mechanics" is the description of the behaviour of matter`}
          />
          <Card2
            url="pic3.png"
            heading="Fastest way to take action"
            description="They describe a universe consisting of bodies moving together"
          />
          <Card2
            url="pic4.png"
            heading="Work better together"
            description="They finally obtained a consistent description of the behaviour"
          />
        </div>
      </div>
    </section>
  );
};

export default Section3;
