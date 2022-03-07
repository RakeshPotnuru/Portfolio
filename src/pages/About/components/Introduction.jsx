import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTwitter, FaMedium, FaGithub } from 'react-icons/all';

import { CustomButton } from '../../../common/components/UIElements';

import './Introduction.scss';

const Introduction = () => {
  return (
    <div id="introduction">
      <Container>
        <div className="introduction">
          <Row>
            <Col sm>
              <div className="introduction__img">
                <img
                  src="https://ik.imagekit.io/itsrakesh/Portfolio/avatar_3PaiLNQSnTE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644134493976"
                  alt="its rakesh"
                  loading="lazy"
                />
              </div>
            </Col>
            <Col className="introduction__short mt-4" sm>
              <div>
                <h1>Rakesh Potnuru</h1>
                <p>
                  Full Stack Developer, technical writer, and a passionate
                  learner.
                </p>
              </div>
              <div>
                <h6>Email Me</h6>
                <a href="mailto:rakesh@itsrakesh.co">
                  <span className="introduction__short__email">
                    rakesh@itsrakesh.co
                  </span>
                </a>
              </div>
              <div className="introduction__short__links">
                <Row>
                  <Col lg={3} md={6} xs={6}>
                    <Link to="/work">
                      <CustomButton className="work">Work</CustomButton>
                    </Link>
                  </Col>
                  <Col lg={3} md={6} xs={6}>
                    <Link to="/blogs">
                      <CustomButton className="blogs">Blogs</CustomButton>
                    </Link>
                  </Col>
                  <Col lg={3} md={6} xs={6}>
                    <Link to="/contact">
                      <CustomButton className="contact">Contact</CustomButton>
                    </Link>
                  </Col>
                  <Col lg={3} md={6} xs={6}>
                    <Link to="/profiles">
                      <CustomButton className="profiles">Profiles</CustomButton>
                    </Link>
                  </Col>
                </Row>
              </div>
              <div className="introduction__short__social">
                <h6>Follow me on</h6>
                <div>
                  <Link to="/profiles/twitter">
                    <FaTwitter className="social-icon" />
                  </Link>
                  <Link to="/profiles/github">
                    <FaGithub className="social-icon" />
                  </Link>
                  <Link to="/profiles/medium">
                    <FaMedium className="social-icon" />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
          <hr />
          <div className="introduction__brief">
            <p>
              Hi there! Thanks for visiting my portfolio.
              <br /> I'm{' '}
              <a
                href="https://www.linkedin.com/in/rakesh-potnuru-067a8b1b1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rakesh Potnuru
              </a>
              , a Full Stack Developer, Technical Writer, and a passionate
              learner. I am pursuing B.Tech in Computer Science and
              Engineering at{' '}
              <a
                href="https://www.lpu.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lovely Professional University
              </a>
              , Punjab, India. I have worked on a wide range of technologies and
              have worked on projects ranging from small to large scale. I am a
              self-motivated and self-driven individual who is always looking
              for new challenges and opportunities. I love participating in
              hackathons and engaging in communities.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Introduction;
