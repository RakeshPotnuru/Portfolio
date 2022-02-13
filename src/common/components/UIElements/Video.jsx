import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

import useHttpClient from '../../hooks/http-hook';
import './Video.scss';

const Video = (props) => {
  const { isLoading, error, sendRequest } = useHttpClient();
  const [videoId, setVideoId] = useState('');

  useEffect(() => {
    if (!error) {
      function createIframe(div) {
        var iframe = document.createElement('iframe');
        iframe.setAttribute(
          'src',
          'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0'
        );
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowfullscreen', '1');
        iframe.setAttribute(
          'allow',
          'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        );
        div.parentNode.replaceChild(iframe, div);
      }

      var playerElements = document.getElementsByClassName('youtube-player');
      for (var n = 0; n < playerElements.length; n++) {
        var div = document.createElement('div');
        div.setAttribute('data-id', videoId);
        var thumbNode = document.createElement('img');

        thumbNode.src = videoId
          ? '//i.ytimg.com/vi/ID/hqdefault.jpg'.replace('ID', videoId)
          : '//ik.imagekit.io/itsrakesh/Portfolio/Misc/no_video_qewh2eY8Z.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644752640643';

        div.appendChild(thumbNode);

        var playButton = document.createElement('div');
        playButton.setAttribute('class', 'play');
        div.appendChild(playButton);

        if (videoId) {
          div.onclick = function () {
            createIframe(this);
          };
        }

        playerElements[n].appendChild(div);
      }
    }
  }, [videoId, error]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/project/projects/video/${props.repoName}`
        );
        setVideoId(responseData);
      } catch (err) {}
    };
    fetchData();
  }, [sendRequest, props.repoName]);

  return (
    <div className="youtube-player" data-id={videoId}>
      {isLoading && <Spinner animation="border" />}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Video;
