import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

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
      <>
        <Route exact path="/">
          <div>Hello World</div>
        </Route>
        <Route path="/writers">
          <Writers writers={writers}></Writers>
        </Route>
      </>
    </Router>
  );
}

export default App;
