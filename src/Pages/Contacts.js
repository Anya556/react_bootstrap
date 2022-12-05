import React, { Component } from 'react';
import { Form, Container, Button } from 'react-bootstrap';

export default class Contacts extends Component {
  render() {
    return (
      <Container className="mt-5" style={{width:'500px'}}>
        <h1 className= "text-center">Contact us</h1>
        <Form className="mt-5">
          <Form.Group controlId="formBasicEmail" className="mt-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text>
              * We'll never share your email with anyone else
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="mt-3">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox" >
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button className="mt-3" variant="primary" type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}
