import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

import './CampaignBanner.scss';

const CampaignBanner = () => {
  return (
    <div className="banner">
      <p>
        Vote for me in Noonies awards{' '}
        <a
          href="https://twitter.com/rakesh_at_tweet/status/1560186559583768576?s=20&t=P-0EAakpBxxEZ6IOX8tDgA"
          target="_blank"
          rel="noreferrer noopener"
        >
          Click Here <AiOutlineArrowRight />
        </a>
      </p>
    </div>
  );
};

export default CampaignBanner;
