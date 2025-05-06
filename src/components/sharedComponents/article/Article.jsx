import React from "react";
import { ArticleBox } from "./articleStyle";

function Article({ heading, desc, ...props }) {
  return (
    <ArticleBox {...props}>
      <h2>{heading}</h2>
      <p>{desc}</p>
    </ArticleBox>
  );
}

export default Article;
