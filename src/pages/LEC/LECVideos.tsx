import React, { useEffect, useState } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { fetchLatestVideos } from "/AIT/Frontend/Project/my-react-app/vite-project/src/components/Youtube/YoutubeApi";

const LECVideos: React.FC = () => {
  const [videoIds, setVideoIds] = useState<string[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const channelId = "UCvqRdlKsE5Q8mf8YXbdIJLw"; 
      const latestVideos = await fetchLatestVideos(channelId);
      setVideoIds(latestVideos);
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <h2>LEC/LCS Videos</h2>
      <div>
        {videoIds.map((videoId) => (
          <VideoPlayer key={videoId} videoId={videoId} />
        ))}
      </div>
    </div>
  );
};

export default LECVideos;
