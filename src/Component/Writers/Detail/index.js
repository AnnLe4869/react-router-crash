import React from "react";
import { useParams } from "react-router-dom";

export default function Detail({ writers }) {
  const { writerId } = useParams();
  const writer = writers.find(writer => writer.id === writerId);
  if (!writer) return null;

  const { id, name, born, deceased, image, description } = writer;
  return (
    <>
      <h1>{name}</h1>
      <h3>
        {born} - {deceased}
      </h3>
      <p>{description}</p>
      <img src={image} alt={name} style={{ maxWidth: 300 }}></img>
    </>
  );
}
