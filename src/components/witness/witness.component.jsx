import "./witness.styles.css";
import ReactPlayer from "react-player";

const Witness = () => {
  return (
    <div className="witness-container">
      <div className="witness-texts">
        <p className="witness-text1">
          The Louvre has invited twenty young creative figures to present their
          take on the museum in the form of a 3:30 min film. The “Louvre Looks”
          initiative brings together creatives under forty.
        </p>
        <p className="witness-text2">
          In collaboration with artist Mykki Blanco, within the perimeter of
          this legendary institution, we have put together a volume that speaks
          of nostalgia, time, and the human relationship with the concept of
          infinity. It incarnates the upper bourgeoisie, but also the Revolution
          and radical change. It is a space of power and contradiction, with a
          magic sparked by the many forms of cultural and political cohesion or
          misalignment.
        </p>
      </div>
      <div className="video-container">
        <ReactPlayer
          url="https://vimeo.com/804685785"
          className="video"
          controls
          volume={1}
          width="85vw"
          height="45vw"
        />
        <p className="video-caption">Le Témoin / The Witness</p>
        <p className="video-caption2">© Mykki Blanco et Dachi-Giorgi Garuchava</p>
      </div>
    </div>
  );
};

export default Witness;
