import React, { useState, useEffect } from "react";
import "./Styles/Carousel.css";
import First from "../assets/Images/FirstImage.jpg";
import Second from "../assets/Images/SecondImage.webp";
import Third from "../assets/Images/ThirdImage.png";
import Fourth from "../assets/Images/FourthImage.jpeg";
import Fifth from "../assets/Images/FifthImage.jpg";
import Sixth from "../assets/Images/Sixth.jpg";
import leftArrow from "../assets/Icons/angleLeft.svg";
import rightArrow from "../assets/Icons/angleRight.svg";

const Carousel = () => {
  const slides = [
    { url: First, title: "iPhone-14" },
    { url: Second, title: "iPhone-14 pro" },
    { url: Third, title: "Apple Watch" },
    { url: Fourth, title: "Airpods" },
    { url: Fifth, title: "Apple Watch 8" },
    { url: Sixth, title: "Apple Watch 9" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerStyles = {
    width: "60vw",
    height: "65vh",
    margin: "0 auto",
    position: "relative",
  };

  const slideStyle = {
    backgroundImage: `url(${slides[currentIndex].url})`,
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(-15vw,-50%)",
    left: "32px",
    height: "75px",
    zIndex: "1",
    cursor: "pointer",
  };
  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(30vh,-50%)",
    right: "32px",
    height: "75px",
    zIndex: "1",
    cursor: "pointer",
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    console.log("Go-to-Next");

    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    console.log("isLastSlide", isLastSlide);
    console.log("newIndex", newIndex);
    setCurrentIndex(newIndex);
    console.log("currentIndex", currentIndex);
  };

  //   useEffect(() => {
  //     setInterval(() => {
  //       console.log("---------Called------");
  //       const isLastSlide = currentIndex === slides.length - 1;
  //       const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //       setCurrentIndex(newIndex);
  //     }, 3000);
  //   }, []);

  return (
    <div style={containerStyles}>
      <div>
        <img style={leftArrowStyles} src={leftArrow} onClick={goToPrevious} />
      </div>
      <div style={slideStyle}></div>
      <div>
        <img style={rightArrowStyles} src={rightArrow} onClick={goToNext} />
      </div>
      <div>
        {slides.map((slides, slideIndex) => {
          <div key={slideIndex}>
            <img style={leftArrowStyles} src={leftArrow} />
          </div>;
        })}
      </div>
    </div>
  );
};

export default Carousel;
