import React from 'react';
import { Placeholder } from 'react-bootstrap';

const LoadingBlogCard = () => {
  return (
    <div className="blog-card">
      <div className="blog-card__image">
        <Placeholder animation="glow">
          <Placeholder xs={12} />
        </Placeholder>
      </div>
      <div className="blog-card__content">
        <div className="blog-card__title my-4">
          <Placeholder animation="glow">
            <Placeholder xs={12} />
            <Placeholder xs={12} />
          </Placeholder>
        </div>
        <hr />
        <div>
          <Placeholder animation="glow">
            <Placeholder xs={3} size="sm" />{' '}
            <Placeholder className="ms-3" xs={3} size="sm" />{' '}
            <Placeholder className="ms-3" xs={3} size="sm" />
          </Placeholder>
        </div>
      </div>
    </div>
  );
};

export default LoadingBlogCard;
