import React, { useState, useEffect, Fragment } from 'react';
import { Helmet } from 'react-helmet';

import { AllBlogs } from './components';
import useHttpClient from '../../common/hooks/http-hook';
import { BackToTop } from '../../common/components/UIElements';

const Blogs = () => {
  const { isLoading, error, sendRequest, show } = useHttpClient();
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/blog/blogs/${page}`
        );
        setBlogs((blogs) => [...blogs, ...responseData]);
      } catch (err) {}
    };
    fetchData();
  }, [sendRequest, page]);

  const loadMore = () => {
    setPage((prevValue) => prevValue + 1);
    console.log(page);
  };

  return (
    <Fragment>
      <Helmet>
        <title>Blogs | itsrakesh</title>
        <meta
          name="description"
          content="I write new technical blog every week. Check them out."
        />
        <meta property="og:title" content="Rakesh's Blogs" />
        <meta
          property="og:description"
          content="I write new technical blog every week. Check them out."
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/itsrakesh/Portfolio/blogs_og_ebduz_SZN.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646652253962"
        />
        <meta property="twitter:title" content="Rakesh's Blogs" />
        <meta
          property="twitter:description"
          content="I write new technical blog every week. Check them out."
        />
        <meta
          property="twitter:image"
          content="https://ik.imagekit.io/itsrakesh/Portfolio/blogs_og_ebduz_SZN.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646652253962"
        />
      </Helmet>
      <AllBlogs
        blogs={blogs}
        isLoading={isLoading}
        error={error}
        loadMore={loadMore}
        show={show}
      />
      <BackToTop />
    </Fragment>
  );
};

export default Blogs;
