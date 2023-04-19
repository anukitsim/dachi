import { useState } from 'react';

import './insasive-modification.styles.css';
import img1 from '../../imgs/1.jpg';
import cardImage4 from '../../imgs/card4.png';
import ReactPlayer from "react-player";
import cardImage1 from '../../imgs/card1.jpg';
import cardImage2 from '../../imgs/card2.jpg';
import cardImage3 from '../../imgs/card3.jpg';


const InsasiveModification = () => {
    const [currentImage, setCurrentImage] = useState(cardImage1);

    const handleClick = () => {
        // define an array of images in the desired order
        const images = [cardImage1, cardImage2, cardImage3, cardImage4];
        // find the index of the current image in the array
        const currentIndex = images.indexOf(currentImage);
        // set the current image to the next one in the array, or the first one if it's the last image
        setCurrentImage(images[(currentIndex + 1) % images.length]);
      };


  return (
    <div className='insasiveModification-container'>
      <h2 className='insasiveModification-header'>Set Design for the Georgian footwear brand Invasive Modifications</h2>
      <div className="img-container">
        <div className="img-wrapper">
          <img src={img1} alt="img1" className="img1" />
          <h2 className="video-text">Translating the language at the core of the brands world through artefacts within the current realm</h2>
          <ReactPlayer
  url="https://vimeo.com/818864881"
  className="insasiveModification-video"
  playing
  muted
  controls={['play', 'pause']}
  width="650px"
  height="400px"
  volume={0}
/>
<img src={currentImage} alt="img1" className="card-images" onClick={handleClick} />
<div className="card-text">
  <div className="line-container">
    <div className="name">Photography:</div>
    <div className="category">
      Giorgi Nakashidze<br/>
      Ika Khargelia<br/>
      Luka Pantskhava
    </div>
  </div>
  <div className="line-container">
    <div className="name">Prop Assistant:</div>
    <div className="category">
      Polina Zhuravkova
    </div>
  </div>
  <div className="line-container">
    <div className="name">Invasive Modification:</div>
    <div className="category">
      Nicolas Grigorian<br/>
      Nina Ivanovna
    </div>
  </div>
</div>



        </div>
      </div>
    </div>
  )
};

export default InsasiveModification;
