import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Home() {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Welcome to Our E-commerce Platform</h1>
      <Row className="mb-4">
        <Col md={8} className="mx-auto">
          <p className="text-center">
            Discover a wide range of quality products at unbeatable prices. Shop with confidence and enjoy exceptional customer service.
          </p>
        </Col>
      </Row>
      
      <Row className="g-4">
        <Col md={4}>
          <Card className="h-100 text-center">
            <Card.Body>
              <Card.Title>Featured Product 1</Card.Title>
              <Card.Text>
                Explore our top-selling product that offers great value and quality.
              </Card.Text>
              <Button variant="primary">Shop Now</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 text-center">
            <Card.Body>
              <Card.Title>Featured Product 2</Card.Title>
              <Card.Text>
                Check out this amazing product that customers love for its reliability.
              </Card.Text>
              <Button variant="primary">Shop Now</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 text-center">
            <Card.Body>
              <Card.Title>Featured Product 3</Card.Title>
              <Card.Text>
                Don't miss our latest addition, a must-have for every household.
              </Card.Text>
              <Button variant="primary">Shop Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col className="text-center">
          <Button variant="success" size="lg">
            Browse All Products
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
