import { useState, useRef } from 'react';
import './insasive-modification.styles.css';
import img1 from '../../imgs/1.jpg';
// import cardImage4 from '../../imgs/card4.png';
import ReactPlayer from 'react-player';
import cardImage1 from '../../imgs/card1.jpg';
import cardImage2 from '../../imgs/card2.jpg';
import cardImage3 from '../../imgs/card3.jpg';

const InsasiveModification = () => {
  const [currentImage, setCurrentImage] = useState(cardImage1);
  const [isPlaying, setIsPlaying] = useState(true);
  const playerRef = useRef(null);

  const handleClick = () => {
    const images = [cardImage1, cardImage2, cardImage3];
    const currentIndex = images.indexOf(currentImage);
    setCurrentImage(images[(currentIndex + 1) % images.length]);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleVideoClick = () => {
    if (isPlaying) {
      playerRef.current.getInternalPlayer().pause();
      setIsPlaying(false);
    } else {
      playerRef.current.getInternalPlayer().play();
      setIsPlaying(true);
    }
  };

  return (
    <div className='insasiveModification-container'>
      <h2 className='insasiveModification-header'>
        Set Design for the Georgian footwear brand Invasive Modifications
      </h2>
      <div className='img-container'>
        <div className='img-wrapper'>
          <img src={img1} alt='img1' className='img1' />
          <h2 className='video-text'>
            Translating the language at the core of the brands world through
            artefacts within the current realm
          </h2>
          <ReactPlayer
            ref={playerRef}
            url='https://vimeo.com/818864881'
            className='insasiveModification-video'
            controls={false}
            volume={0}
            onPlay={handlePlay}
            onPause={handlePause}
            playing={isPlaying}
            loop={true}
            onClick={handleVideoClick}
          />
          <img
            src={currentImage}
            alt='img1'
            className='card-images'
            onClick={handleClick}
          />
          <div className='card-text'>
            <div className='line-container'>
              <div className='name'>Photography:</div>
              <div className='category'>
                Giorgi Nakashidze<br />
                Ika Khargelia<br />
                Luka Pantskhava
              </div>
            </div>
            <div className='line-container'>
              <div className='name'>Prop Assistant:</div>
              <div className='category'>Polina Zhuravkova</div>
            </div>
            <div className='line-container'>
              <div className='name'>Invasive Modification:</div>
              <div className='category'>
                Nicolas Grigorian<br />
                Nina Ivanovna
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsasiveModification;
