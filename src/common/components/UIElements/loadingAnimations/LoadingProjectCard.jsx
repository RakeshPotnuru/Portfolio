import React from 'react';
import { Col, Container, Row, Placeholder } from 'react-bootstrap';

const LoadingProjectCard = () => {
  return (
    <div className="project-card">
      <div className="project-card__image">
        <Placeholder animation="glow">
          <Placeholder xs={12} />
        </Placeholder>
      </div>
      <Container>
        <div className="project-card__details">
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
                    borderRadius: '20px',
                    height: '2rem'
                  }}
                  xs={12}
                />
              </Placeholder>
            </Col>
          </Row>
          <hr />
          <div className="mt-2">
            <Placeholder animation="glow">
              <Placeholder xs={5} />
              <Placeholder className="ms-4" xs={5} />
            </Placeholder>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LoadingProjectCard;
