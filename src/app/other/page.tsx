"use client";
import { getBlogPosts } from "@/utils/contentful";
import * as React from "react";

interface IOtherArticleProps {}

const OtherArticle: React.FunctionComponent<IOtherArticleProps> = (props) => {
  React.useEffect(() => {
    getOtherArticle();
  }, []);
  const getOtherArticle = async () => {
    try {
      const response = await getBlogPosts();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return <div></div>;
};

export default OtherArticle;
