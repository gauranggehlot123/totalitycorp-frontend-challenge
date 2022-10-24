import React from "react";
import "./Styles/Cards.css";
import rightArrow from "../assets/Icons/angleRight.svg";
const Cards = ({
  image1,
  image2,
  title1,
  subtitle1,
  title2,
  subtitle2,
  color,
  display1,
  display2,
}) => {
  return (
    <div className="card-container">
      <section
        className="first-card"
        style={{ backgroundImage: `url(${image1})` }}
      >
        {" "}
        <div className="hero-div1" style={{ color: color, display: display1 }}>
          <h1>{title1}</h1>
          <h3>{subtitle1}</h3>
        </div>
        <div className="hero-div2" style={{ display: display1 }}>
          <div>
            <a href="/LearnMore">
              Learn More
              <img src={rightArrow} />
            </a>
          </div>
          <div>
            <a href="/OrderNow">
              Buy
              <img src={rightArrow} />
            </a>
          </div>
        </div>
      </section>
      <section
        className="second-card"
        style={{ backgroundImage: `url(${image2})` }}
      >
        {" "}
        <div className="hero-div1" style={{ color: color, display: display2 }}>
          <h1>{title2}</h1>
          <h3>{subtitle2}</h3>
        </div>
        <div className="hero-div2" style={{ display: display2 }}>
          <div>
            <a href="/LearnMore">
              Learn More
              <img src={rightArrow} />
            </a>
          </div>
          <div>
            <a href="/OrderNow">
              Buy
              <img src={rightArrow} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cards;
