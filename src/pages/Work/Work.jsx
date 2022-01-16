import React, { useEffect, useState } from 'react';

import { BackToTop } from '../../common/components/UIElements';
import { Projects } from './components';
import useHttpClient from '../../common/hooks/http-hook';

const Work = () => {
  const { isLoading, error, sendRequest, show } = useHttpClient();
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
      <Projects
        projects={projects}
        isLoading={isLoading}
        error={error}
        show={show}
      />
      <BackToTop />
    </React.Fragment>
  );
};

export default Work;
