import React, { useState, useCallback } from "react";
import "./auth.css";
import { Form, Button, Spinner } from "react-bootstrap";
import userService from "../../services/user.service.js";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { isLoggedIn as _isLoggedIn } from "../../store/actions/auth.actions";
import { error } from "../../store/actions/error.actions";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let isSending = false;

  const authReducer = useSelector((state) => state.authReducer);
  const errorReducer = useSelector((state) => state.errorReducer);
  const _error = errorReducer.error;

  const isLoggedIn = authReducer.isLoggedIn;

  const history = useHistory();
  const dispatch = useDispatch();

  console.log(isLoggedIn);

  if (!isLoggedIn) {
    history.push("/login");
  }

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      console.log("invalid inputs");
      return;
    }

    userService
      .auth(email, password)
      .then((data) => {
        //Redirect to all images
        dispatch(_isLoggedIn(true));
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
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

          <Button variant="primary" type="submit" disabled={isSending}>
            Submit
          </Button>
        </Form>

        <Spinner animation="border" variant="primary" hidden={!isSending} />
      </div>
    </div>
  );
};
