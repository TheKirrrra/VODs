import React, { useState, useEffect } from 'react';
import { fetchVideos } from '/AIT/Frontend/Project/my-react-app/src/components/Youtube/YoutubeApi';

const VideoList: React.FC = () => {
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    const channelId = 'UCvqRdlKsE5Q8mf8YXbdIJLw'; // LoleSportsVODs channel ID
    fetchVideos(channelId).then((data) => setVideos(data));
  }, []);

  return (
    <div>
      <h2>Videos</h2>
      <ul>
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
      </ul>
    </div>
  );
};

export default VideoList;