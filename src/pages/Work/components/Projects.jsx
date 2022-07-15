import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/all';
import { Link } from 'react-router-dom';

import {
  CustomButton,
  ProjectCard,
  ErrorModal
} from '../../../common/components/UIElements';
import { LoadingProjectCard } from '../../../common/components/UIElements/loadingAnimations';

import './Projects.scss';

const Projects = (props) => {
  return (
    <>
      <ErrorModal show={props.show} error={props.error} />

      <Container>
        <div className="projects">
          <div className="projects__header">
            <h1>Projects</h1>
            <Link to="/work/projects">
              <CustomButton>
                See All Projects <BsArrowRight />
              </CustomButton>
            </Link>
          </div>
          <div className="projects__container">
            <Row>
              {!props.isLoading &&
                props.projects &&
                props.projects.slice(0, 3).map((project, i) => {
                  return (
                    <Col key={i} className="mt-5" sm={6} md={4}>
                      <ProjectCard
                        title={project.title}
                        image={project.image}
                        repoName={project.repoName}
                        liveUrl={project.liveUrl}
                        techs={project.techs}
                      />
                    </Col>
                  );
                })}
            </Row>
            {props.isLoading && (
              <Row>
                {[...Array(3)].map((_, i) => {
                  return (
                    <Col key={i} className="mt-5" sm={6} md={4}>
                      <LoadingProjectCard />
                    </Col>
                  );
                })}
              </Row>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Projects;
