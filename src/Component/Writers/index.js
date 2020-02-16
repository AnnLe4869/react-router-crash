import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import Detail from "./Detail";

export default function Writers({ writers }) {
  let { path, url } = useRouteMatch();
  //let match = useRouteMatch("/writers/:writerId");
  return (
    <>
      <ul>
        {writers.map(({ id, name }) => (
          <li key={id}>
            <Link to={`${url}/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <Route path={`${path}/:writerId`}>
        <Detail writers={writers}></Detail>
      </Route>
    </>
  );
}
