import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import useHttpClient from '../../../common/hooks/http-hook';
import {
  BackToTop,
  ErrorModal,
  ProjectCard
} from '../../../common/components/UIElements';
import { LoadingProjectCard } from '../../../common/components/UIElements/loadingAnimations';

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [show, setShow] = useState(false);
  const { isLoading, error, sendRequest } = useHttpClient();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/project/projects`
        );
        setProjects(responseData);
      } catch (err) {}
    };
    fetchData();
  }, [sendRequest]);

  return (
    <>
      <ErrorModal
        show={show}
        onHide={() => setShow(false)}
        onClick={() => setShow(false)}
        error={error}
      />
      <Container>
        <div
          style={{ margin: '5%', minHeight: '100vh' }}
          className="all-projects"
        >
          <div className="projects__header">
            <h1>Projects</h1>
          </div>
          <div className="projects__container">
            <Row>
              {projects &&
                projects.map((project, i) => {
                  return (
                    <Col key={i} className="mt-5" sm={6} md={6}>
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
            {isLoading && (
              <Row>
                {[...Array(6)].map((_, i) => {
                  return (
                    <Col key={i} className="mt-5" sm={6} md={6}>
                      <LoadingProjectCard />
                    </Col>
                  );
                })}
              </Row>
            )}
          </div>
        </div>
        <BackToTop />
      </Container>
    </>
  );
};

export default AllProjects;
