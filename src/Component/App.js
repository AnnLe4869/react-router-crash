import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Writers from "./Writers";
import "../App.css";

function App() {
  const [writers, setWriters] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const data = await (
          await fetch("http://localhost:3004/writers")
        ).json();
        setWriters([...writers, ...data]);
      } catch (err) {
        console.error(err);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <>
        <ul>
          <li key="home">
            <Link to="/">Home</Link>
          </li>
          <li key="writers">
            <Link to="/writers">Writers</Link>
          </li>
        </ul>
      </>
      <hr />
      <Switch>
        <Route exact path="/">
          <div>Home</div>
        </Route>
        <Route path="/writers">
          <Writers writers={writers}></Writers>
        </Route>
        <Route>
          <h3>Please use the correct link</h3>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
