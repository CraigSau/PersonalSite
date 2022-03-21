import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    const regEx = /(.+)@(.+){2,}\.(.+){2,}/;
    if (regEx.test(email.toLowerCase()) && password.length >= 8) {
      return true;
    }
    return false;
  }

  // TO-DO: validate credentials exist in database

  // TO-DO: backend connection

  // function handleSubmit(event: { preventDefault: () => void; }) {
  //   event.preventDefault();
  // }

  return (
    <div className="Login">
      <Form>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            className="email-form"
            size="lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            size="lg"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="button-div">
          <Button
            size="lg"
            type="submit"
            className="custom-btn"
            disabled={!validateForm()}
          >
            Login
          </Button>
        </div>
        <div className="sign-up">
          <p>
            Don&apos;t have an account? Signup&nbsp;
            <Link to="/signup">
              here
            </Link>
            .
          </p>
        </div>
      </Form>
    </div>
  );
};
