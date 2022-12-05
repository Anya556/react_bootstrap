import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <Container className="mt-5">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Libraries & Frameworks</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <img
                    src="https://www.webhopers.com/wp-content/uploads/2021/01/web-development-company-in-Rajasthan.jpg"
                    alt="Design"
                    className="mw-100"
                  />
                  <p>
                    Web design refers to the design of websites that are
                    displayed on the internet. It usually refers to the user
                    experience aspects of website development rather than
                    software development. Web design used to be focused on
                    designing websites for desktop browsers; however, since the
                    mid-2010s, design for mobile and tablet browsers has become
                    ever-increasingly important.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img
                    src="https://media.istockphoto.com/id/1262600344/vector/symbol-of-teamwork-cooperation-partnership.jpg?s=170667a&w=0&k=20&c=gPAfXqxti4jj855cDr9Fw-wzqDqIKGqKMpDwLCWARY8="
                    alt="Team"
                    className="mw-100"
                  />
                  <p className="pt-5">
                    Team development is defined as the process of assembling
                    various members to build an effective team. In order to be
                    effective, it's critical that team members can work together
                    well for maximum contributions to the team's desired
                    outcome.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img
                    src="https://www.technotification.com/wp-content/uploads/2018/04/learn-web-development.jpg"
                    alt="Developer"
                    className="mw-100"
                  />
                  <p className="mt-5">
                    JavaScript is the world's most popular programming language.
                    <br />
                    JavaScript is the programming language of the Web.
                    <br />
                    JavaScript is easy to learn. <br />
                    JavaScript from basic to advanced.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img
                    src="https://i.ytimg.com/vi/_RLHb052VIg/maxresdefault.jpg"
                    alt="Libraries & Frameworks"
                    className="mw-100"
                  />
                  <p className="mt-5">
                    JavaScript is a dynamic scripting language designed to
                    extend and build HTML documents. JavaScript is most well
                    known for being the scripting language of the Internet
                    Explorer browser. At least 97% of the websites use it
                    because of its feature of dominant client-side scripting
                    language. The scripts are included from or embedded in HTML
                    documents and interact with DOM. Java scripts are generally
                    used for web applications, where they are used to handle
                    dynamic features on a website such as forms, navigation,
                    advertisements, pop-ups, and animated graphics. In addition,
                    Java scripts can connect to databases or the internet and
                    dynamically display the information.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
