import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import { Container, Card, CardGroup, Button } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <div>
        <CarouselBox />
        <Container>
          <h2 className="text-center m-4">Our team</h2>

          <CardGroup className="m-4">
            <Card className="col-md-5">
              <Card.Body>
                <Card.Title>Our team</Card.Title>
                <Card.Text>
                  Everyone says it, but in our case it’s true: our team is the
                  secret to our success. Each of our employees is amazing in
                  their own right, but together they are what makes Us such
                  a fun and rewarding place to work.
                </Card.Text>
              </Card.Body>
              <Card.Img
                variant="bottom"
                src="https://media.istockphoto.com/id/1146468297/pl/zdj%C4%99cie/wielorasowy-zesp%C3%B3%C5%82-biznesowy-ludzie-rozmawiaj%C4%85-siedz%C4%85c-przy-stole-w-sali-konferencyjnej.jpg?s=612x612&w=0&k=20&c=qjnC5Ldckxvm18d1DdO9b-B1EdVInelAMeCbAXBjKSY="
              />
              <Button variant="light" src="/">
                About
              </Button>
            </Card>
            <Card className="col-md-5">
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/3182749/pexels-photo-3182749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
              <Card.Body>
                <Card.Title>Our results</Card.Title>
                <Card.Text>
                  Our team is a tight-knit, talented group with a shared vision
                  of delivering consistently great results for our clients, as
                  well as ensuring the agency is a fun, inclusive, challenging
                  place to work and develop a rewarding career.
                </Card.Text>
              </Card.Body>

              <Button variant="light" src="/">
                About
              </Button>
            </Card>
            <Card className="col-md-5">
              <Card.Body>
                <Card.Title>Our team</Card.Title>
                <Card.Text>
                  We’re very proud of the team we’ve built – there’s more than
                  thirty of us now but it still feels like it did when there
                  were just a few of us. We has always been an agency defined by bringing together talented people with a shared vision.
                </Card.Text>
              </Card.Body>
              <Card.Img
                variant="bottom"
                src="https://media.istockphoto.com/id/691710302/pl/zdj%C4%99cie/ludzie-okazuj%C4%85-jedno%C5%9B%C4%87-wsp%C3%B3lnymi-r%C4%99kami-prac%C4%99-zespo%C5%82ow%C4%85-i-wsp%C3%B3ln%C4%85-koncepcj%C4%99.jpg?s=612x612&w=0&k=20&c=OK_z2ELhgDVVWcnwgi5-UMwXqnVUNmj4wQLJK8-AkyQ="
              />
              <Button variant="light" src="/">
                About
              </Button>
            </Card>
          </CardGroup>
        </Container>
      </div>
    );
  }
}
