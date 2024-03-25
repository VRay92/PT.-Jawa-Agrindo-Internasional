import * as React from "react";
import Image from "next/image";

interface ITestingProps {}

const Testing: React.FunctionComponent<ITestingProps> = (props) => {
  return (
    <div>
      <div className="relative">
        <Image
          height={500}
          width={500}
          src="/hero-section.webp"
          alt="hero"
        ></Image>
        <div className="absolute left-0 top-0">
          <h1 className="text-black">Your Trusted Partner in Agriculture</h1>
          <h1 className="text-black">
            Accelerated innovation provides for new game-changing tools
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Testing;
