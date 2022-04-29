import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  FiExternalLink,
  AiFillGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
  FaDev,
  AiFillMediumSquare,
  CgCloseO
} from 'react-icons/all';

import './Stats.scss';

const StatItem = (props) => {
  return (
    <Col
      className="stats__container__stat__card__item text-center mx-4 py-4"
      style={
        props.style || {
          backgroundColor: '#485461',
          backgroundImage: 'linear-gradient(315deg, #485461 0%, #28313b 74%)'
        }
      }
    >
      <h2>{props.count}</h2>
      <p>{props.item}</p>
    </Col>
  );
};

const Stat = (props) => {
  return (
    <div className="stats__container__stat">
      <h4>
        {props.icon || <CgCloseO />} {props.title}{' '}
        <Link to={`/profiles/${props.title || ''}`}>
          <FiExternalLink size={24} />
        </Link>
      </h4>
      <Row className="stats__container__stat__card">{props.children}</Row>
    </div>
  );
};

const Stats = () => {
  const githubBg = {
    backgroundColor: '#485461',
    backgroundImage: 'linear-gradient(315deg, #485461 0%, #28313b 74%)'
  };

  const twitterBg = {
    backgroundColor: '#1DA1F2'
  };

  const linkedinBg = {
    backgroundColor: '#0077B5'
  };

  return (
    <div id="stats">
      <Container>
        <div className="stats">
          <h1>Here are my numbers</h1>
          <div className="stats__container">
            <Stat title="GitHub" icon={<AiFillGithub />}>
              <StatItem count="345" item="Contributions" style={githubBg} />
              <StatItem count="45" item="Repositories" style={githubBg} />
              <StatItem count="5" item="Followers" style={githubBg} />
            </Stat>
            <Stat title="Dev" icon={<FaDev />}>
              <StatItem count="45" item="Articles" />
              <StatItem count="5" item="Followers" />
              <StatItem count="55000" item="Reads" />
              <StatItem count="1200" item="Reactions" />
            </Stat>
            <Stat title="Medium" icon={<AiFillMediumSquare />}>
              <StatItem count="45" item="Articles" />
              <StatItem count="5" item="Followers" />
              <StatItem count="55000" item="Reads" />
              <StatItem count="1200" item="Reactions" />
            </Stat>
            <Stat title="Twitter" icon={<AiOutlineTwitter color="#1DA1F2" />}>
              <StatItem count="45" item="Tweets" style={twitterBg} />
              <StatItem count="5" item="Followers" style={twitterBg} />
            </Stat>
            <Stat title="LinkedIn" icon={<AiFillLinkedin color="#0077B5" />}>
              <StatItem count="45" item="Posts" style={linkedinBg} />
              <StatItem count="5" item="Followers" style={linkedinBg} />
            </Stat>
            <Stat title="Showwcase">
              <StatItem count="45" item="Threads" />
              <StatItem count="5" item="Followers" />
            </Stat>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Stats;
