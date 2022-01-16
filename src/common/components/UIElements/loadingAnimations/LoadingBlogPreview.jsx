import React from 'react';
import { Placeholder } from 'react-bootstrap';

const LoadingBlogPreview = () => {
  return (
    <div
      style={{
        backgroundImage:
          'linear-gradient(328deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 75%)'
      }}
      className="blog-preview"
    >
      <div className="blog-preview__details">
        <h3 className="blog-preview__details__title">
          <Placeholder animation="glow">
            <Placeholder xs={6} size={'lg'} />
          </Placeholder>
        </h3>

        <p className="blog-preview__details__description">
          <Placeholder animation="glow">
            <Placeholder xs={6} size={'sm'} />
            <Placeholder xs={6} size={'sm'} />
          </Placeholder>
        </p>

        <div className="blog-preview__details__links">
          <Placeholder animation="glow">
            <Placeholder.Button variant="primary" xs={2} />
          </Placeholder>
          <p className="mt-2">
            <Placeholder animation="glow">
              <Placeholder xs={6} size={'sm'} />
            </Placeholder>
          </p>
          <div className="blog-preview__details__links__extra">
            <Placeholder animation="glow">
              <Placeholder
                style={{ width: '30px', height: '30px' }}
                size="lg"
              />
            </Placeholder>
            <Placeholder animation="glow">
              <Placeholder
                className="ms-4"
                style={{ width: '30px', height: '30px' }}
                size="lg"
              />
            </Placeholder>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingBlogPreview;
