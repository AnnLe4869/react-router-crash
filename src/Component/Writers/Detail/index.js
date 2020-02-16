import React from "react";
import { useParams, Link, useRouteMatch, Route } from "react-router-dom";
import { NotFound } from "../../Error";
import Text from "../Text";

export default function Detail({ writers }) {
  const { writerId } = useParams();
  const { url } = useRouteMatch();
  const writer = writers.find(writer => writer.id === writerId);
  if (!writer) return <NotFound></NotFound>;

  const { name, born, deceased, image, description, texts } = writer;
  return (
    <>
      <h1>{name}</h1>
      <h3>
        {born} - {deceased}
      </h3>
      <img src={image} alt={name} style={{ maxHeight: 300 }}></img>
      <p>{description}</p>

      <ul>
        {texts.map(text => (
          <li key={text.id}>
            <Link to={`${url}/texts/${text.id}`}>{text.title}</Link>
          </li>
        ))}
      </ul>
      <Route path={`${url}/texts/:textId`}>
        <Text texts={texts}></Text>
      </Route>
    </>
  );
}
