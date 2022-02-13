import React, { useEffect, useCallback, useState, Fragment } from 'react';
import axios from 'axios';
import Markdown from 'markdown-to-jsx';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import {
  BackToTop,
  ErrorModal,
  Video
} from '../../../common/components/UIElements';
import { LoadingSpinner } from '../../../common/components/UIElements/loadingAnimations';
import './ProjectItem.scss';

const ProjectItem = () => {
  const [readme, setReadme] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [show, setShow] = useState(false);

  const { repoName } = useParams();

  const fetchRepo = useCallback(async () => {
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
    fetchRepo();
  }, [fetchRepo]);

  return (
    <Fragment>
      <Helmet>
        <title>{repoName} | itsrakesh</title>
        <meta name="description" content={`See my ${repoName} project`} />
        <meta property="og:title" content={repoName} />
        <meta
          property="og:description"
          content={`See my ${repoName} project`}
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/itsrakesh/Portfolio/projects__og_r2hbQSeQy0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644157173960"
        />
        <meta property="twitter:title" content={repoName} />
        <meta
          property="twitter:description"
          content={`See my ${repoName} project`}
        />
        <meta
          property="twitter:image"
          content="https://ik.imagekit.io/itsrakesh/Portfolio/projects__og_r2hbQSeQy0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644157173960"
        />
      </Helmet>
      <ErrorModal
        show={show}
        onHide={() => setShow(false)}
        onClick={() => setShow(false)}
        error={error}
      />
      <Container>
        <div className="project-item">
          <h2>Project Details</h2>
          <div className="project-item__video">
            <Video repoName={repoName} />
          </div>
          <em>
            <span style={{ color: 'red' }}>*</span> This page is the README file
            of{' '}
            <a
              href={`https://github.com/RakeshPotnuru/${repoName}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {repoName}
            </a>{' '}
            Github repository.
          </em>
          {isLoading && <LoadingSpinner />}
          {!isLoading && (
            <div className="project-item__details">
              <Markdown children={readme} />
            </div>
          )}
        </div>
        <BackToTop />
      </Container>
    </Fragment>
  );
};

export default ProjectItem;
