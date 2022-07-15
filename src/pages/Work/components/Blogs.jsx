import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import {
  BlogCard,
  CustomButton,
  ErrorModal
} from '../../../common/components/UIElements';
import { LoadingBlogCard } from '../../../common/components/UIElements/loadingAnimations';

import './Blogs.scss';

const Blogs = (props) => {
  return (
    <>
      <ErrorModal show={props.show} error={props.error} />

      <Container>
        <div className="blogs">
          <div className="blogs__header">
            <h1>Blogs</h1>
            <Link to="/blogs">
              <CustomButton>
                See All Blogs <BsArrowRight />
              </CustomButton>
            </Link>
          </div>
        </div>
        <div className="blogs__container">
          <Row>
            {!props.isLoading &&
              props.blogs &&
              props.blogs.slice(0, 3).map((blog, i) => {
                return (
                  <Col key={i} className="mt-5" sm={6} md={4}>
                    <BlogCard
                      title={blog.title}
                      likes={blog.public_reactions_count}
                      views={blog.page_views_count}
                      readTime={blog.reading_time_minutes}
                      imgUrl={blog.cover_image}
                      published_at={blog.published_at}
                    />
                  </Col>
                );
              })}
            {props.isLoading && (
              <Row>
                {[...Array(3)].map((_, i) => (
                  <Col sm={6} md={4} key={i}>
                    <LoadingBlogCard />
                  </Col>
                ))}
              </Row>
            )}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Blogs;
