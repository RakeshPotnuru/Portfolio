import React, { useEffect, useState } from 'react';
import {
  Col,
  Row,
  Spinner,
  OverlayTrigger,
  Tooltip,
  Stack
} from 'react-bootstrap';
import { FaTwitter, FaMedium, FaLinkedin, FaGithub } from 'react-icons/all';
import { Link } from 'react-router-dom';

import useHttpClient from '../../hooks/http-hook';
import './Footer.scss';

const Footer = () => {
  const [visits, setVisits] = useState(0);
  const { isLoading, error, sendRequest } = useHttpClient();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          `https://api.countapi.xyz/hit/itsrakesh.co/${process.env.REACT_APP_COUNTAPI_KEY}`
        );
        setVisits(responseData.value);
      } catch (err) {}
    };
    fetchData();
  }, [sendRequest]);

  return (
    <div id="footer">
      <footer>
        <Row>
          <Col sm>
            <h1>Let's Connect</h1>
            <h6>
              Visits:{' '}
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Times Viewed</Tooltip>}
              >
                <span className="visits">
                  {isLoading ? <Spinner animation="grow" size="sm" /> : visits}
                  {error && <span>{error}</span>}
                </span>
              </OverlayTrigger>
            </h6>
          </Col>
          <Col className="p-2" sm>
            <Link to="/profiles/twitter">
              <FaTwitter className="social-icon" />
            </Link>
            <Link to="/profiles/github">
              <FaGithub className="social-icon" />
            </Link>
            <Link to="/profiles/medium">
              <FaMedium className="social-icon" />
            </Link>
            <Link to="/profiles/linkedin">
              <FaLinkedin className="social-icon" />
            </Link>
          </Col>
        </Row>
        <span className="divider"></span>
        <Row className="extras">
          <Col sm>
            <Stack>
              <a
                href="https://forms.gle/2mtF1kybEQQQVrRdA"
                target="_blank"
                rel="noreferrer noopener"
              >
                Report
              </a>
              <a
                href="https://forms.gle/PbcqrhTEWQtKxE6g7"
                target="_blank"
                rel="noreferrer noopener"
              >
                Feedback
              </a>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </Stack>
          </Col>
          {/* <Col sm>
            <Link to="/stats">Stats</Link>
          </Col> */}
        </Row>
      </footer>
      <Stack className="copyright" direction="horizontal" gap={5}>
        <p>
          {' '}
          &copy; {new Date().getFullYear()} itsrakesh. All rights reserved.
        </p>
        <p className="ms-auto">Made with 💖 by Me!</p>
        <p>v1.1.0</p>
      </Stack>
    </div>
  );
};

export default Footer;
