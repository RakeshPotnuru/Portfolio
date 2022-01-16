import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import GithubCalendar from 'github-calendar';
import 'github-calendar/dist/github-calendar-responsive.css';
import 'github-calendar/dist/github-calendar.min.js';

import './ContributionsGraph.scss';

const ContributionsGraph = () => {
  useEffect(() => {
    GithubCalendar('.calendar', 'RakeshPotnuru', {
      tooltips: true
    });
  }, []);

  return (
    <Container>
      <div className="contributions-graph">
        <h2>OSS Contributions</h2>
        <div className="calendar" />
      </div>
    </Container>
  );
};

export default ContributionsGraph;
