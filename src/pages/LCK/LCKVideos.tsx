import React, { useEffect, useState } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { fetchLatestVideos } from "/AIT/Frontend/Project/my-react-app/vite-project/src/components/Youtube/YoutubeApi";

const LCKVideos: React.FC = () => {
  const [allVideos, setAllVideos] = useState<string[]>([]);
  const [highlightVideos, setHighlightVideos] = useState<string[]>([]);
  const [selectedTab, setSelectedTab] = useState<'All' | 'Highlights'>('All');

  useEffect(() => {
    const fetchVideos = async () => {
      const channelId = "UCKVlixycWmapnGQ_wht4cHQ"; 
      const latestVideos = await fetchLatestVideos(channelId);
      setAllVideos(latestVideos);
      setHighlightVideos(latestVideos.filter(videoId => videoId.includes('Highlight')));
    };

    fetchVideos();
  }, []);

  const handleTabChange = (tab: 'All' | 'Highlights') => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <h2>LCK Videos</h2>
      <div>
        <button onClick={() => handleTabChange('All')}>All</button>
        <button onClick={() => handleTabChange('Highlights')}>Highlights</button>
      </div>
      <div>
        {(selectedTab === 'All' ? allVideos : highlightVideos).map((videoId) => (
          <VideoPlayer key={videoId} videoId={videoId} />
        ))}
      </div>
    </div>
  );
};

export default LCKVideos;