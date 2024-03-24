"use client";
import * as React from "react";
import Card from "@/components/Card";
import ProductsHeroSection from "@/components/ProductsHeroSection";
import ProductsCatalogue from "@/components/ProductsCatalogue";

interface IProductsProps {}

const Products: React.FunctionComponent<IProductsProps> = (props) => {
  return (
    <div>
      <ProductsHeroSection></ProductsHeroSection>
      <ProductsCatalogue />
    </div>
  );
};

export default Products;
