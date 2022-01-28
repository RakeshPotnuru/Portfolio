import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import VisibilitySensor from 'react-visibility-sensor';
import { FiExternalLink } from 'react-icons/fi';

import techData from './techData';
import {
  AnimatedCounter,
  CustomButton
} from '../../../common/components/UIElements';
import './Details.scss';
import { Link } from 'react-router-dom';

const TechCard = (props) => {
  return (
    <div className="tech-card">
      <img
        style={{ background: `${props.bg}` }}
        src={props.imageUrl}
        alt={props.title}
      />
      <h6 className="mt-2">{props.title}</h6>
    </div>
  );
};

const Details = () => {
  return (
    <Container>
      <div className="details">
        <div className="details__techs">
          <h2 className="details__techs__title">
            Tools, Languages & Frameworks/Libraries
          </h2>
          <div className="details__techs__container">
            <Row className="mt-5">
              {techData.map((item, i) => {
                return (
                  <Col key={i}>
                    <TechCard
                      imageUrl={item.imageUrl}
                      title={item.techName}
                      bg={item.bg}
                    />
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
        <div className="details__skills mt-5">
          <h2 className="details__skills__title">Skills</h2>
          <div className="details__skills__container">
            <Row>
              <Col sm>
                <h4>Web Development</h4>
              </Col>
              <Col sm>
                <VisibilitySensor>
                  {({ isVisible }) =>
                    isVisible ? (
                      <ProgressBar now={75} label={`${75}%`} />
                    ) : (
                      <ProgressBar now={0} />
                    )
                  }
                </VisibilitySensor>
              </Col>
            </Row>
            <Row>
              <Col sm>
                <h4>Technical Writing</h4>
              </Col>
              <Col sm>
                <VisibilitySensor>
                  {({ isVisible }) =>
                    isVisible ? (
                      <ProgressBar now={65} label={`${65}%`} />
                    ) : (
                      <ProgressBar now={0} />
                    )
                  }
                </VisibilitySensor>
              </Col>
            </Row>
            <em>
              <span style={{ color: 'red' }}>* </span>Percentage represents my
              level of proficiency in that skill. Remaining percentage shows how
              much I need to improve or learn.
            </em>
          </div>
        </div>
        <div className="details__achievements mt-5">
          <h2 className="details__achievements__title">Achievements</h2>
          <div className="details__achievements__container">
            <div className="details__achievements__container__achievement">
              <h3 className="title">Hackathons</h3>
              <div className="hackathon-card">
                <Row>
                  <Col sm>
                    <h2>
                      <AnimatedCounter end={5} duration={1} />
                    </h2>
                    <p>Participated</p>
                  </Col>
                  <Col sm>
                    <h2>
                      <AnimatedCounter end={3} duration={1} />
                    </h2>
                    <p>Won</p>
                  </Col>
                </Row>
              </div>
              <h6 className="m-4">See my hackathon achievements on:</h6>
              <div className="hackathon-links">
                <Row>
                  <Col className="text-center">
                    <Link to="/profiles/devpost">
                      <CustomButton>
                        Devpost <FiExternalLink />
                      </CustomButton>
                    </Link>
                  </Col>
                  <Col className="text-center">
                    <Link to="/profiles/devfolio">
                      <CustomButton>
                        Devfolio <FiExternalLink />
                      </CustomButton>
                    </Link>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
        <div className="support">
          <h2>Want to support me?</h2>
          <p>Share this website to FOUR people you know.</p>
        </div>
      </div>
    </Container>
  );
};

export default Details;
