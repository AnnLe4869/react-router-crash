import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Detail from "./Detail";

export default function Writers({ writers }) {
  let { url } = useRouteMatch();
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
      <Switch>
        <Route path={`${url}/:writerId`}>
          <Detail writers={writers}></Detail>
        </Route>
        <Route path={url}>
          <h3>Please select a writer from above</h3>
        </Route>
      </Switch>
    </>
  );
}
