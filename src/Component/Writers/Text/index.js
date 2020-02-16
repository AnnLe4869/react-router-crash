import React from "react";
import { useParams } from "react-router-dom";
import { NotFound } from "../../Error";

export default function Text({ texts }) {
  const { textId } = useParams();
  const text = texts.find(text => text.id === textId);
  if (!text) return <NotFound></NotFound>;

  return (
    <div>
      <h3>
        {text.title} {text.published ? `(${text.published})` : null}
      </h3>
      <p>{text.description ? text.description : <i>No Description</i>}</p>
    </div>
  );
}
