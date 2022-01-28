import React from 'react';
import { Col, Container, Row, Placeholder, Card } from 'react-bootstrap';

const LoadingProjectCard = () => {
  return (
    <div className="project-card">
      <Container>
        <Card bg="dark">
          <div className="project-card__image">
            <Placeholder animation="glow">
              <Placeholder xs={12} />
            </Placeholder>
          </div>
          <Card.Body>
            <Row>
              <Col>
                <Placeholder animation="glow">
                  <Placeholder xs={12} />
                </Placeholder>
              </Col>
              <Col>
                <Placeholder animation="glow">
                  <Placeholder
                    style={{
                      background: '#386163',
                      padding: '0.5rem 0.2rem',
                      height: '2rem'
                    }}
                    xs={12}
                  />
                </Placeholder>
              </Col>
            </Row>
          </Card.Body>
          <hr />
          <Card.Footer>
            <Placeholder animation="glow">
              <Placeholder xs={5} />
              <Placeholder className="ms-4" xs={5} />
            </Placeholder>
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
};

export default LoadingProjectCard;
