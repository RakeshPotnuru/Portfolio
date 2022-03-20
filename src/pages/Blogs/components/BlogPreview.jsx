import React from 'react';
import { FiExternalLink, FaMedium, FaDev } from 'react-icons/all';

import { CustomButton } from '../../../common/components/UIElements';
import './BlogPreview.scss';

const BlogPreview = (props) => {
  const splitTextHandler = (text, length) => {
    if (text.length > length) {
      return text.substring(0, length) + '...';
    }
    return text;
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(328deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 75%), url(${props.imgUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'right'
      }}
      className="blog-preview"
    >
      <div className="blog-preview__details">
        <h3 className="blog-preview__details__title">
          {splitTextHandler(props.title || 0, 40)}
        </h3>

        <p className="blog-preview__details__description">
          {splitTextHandler(props.description || 0, 150)}
        </p>

        <div className="blog-preview__details__links">
          <a href={props.blogUrl} target="_blank" rel="noopener noreferrer">
            <CustomButton>
              Read Blog <FiExternalLink />
            </CustomButton>
          </a>

          <h6 className="mt-2">Read this blog on your favourite platform:</h6>
          <div className="blog-preview__details__links__extra">
            <a
              href="https://medium.com/@itsrakesh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMedium className="icon" />
            </a>
            <a href={props.devUrl} target="_blank" rel="noopener noreferrer">
              <FaDev className="icon ms-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPreview;
