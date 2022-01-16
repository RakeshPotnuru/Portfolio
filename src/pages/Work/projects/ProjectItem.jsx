import React, { useEffect, useCallback, useState } from 'react';
import axios from 'axios';
import Markdown from 'markdown-to-jsx';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { BackToTop, ErrorModal } from '../../../common/components/UIElements';
import { LoadingSpinner } from '../../../common/components/UIElements/loadingAnimations';
import './ProjectItem.scss';

const ProjectItem = () => {
  const [readme, setReadme] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [show, setShow] = useState(false);

  const { repoName } = useParams();

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await axios.get(
        `https://raw.githubusercontent.com/RakeshPotnuru/${repoName}/${
          'master' || 'main'
        }/README.md`
      );
      setIsLoading(false);
      setReadme(data.data);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }, [setReadme, repoName]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <ErrorModal
        show={show}
        onHide={() => setShow(false)}
        onClick={() => setShow(false)}
        error={error}
      />
      <Container>
        {isLoading && <LoadingSpinner />}
        {!isLoading && (
          <div className="project-item">
            <Markdown children={readme} />
          </div>
        )}
        <BackToTop />
      </Container>
    </>
  );
};

export default ProjectItem;
