import { React, useState } from 'react';
import { Modal, Button, Form, Container } from 'react-bootstrap';
import axios from 'axios';

const SignUpModal = ({ show, onHide }) => {
  const [data, setData] = useState({
    userId: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userInfo = {
      userId: data.userId,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };

    axios
      .post('http://127.0.0.1:3000/api/users/signup', { userInfo })
      .then((res) => {
        console.log(res.status);
      });
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">SignUp</Modal.Title>
      </Modal.Header>
      <Container>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="userId"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                name="confirmPassword"
                onChange={handleChange}
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button type="submit" variant="info" size="lg" className="my-2">
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Container>
    </Modal>
  );
};

export default SignUpModal;
