import React from "react";
import { Route, Redirect } from "react-router-dom";
import userService from "../../services/user.service";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = userService.isLoggedIn();

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
