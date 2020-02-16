import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Writers from "./Writers";
import Layout from "./Layout";
import "../App.css";

function App() {
  const [writers, setWriters] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const data = await (
          await fetch("http://localhost:3004/writers?_embed=texts")
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
      <Layout writers={writers}>
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
      </Layout>
    </Router>
  );
}

export default App;
