import classNames from "classnames";
import React, { useState } from "react";
import Arrow from "./arrow";
import "./style.scss";

const slideData = [
  {
    index: 0,
    headline: "New Fashion Apparel",
    button: "Shop now",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg",
  },
  {
    index: 1,
    headline: "In The Wilderness",
    button: "Book travel",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg",
  },
  {
    index: 2,
    headline: "For Your Current Mood",
    button: "Listen",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg",
  },
  {
    index: 3,
    headline: "Focus On The Writing",
    button: "Get Focused",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg",
  },
];

const ImageContainer = ({
  data,
  className,
  handleMouseHover,
  handleMouseLeave,
}) => {
  return (
    <div className={classNames("imageContainer", className)}>
      <img
        src={data.src}
        alt={data.headline}
        className="imageContainer__img"
        onMouseMove={handleMouseHover}
        onMouseLeave={handleMouseLeave}
      />
      <div className="imageContainer__imageContent">
        <h1 className="imageContainer__imageContent__title">{data.headline}</h1>
        <button className="imageContainer__imageContent__button">
          {data.button}
        </button>
      </div>
    </div>
  );
};

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const handleArrowRightClick = () => {
    if (currentSlide < slideData.length) {
      var obj = document.getElementById("slider");
      obj.style.setProperty(
        "transform",
        `translateX(-${currentSlide * (100 / slideData.length)}%)`
      );

      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleArrowLeftClick = () => {
    if (currentSlide <= slideData.length && currentSlide > 1) {
      var obj = document.getElementById("slider");
      obj.style.setProperty(
        "transform",
        `translateX(-${(currentSlide - 2) * (100 / slideData.length)}%)`
      );
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleMouseHover = (event) => {
    const currentSlide = document.querySelector(
      ".imageContainer__current > .imageContainer__img"
    );

    const rect1 = currentSlide.getBoundingClientRect();

    currentSlide.style.setProperty(
      "--x",
      `${(event.clientX - (rect1.x + Math.floor(rect1.width / 2))) / 20}px`
    );

    currentSlide.style.setProperty(
      "--y",
      `${(event.clientY - (rect1.y + Math.floor(rect1.height / 2))) / 20}px`
    );
  };

  const handleMouseLeave = () => {
    const currentSlide = document.querySelector(
      ".imageContainer__current > .imageContainer__img"
    );
    currentSlide.style.setProperty("--x", 0);
    currentSlide.style.setProperty("--y", 0);
  };

  return (
    <div className="slider">
      <div className="slider__container" id="slider">
        {slideData.map((slide, index) => {
          return (
            <ImageContainer
              data={slide}
              className={classNames({
                imageContainer__current: currentSlide === index + 1,
              })}
              handleMouseHover={handleMouseHover}
              handleMouseLeave={handleMouseLeave}
            />
          );
        })}
      </div>
      <Arrow
        handleArrowRightClick={handleArrowRightClick}
        handleArrowLeftClick={handleArrowLeftClick}
      />
    </div>
  );
};

export default Slider;
