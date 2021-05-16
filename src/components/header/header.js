import React from "react";
import "./header.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export function Header() {
  return (
    <div className="header">
      <Link className="link" to="/">
        Home
      </Link>

      <Link className="link" to="/my-images">
        My Images
      </Link>
    </div>
  );
}
