import React from "react";
import { ArticleBox } from "./articleStyle";

function Article({ articleDetails = {}, ...props }) {
  const { heading, desc } = articleDetails;

  return (
    <ArticleBox {...props}>
      <h2>{heading}</h2>
      <p>{desc}</p>
    </ArticleBox>
  );
}

export default Article;
