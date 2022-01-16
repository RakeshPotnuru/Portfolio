import React from 'react';
import { Col, Container, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { FaReadme, FaEye } from 'react-icons/all';
import { Link } from 'react-router-dom';

import './ProjectCard.scss';

const ProjectCard = (props) => {
  const cutTextHandler = (text) => {
    if (text?.length > 10) {
      return text.substring(0, 10) + '...';
    }
    return text;
  };

  return (
    <div className="project-card">
      <div className="project-card__image">
        <img src={props.image} alt={props.title} />
      </div>
      <Container>
        <div className="project-card__details">
          <Row>
            <Col>
              <div className="project-card__details__title">
                <h5>{cutTextHandler(props.title)}</h5>
              </div>
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
                      />
                    </OverlayTrigger>
                  ))}
                </div>
              )}
            </Col>
          </Row>
          <hr />
          <div className="project-card__details__links mt-2">
            <div>
              <Link to={`/work/projects/${props.repoName}`}>
                <FaReadme className="mt-2 icon" />
                &nbsp;Details
              </Link>
            </div>
            <div>
              <a href={props.liveUrl} target="_blank" rel="noopener noreferrer">
                <FaEye className="mt-2 icon" />
                &nbsp;Live&nbsp;Preview
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectCard;
