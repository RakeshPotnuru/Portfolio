import React from 'react';
// import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import './CampaignBanner.scss';

const CampaignBanner = () => {
  return (
    <div className="banner">
      <p>
        Support Publish Studio on {' '}
        <Link to="https://pbst.link/ph">Product Hunt</Link>
{/*         <Link to="/contact">
          Contact me <AiOutlineArrowRight />
        </Link> */}
      </p>
    </div>
  );
};

export default CampaignBanner;
