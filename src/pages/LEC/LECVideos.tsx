import React, { useState, useEffect } from 'react';
import { fetchVideos, searchVideos } from '/AIT/Frontend/Project/my-react-app/src/components/Youtube/YoutubeApi';

const LECVideos: React.FC = () => {
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    const channelId = 'lolesportsvods';
    fetchVideos(channelId).then((data) => setVideos(data));
  }, []);

  return (
    <div>
      <h2>LEC Videos</h2>
      <div>
        {videos.map((video) => (
          <li key={video.id.videoId}>
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {video.snippet.title}
            </a>
          </li>
        ))}
      </div>
    </div>
  );
};

export default LECVideos;
