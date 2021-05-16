import React from "react";
import "./header.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export function Header({ component: Component, ...rest }) {
  return (
    <Router>
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

        <component />
      </div>
    </Router>
  );
}
