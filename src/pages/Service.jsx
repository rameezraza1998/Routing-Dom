import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Service() {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Our Services</h1>
      <Row className="mb-4">
        <Col md={8} className="mx-auto">
          <p className="text-center">
            We are committed to providing exceptional services to enhance your shopping experience. Here’s what we offer:
          </p>
        </Col>
      </Row>

      <Row className="g-4">
        <Col md={4}>
          <Card className="h-100 text-center">
            <Card.Body>
              <Card.Title>Fast Shipping</Card.Title>
              <Card.Text>
                Enjoy fast and reliable shipping options to get your products delivered quickly and efficiently.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 text-center">
            <Card.Body>
              <Card.Title>Easy Returns</Card.Title>
              <Card.Text>
                Our hassle-free return policy allows you to return items within 30 days if you’re not satisfied.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 text-center">
            <Card.Body>
              <Card.Title>24/7 Customer Support</Card.Title>
              <Card.Text>
                Our dedicated support team is available 24/7 to assist you with any inquiries or issues.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col className="text-center">
          <Button variant="success" size="lg">
            Explore All Services
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Service