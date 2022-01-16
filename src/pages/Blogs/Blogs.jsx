import React, { useState, useEffect } from 'react';
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
    <React.Fragment>
      <AllBlogs
        blogs={blogs}
        isLoading={isLoading}
        error={error}
        loadMore={loadMore}
        show={show}
      />
      <BackToTop />
    </React.Fragment>
  );
};

export default Blogs;
