import React from 'react';
import { Helmet } from 'react-helmet';

import { BackToTop } from '../../common/components/UIElements';
import {
  BlogsHistory,
  ContributionsGraph,
  Introduction,
  Details,
  Experience
} from './components';

const About = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>About | itsrakesh</title>
        <meta name="description" content="Know more about me." />
        <meta property="og:title" content="About Rakesh Potnuru" />
        <meta property="og:description" content="Know more about me." />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/itsrakesh/Portfolio/about_og_WQ2qOAw9_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646652253766"
        />
        <meta property="twitter:title" content="About Rakesh Potnuru" />
        <meta property="twitter:description" content="Know more about me." />
        <meta
          property="twitter:image"
          content="https://ik.imagekit.io/itsrakesh/Portfolio/about_og_WQ2qOAw9_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646652253766"
        />
      </Helmet>
      <Introduction />
      <ContributionsGraph />
      <BlogsHistory />
      <Experience />
      <Details />
      <BackToTop />
    </React.Fragment>
  );
};

export default About;
