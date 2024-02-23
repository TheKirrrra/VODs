import React, { useEffect, useState } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { fetchLatestVideos } from "/AIT/Frontend/Project/my-react-app/vite-project/src/components/Youtube/YoutubeApi";
import styles from "./LECVideos.module.css";

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
      <h2 className={styles.centeredHeader}>LEC/LCS Videos</h2>
      <div className={styles.videoGrid}>
        {videoIds.map((videoId) => (
          <div key={videoId} className={styles.videoContainer}>
            <VideoPlayer videoId={videoId} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LECVideos;