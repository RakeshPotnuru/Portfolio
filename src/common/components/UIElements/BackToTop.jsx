import React, { useState, useEffect } from 'react';

import { BsFillArrowUpCircleFill } from 'react-icons/all';

import './BackToTop.scss';

const BackToTop = () => {
  const [showBackToTop, setshowBackToTop] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setshowBackToTop(true);
    } else {
      setshowBackToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div id="back-to-top">
      <div
        className={showBackToTop ? 'back-to-top' : 'hide-back-to-top'}
        onClick={scrollToTop}
      >
        <BsFillArrowUpCircleFill className="back-to-top__icon" />
      </div>
    </div>
  );
};

export default BackToTop;
