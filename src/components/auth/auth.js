import React, { useState, useCallback } from "react";
import "./auth.css";
import { Form, Button, Spinner } from "react-bootstrap";
import userService from "../../services/user.service.js";
import routeService from "../../services/route.service";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { isLoggedIn as _isLoggedIn } from "../../store/actions/auth.actions";
import { error } from "../../store/actions/error.actions";

export const Auth = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [sending, setSending] = useState(false);

  const authReducer = useSelector((state) => state.authReducer);
  const isLoggedIn = authReducer.isLoggedIn;

  const history = useHistory();
  const dispatch = useDispatch();

  if (!isLoggedIn) {
    const route = routeService.getLocation();

    if (route === "login" || route === "signup") history.push(`/${route}`);
    else history.push(`/login`);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      console.log("invalid inputs");
      return;
    }

    setSending(true);

    userService
      .auth(email, password, routeService.getLocation())
      .then((data) => {
        //Redirect to all images
        setSending(false);

        dispatch(_isLoggedIn(true));
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        setSending(false);
        dispatch(error(err));
      });
  };

  return (
    <div className="container">
      <div className="form">
        <Form onSubmit={onFormSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-flex">
            <Button variant="primary" type="submit" disabled={sending}>
              Submit
            </Button>

            {sending ? (
              <Spinner className="ml-5" animation="border" variant="primary" />
            ) : null}
          </div>
        </Form>
      </div>
    </div>
  );
};
