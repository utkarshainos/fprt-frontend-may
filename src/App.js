import "./App.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Login } from "./components/login/login";
import { Signup } from "./components/signup/signup";
import { PublicImages } from "./components/public-images/public-images";
import { PrivateImages } from "./components/private-images/private-images";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <div className="header">
            <Link className="link" to="/">
              All
            </Link>

            <Link className="link" to="/my-images">
              My Images
            </Link>

            <Link className="link" to="/login">
              Login
            </Link>

            <Link className="link" to="/signup">
              Signup
            </Link>

            <Link className="link" to="/logout">
              Logout
            </Link>
          </div>

          <Switch>
            <Route path="/my-images">
              <PrivateImages />
            </Route>
            <Route path="/login">
              <Login />
            </Route>

            <Route path="/signup">
              <Signup />
            </Route>

            <Route path="/">
              <PublicImages />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
