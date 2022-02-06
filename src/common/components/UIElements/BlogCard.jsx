import React from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

import { AiFillLike, BsEyeFill, BiTimeFive } from 'react-icons/all';

import './BlogCard.scss';

const BlogCard = (props) => {
  const splitTextHandler = (text) => {
    if (text.length > 50) {
      return text.substring(0, 50) + '...';
    }

    return text;
  };
  return (
    <div className="blog-card" onClick={props.onClick}>
      <div className="blog-card__image">
        <img src={props.imgUrl} alt={props.title} loading="lazy" />
      </div>
      <div className="blog-card__content">
        <p className="blog-card__date">
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>Published At</Tooltip>}
          >
            <span>{props.published_at.split('T')[0]}</span>
          </OverlayTrigger>
        </p>
        <div className="blog-card__title my-4">
          <h6>{splitTextHandler(props.title || 0)}</h6>
        </div>
        <hr />
        <div className="blog-card__stats">
          <div>
            <OverlayTrigger placement="top" overlay={<Tooltip>Views</Tooltip>}>
              <span className="blog-card__stats__views">
                <BsEyeFill /> {props.views}
              </span>
            </OverlayTrigger>
          </div>
          <div>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Impressions</Tooltip>}
            >
              <span className="blog-card__stats__likes">
                <AiFillLike /> {props.likes}
              </span>
            </OverlayTrigger>
          </div>
          <div>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Read Time</Tooltip>}
            >
              <span className="blog-card__stats__read-time">
                <BiTimeFive /> {props.readTime} min
              </span>
            </OverlayTrigger>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
