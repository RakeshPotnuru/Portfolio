import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { Hero, Content, CTA } from './components';
import { BackToTop } from '../../common/components/UIElements';
import useHttpClient from '../../common/hooks/http-hook';

const Home = () => {
  const { isLoading, error, sendRequest } = useHttpClient();
  const [projects, setProjects] = useState([]);

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
    <React.Fragment>
      <Helmet>
        <title>itsrakesh - Rakesh Potnuru</title>
        <meta
          name="description"
          content="Hi! I'm Rakesh - a web developer, technical writer and a passionate learner. I love participating in hackathons, contributing to open source projects and find pleasure in helping folks around me."
        />
        <meta property="og:title" content="Rakesh Potnuru" />
        <meta
          property="og:description"
          content="Hi! I'm Rakesh - a web developer, technical writer and a passionate learner. I love participating in hackathons, contributing to open source projects and find pleasure in helping folks around me."
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/itsrakesh/Portfolio/its_rakesh_5zlx0DELg.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646652255362"
        />
        <meta property="twitter:title" content="Rakesh Potnuru" />
        <meta
          property="twitter:description"
          content="Hi! I'm Rakesh - a web developer, technical writer and a passionate learner. I love participating in hackathons, contributing to open source projects and find pleasure in helping folks around me."
        />
        <meta
          property="twitter:image"
          content="https://ik.imagekit.io/itsrakesh/Portfolio/its_rakesh_5zlx0DELg.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646652255362"
        />
      </Helmet>
      <Hero />
      <Content projects={projects} isLoading={isLoading} error={error} />
      <CTA />
      <BackToTop />
    </React.Fragment>
  );
};

export default Home;
