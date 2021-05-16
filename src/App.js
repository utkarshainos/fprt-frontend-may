import "./App.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Login } from "./components/login/login";
import { Signup } from "./components/signup/signup";
import { PublicImages } from "./components/public-images/public-images";
import { PrivateImages } from "./components/private-images/private-images";
import { ProtectedRoute } from "./components/ProtectedRoute/protected-route";
import userService from "./services/user.service";

import { useSelector, useDispatch } from "react-redux";
import { isLoggedIn as _isLoggedIn } from "./store/actions/auth.actions";
import { resetError } from "./store/actions/error.actions";

function App() {
  const authReducer = useSelector((state) => state.authReducer);
  const errorReducer = useSelector((state) => state.errorReducer);
  const isLoggedIn = authReducer.isLoggedIn;
  const error = errorReducer.error;
  const dispatch = useDispatch();

  const logout = () => {
    userService.logout();
    dispatch(_isLoggedIn(false));
  };

  if (error) {
    setTimeout(() => {
      dispatch(resetError());
    }, 3000);
  }

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
      {error ? (
        <div className="alert-container">
          <div className="alert">{error.message}</div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
