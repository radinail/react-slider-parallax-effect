import React from "react";
import "./style.scss";

const Arrow = ({ handleArrowRightClick, handleArrowLeftClick }) => {
  return (
    <div className="arrowContainer">
      <button className="arrow left" onClick={handleArrowLeftClick}>
        <svg width="60px" height="80px" viewBox="0 0 50 80" xmlSpace="preserve">
          <polyline
            fill="none"
            stroke="black"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            points="
	45.63,75.8 0.375,38.087 45.63,0.375 "
          />
        </svg>
      </button>
      <button className="arrow right" onClick={handleArrowRightClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="60px"
          height="80px"
          viewBox="0 0 50 80"
          xmlSpace="preserve"
          fill="black"
        >
          <polyline
            fill="none"
            stroke="black"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            points="
	0.375,0.375 45.63,38.087 0.375,75.8 "
          />
        </svg>
      </button>
    </div>
  );
};

export default Arrow;
