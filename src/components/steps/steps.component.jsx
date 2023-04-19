import ReactPlayer from "react-player";
import "./steps.styles.css";

const Steps = () => {
  return (
    <div className="steps-container">
      <ReactPlayer
        url="https://vimeo.com/818803846"
        className="video-steps"
        controls
        volume={1}
        width="85vw"
        height="45vw"
      />
      <div className="caption-container">
      <p className="steps-caption1">Animated and Produced for</p>
      <p className="steps-caption2"><a className="music-link" href="https://www.youtube.com/watch?v=lBEGDRO8N2g">Steps ft. MNEK & Saul Williams</a></p>
      </div>
     
    </div>
  );
};

export default Steps;
