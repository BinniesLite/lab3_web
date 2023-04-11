import './VideoPlayer.scss'

interface VideoPlayerProps {
  embedId: string;
}

const VideoPlayer = ({ embedId }: VideoPlayerProps) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}?autoplay=1&rel=0&loop=1`}
     
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      
      loop // makes the video play in an infinite loop
    />
  </div>
);

export default VideoPlayer;
