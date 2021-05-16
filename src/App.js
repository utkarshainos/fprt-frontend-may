import "./App.css";

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Login } from "./components/login/login";
import { Signup } from "./components/signup/signup";
import { PublicImages } from "./components/public-images/public-images";
import { PrivateImages } from "./components/private-images/private-images";
import { ProtectedRoute } from "./components/ProtectedRoute/protected-route";
import userService from "./services/user.service";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

function App() {
  const authReducer = useSelector((state) => state.authReducer);
  const isLoggedIn = authReducer.isLoggedIn;
  const history = useHistory();

  const logout = () => {
    userService.logout();
    try {
      history.push("/login");
    } catch (e) {}
  };

  return (
    <div className="App">
      <Router>
        <div>
          <div className="header">
            <Link className="link" to="/">
              All
            </Link>

            {isLoggedIn ? (
              <Link className="link" to="/my-images">
                My_Images
              </Link>
            ) : null}

            <div className="spacer"></div>

            {!isLoggedIn ? (
              <Link className="link" to="/login">
                Login
              </Link>
            ) : null}

            {!isLoggedIn ? (
              <Link className="link" to="/signup">
                Signup
              </Link>
            ) : null}

            {isLoggedIn ? (
              <p className="link" onClick={logout}>
                Logout
              </p>
            ) : null}
          </div>

          <Switch>
            {/* <Route path="/my-images">
              <PrivateImages />
            </Route> */}
            <Route path="/login">
              <Login />
            </Route>

            <Route path="/signup">
              <Signup />
            </Route>

            <ProtectedRoute path="/my-images" component={PrivateImages} />

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
