import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';


function About() {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">About Us</h1>
      <Row className="mb-4">
        <Col md={8} className="mx-auto">
          <p className="text-center">
            We are a leading e-commerce platform dedicated to providing quality products and exceptional customer service. Our mission is to make shopping easy, accessible, and enjoyable for everyone.
          </p>
        </Col>
      </Row>
      
      <Row className="g-4">
        <Col md={4}>
          <Card className="h-100 text-center">
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                To provide an unparalleled shopping experience by offering a wide range of products and services that meet our customers' needs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 text-center">
            <Card.Body>
              <Card.Title>Our Vision</Card.Title>
              <Card.Text>
                To be the go-to platform for all your shopping needs, recognized for our quality, innovation, and customer satisfaction.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 text-center">
            <Card.Body>
              <Card.Title>Our Values</Card.Title>
              <Card.Text>
                Integrity, customer focus, innovation, and teamwork guide everything we do. We are committed to making a positive impact on our community and the environment.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About