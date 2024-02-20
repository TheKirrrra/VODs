// PrimeLeagueVideos.tsx
import React, { useEffect, useState } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { fetchLatestVideos } from "/AIT/Frontend/Project/my-react-app/vite-project/src/components/Youtube/YoutubeApi";

const PrimeLeagueVideos: React.FC = () => {
  const [videoIds, setVideoIds] = useState<string[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const channelId = "UCK9Pud2SOgwmpKNjVwxiZiQ";
      const latestVideos = await fetchLatestVideos(channelId);
      setVideoIds(latestVideos);
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <h2>Prime League Videos</h2>
      <div>
        {videoIds.map((videoId) => (
          <VideoPlayer key={videoId} videoId={videoId} />
        ))}
      </div>
    </div>
  );
};

export default PrimeLeagueVideos;
