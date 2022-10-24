import React from "react";
import "./Styles/Home.css";
import rightArrow from "../assets/Icons/angleRight.svg";
const Home = ({ image, title, subtitle, justify, align, color }) => {
  return (
    <>
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${image})`,
          justifyContent: justify,
          alignItems: align,
        }}
      >
        <div className="hero-div1" style={{ color: color }}>
          <h1>{title}</h1>
          <h3>{subtitle}</h3>
          <p>Available starting from 28 Oct</p>
        </div>
        <div className="hero-div2">
          <div>
            <a href="/LearnMore">
              Learn More
              <img src={rightArrow} />
            </a>
          </div>
          <div>
            <a href="/OrderNow">
              Order Now
              <img src={rightArrow} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
