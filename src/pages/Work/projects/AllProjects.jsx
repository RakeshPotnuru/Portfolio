import React, { useState, useEffect, Fragment } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

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
    <Fragment>
      <Helmet>
        <title>Projects | itsrakesh</title>
        <meta name="description" content="See my projects" />
        <meta property="og:title" content="Rakesh's Projects" />
        <meta property="og:description" content="See my projects" />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/itsrakesh/Portfolio/projects__og_fLEcj2Dqve4O.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646652254785"
        />
        <meta property="twitter:title" content="Rakesh's Projects" />
        <meta property="twitter:description" content="See my projects" />
        <meta
          property="twitter:image"
          content="https://ik.imagekit.io/itsrakesh/Portfolio/projects__og_fLEcj2Dqve4O.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646652254785"
        />
      </Helmet>
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
    </Fragment>
  );
};

export default AllProjects;
