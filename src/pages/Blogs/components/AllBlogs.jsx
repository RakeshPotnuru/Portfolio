import React, { useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import anime from 'animejs';

import {
  BlogCard,
  CustomButton,
  ErrorModal
} from '../../../common/components/UIElements';
import {
  LoadingBlogCard,
  LoadingBlogPreview
} from '../../../common/components/UIElements/loadingAnimations';
import { BlogPreview } from './';
import './AllBlogs.scss';

const AllBlogs = (props) => {
  const [previewBlog, setPreviewBlog] = useState({
    imgUrl: '',
    title: '',
    description: '',
    blogUrl: '',
    devUrl: '',
    mediumUrl: ''
  });

  var scrollTrigger = () => {
    var y = window.scrollY;

    var navWrap = document.getElementById('blog-preview');

    if (navWrap) {
      navWrap = navWrap.offsetTop;
    } else {
      return;
    }

    if (y > navWrap) {
      document.getElementById('blog-preview').classList.add('sticky');
      document.getElementsByClassName('all-blogs')[0].style.marginTop = '30%';
    } else {
      document.getElementById('blog-preview').classList.remove('sticky');
      document.getElementsByClassName('all-blogs')[0].style.marginTop = '5%';
    }
  };

  window.addEventListener('scroll', scrollTrigger);

  const previewBlogHandler = (
    cover_image,
    title,
    description,
    canonical_url,
    url,
    slug
  ) => {
    setPreviewBlog({
      imgUrl: cover_image,
      title: title,
      description: description,
      blogUrl: canonical_url,
      devUrl: url,
      mediumUrl: slug
    });

    anime({
      targets: '.blog-preview',
      duration: 500,
      easing: 'easeInOutQuad',
      opacity: [0, 1]
    });
  };

  const loadMoreHandler = (e) => {
    props.loadMore();
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <ErrorModal show={props.show} error={props.error} />
      <div id="blog-preview" className="blog-preview">
        {props.isLoading && <LoadingBlogPreview />}
        {props.blogs && (
          <BlogPreview
            imgUrl={previewBlog.imgUrl || props.blogs[0]?.cover_image}
            title={previewBlog.title || props.blogs[0]?.title}
            description={previewBlog.description || props.blogs[0]?.description}
            blogUrl={previewBlog.blogUrl || props.blogs[0]?.canonical_url}
            devUrl={previewBlog.devUrl || props.blogs[0]?.url}
          />
        )}
      </div>
      <Container>
        <div className="all-blogs">
          <div className="all-blogs__container">
            {props.blogs && (
              <Row>
                {props.blogs.map((blog, i) => {
                  return (
                    <Col lg={4} md={6} sm={6} key={i}>
                      <BlogCard
                        title={blog.title}
                        likes={blog.public_reactions_count}
                        views={blog.page_views_count}
                        readTime={blog.reading_time_minutes}
                        imgUrl={blog.cover_image}
                        published_at={blog.published_at}
                        onClick={() =>
                          previewBlogHandler(
                            blog.cover_image,
                            blog.title,
                            blog.description,
                            blog.canonical_url,
                            blog.url,
                            blog.slug
                          )
                        }
                      />
                    </Col>
                  );
                })}
              </Row>
            )}
            {props.isLoading && (
              <Row>
                {[...Array(6)].map((_, i) => (
                  <Col lg={4} md={6} sm={6} key={i}>
                    <LoadingBlogCard />
                  </Col>
                ))}
              </Row>
            )}
          </div>
          <div className="all-blogs__load-more mt-5">
            <CustomButton
              variant="primary"
              disabled={props.isLoading}
              onClick={loadMoreHandler}
            >
              {props.isLoading ? (
                <>
                  Loading{' '}
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                </>
              ) : (
                'Load More'
              )}
            </CustomButton>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default AllBlogs;
