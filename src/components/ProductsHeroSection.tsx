import * as React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import ProductsCatalogue from "./ProductsCatalogue";
interface IProductsHeroSectionProps {}

const ProductsHeroSection: React.FunctionComponent<
  IProductsHeroSectionProps
> = (props) => {
  return (
    <div className="relative bg-[url(/herosection-product.jpg)] bg-cover bg-no-repeat">
      <header
        id="hero-section"
        className="container relative flex h-[600px] flex-col items-center justify-center text-white md:h-[650px]"
      >
        <h1 className="mb-10 text-3xl font-bold md:text-6xl">Our products</h1>
        <p className="text-center text-xl">
          Accelerated innovation provides for new game-changing tools
        </p>
        <a
          className="absolute bottom-0 mt-10 animate-bounce text-center text-7xl text-white"
          href="#pesticide"
        >
          <h1 className="text-sm">scroll down</h1>
          <MdKeyboardDoubleArrowDown />
        </a>
      </header>
    </div>
  );
};

export default ProductsHeroSection;
