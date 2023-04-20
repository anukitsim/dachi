import "./broken-city.styles.css";
import brokenImg1 from "../../imgs/brokenCity1.jpg";
import brokenImg3 from "../../imgs/brokenCity3.png";
import brokenImg2 from "../../imgs/brokenCity2.png";
import brokenImg4 from "../../imgs/brokenCity4.png";

const BrokenCity = () => {
  return (
    <div className="broken-city-container">
      <div className="text1">
        <h1 className="broken-city-header">Knife In The Back</h1>
        <p className="text1-subtext">
          Objects built from the parts found in the ruins of my childhood house
          a collapsed building in my hometown of Batumi. The catastrophical fail
          in the buildings base caused an immediate crash of a 7 floor apartment
          building, nine people, including three children, have been found dead
          in the wreckage. This incident was caused by the ceaselessness of a
          construction worker and their boss.
        </p>
      </div>
      <div className="brokenimg1-container">
        <img src={brokenImg1} alt="brokenimg1" className="brokenimg1" />
      </div>
      <div className="text2">
        <h1 className="broken-city-header2">
          Good Building Leave Beautiful Ruins
        </h1>
        <p className="text2-subtext">
          The modern jungle is teeming with signs of life, from broken apartment
          buildings to bridges and fountains. Personally, I believe that
          preserving old buildings is crucial to our culture. In the ruins of
          the city, one can glean more insight than from a new constitution.
          Therefore, it’s essential to find a way to combine old and new
          structures in a symbiotic merger, much like new skyscrapers standing
          alongside historic buildings in cities. By finding cracks in the
          public areas and filling the with forms made from recycled plastic,
          modelled with calculations of a fungi growth to blend with the ruin,
          filled with moss spores and chia seeds
        </p>
        <img src={brokenImg3} alt="brojenimg3" className="brokenimg3" />
        <img src={brokenImg2} alt="brojenimg2" className="brokenimg2" />
      </div>
      <div className="text3">
        <h1 className="broken-city-header3">Barbed Wirek</h1>
        <p className="text3-subtext">
          Quote of the Georgian people "20% of my land is occupied by Russia"
          was initially the truth, but slowly we realised that 20% is only the
          beginning. In 2008, after occupying two Georgian territories of
          Abkhazia and South Ossetia, the occupiers erected a barbed wire along
          the border, guarded by the Russian armed forces. What started as a
          barrier between Georgia and cccupied territorie, slowly turned into a
          creeping invasion. Day by day step by step Russia is moving the
          border, every new morning people who yesterday lived on our side of
          the border wake up on the other side with their families. And there is
          no way out. The quote may have been true at the time, but I believe
          that now, 14 years later, 20% has become an illusion. Chairs made by
          remelting barbed wire, with a small amount of georgian wine left
          inside of the body. Just like corrosion on steel, which spreads
          through the metal and slowly rusts it away, this process will not stop
          in Georgia until the whole chair colapses.
        </p>
      </div>
      <div className="bottom-img-container">
        <img src={brokenImg4} alt="brojenimg4" className="brojenimg4" />
      </div>
    </div>
  );
};

export default BrokenCity;

