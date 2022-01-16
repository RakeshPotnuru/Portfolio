import React from 'react';
import { BackToTop } from '../../common/components/UIElements';

import {
  BlogsHistory,
  ContributionsGraph,
  Introduction,
  Details
} from './components';

const About = () => {
  return (
    <React.Fragment>
      <Introduction />
      <ContributionsGraph />
      <BlogsHistory />
      <Details />
      <BackToTop />
    </React.Fragment>
  );
};

export default About;
