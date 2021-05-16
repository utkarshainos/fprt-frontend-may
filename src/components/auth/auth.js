import React, { useState, useCallback } from "react";
import "./auth.css";
import { Form, Button, Spinner } from "react-bootstrap";
import userService from "../../services/user.service.js";
import routeService from "../../services/route.service";
import { useHistory } from "react-router-dom";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSending, setIsSending] = useState(false);

  const history = useHistory();

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
        history.push("/");
        setIsSending(false);
      })
      .catch((data) => {
        setIsSending(false);
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
