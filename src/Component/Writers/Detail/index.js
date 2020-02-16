import React from "react";
import { useParams } from "react-router-dom";

export default function Detail({ writers }) {
  const { writerId } = useParams();
  const writer = writers.find(writer => writer.id === writerId);
  if (!writer) return <h3>Not found</h3>;

  const { id, name, born, deceased, image, description } = writer;
  return (
    <>
      <h1>{name}</h1>
      <h3>
        {born} - {deceased}
      </h3>
      <img src={image} alt={name} style={{ maxHeight: 300 }}></img>

      <p>{description}</p>
    </>
  );
}
