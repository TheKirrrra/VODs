import React from 'react';

interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
  return (
    <div className="video-item">
      <iframe
        className="video-iframe"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;