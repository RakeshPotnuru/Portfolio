import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import {
  Communicative,
  Collaborative,
  WorkEthic,
  SelfMotivation,
  ProjectsIllustration
} from '../../../assets/images';
import {
  AnimatedButton,
  ProjectCard,
  AnimatedCounter
} from '../../../common/components/UIElements';
import './Content.scss';
import { LoadingProjectCard } from '../../../common/components/UIElements/loadingAnimations';

const StrengthItem = (props) => {
  return (
    <div className="strengths__item">
      <div className="strengths__item__image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="strengths__item__content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

const Content = (props) => {
  return (
    <Container>
      <div className="content">
        <Container>
          <Row className="content__container">
            <Col className="content__container__image" sm>
              <img src={ProjectsIllustration} alt="Projects illustration" />
            </Col>
            <Col className="content__container__details" sm>
              <div>
                <h1>
                  <AnimatedCounter end={50} duration={1} />
                  <span style={{ color: '#8ED2A9' }}>+</span>
                </h1>
                <p>Completed projects</p>
                <h2>Glad to help you!</h2>
                <p>
                  As a web developer, technical writer, and learner I am always
                  looking for new challenges and opportunities to learn new
                  things. I am always looking for projects that can help me
                  improve my skills and knowledge.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <div className="content__recent-projects">
            <div className="content__recent-projects__header">
              <h2>Recent Projects</h2>
              <Link to="/work/projects">
                <AnimatedButton>View&nbsp;More</AnimatedButton>
              </Link>
            </div>
            <Row>
              {props.error}
              {!props.isLoading &&
                props.projects &&
                props.projects.slice(0, 2).map((project, i) => {
                  return (
                    <Col key={i} className="mt-5" sm>
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
                {[...Array(2)].map((_, i) => {
                  return (
                    <Col key={i} className="mt-5" sm>
                      <LoadingProjectCard />
                    </Col>
                  );
                })}
              </Row>
            )}
          </div>
        </Container>
        <Container>
          <div className="content__strengths">
            <h2 className="content__strengths__header">
              Why Hire Me<span style={{ color: '#FF5403' }}>?</span>
            </h2>
            <Row className="strengths">
              <Col sm={6} md={6} lg={3}>
                <StrengthItem
                  image={Communicative}
                  title="Communicative"
                  description="I balance talking and listening hence ensuring effective
                      communication."
                />
              </Col>
              <Col sm={6} md={6} lg={3}>
                <StrengthItem
                  image={Collaborative}
                  title="Collaborative"
                  description="Teamwork makes the dream work. Collaboration first, then
                      work."
                />
              </Col>
              <Col sm={6} md={6} lg={3}>
                <StrengthItem
                  image={WorkEthic}
                  title="Work Ethic"
                  description="I don't wait for deadlines, deadlines wait for me."
                />
              </Col>
              <Col sm={6} md={6} lg={3}>
                <StrengthItem
                  image={SelfMotivation}
                  title="Self Motivation"
                  description="I put myself into action to achieve my goals."
                />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </Container>
  );
};

export default Content;
