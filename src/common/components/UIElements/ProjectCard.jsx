import React from 'react';
import {
  Col,
  Container,
  OverlayTrigger,
  Row,
  Tooltip,
  Card
} from 'react-bootstrap';
import { FaReadme, FaEye } from 'react-icons/all';
import { Link } from 'react-router-dom';

import './ProjectCard.scss';

const ProjectCard = (props) => {
  const cutTextHandler = (text) => {
    if (text?.length > 15) {
      return text.substring(0, 15) + '...';
    }
    return text;
  };

  return (
    <div className="project-card">
      <Container>
        <Card bg="dark">
          <Card.Img
            variant="top"
            src={props.image}
            alt={props.title}
            loading="lazy"
          />
          <Card.Body>
            <Row>
              <Col>
                <Card.Title>{cutTextHandler(props.title)}</Card.Title>
              </Col>
              <Col>
                {props.techs && (
                  <div className="project-card__details__tech-stack">
                    {props.techs.map((tech) => (
                      <OverlayTrigger
                        key={tech.title}
                        placement="top"
                        overlay={
                          <Tooltip id={`tooltip-top`}>{tech.title}</Tooltip>
                        }
                      >
                        <img
                          style={{ background: `${tech.bg}` }}
                          src={tech.url}
                          alt={tech.title}
                          loading="lazy"
                        />
                      </OverlayTrigger>
                    ))}
                  </div>
                )}
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer>
            <Row className="project-card__links">
              <Col className="text-center">
                <Link to={`/work/projects/${props.repoName}`}>
                  <FaReadme />
                  &nbsp;Details
                </Link>
              </Col>
              <Col className="text-center">
                <a
                  href={props.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEye />
                  &nbsp;Live&nbsp;Preview
                </a>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
};

export default ProjectCard;
