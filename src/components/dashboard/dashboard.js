import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PrivateImages } from "../private-images/private-images";
import { PublicImages } from "../public-images/public-images";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/my-images">My Images</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/my-images">
            <PrivateImages />
          </Route>
          <Route path="/">
            <PublicImages />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
