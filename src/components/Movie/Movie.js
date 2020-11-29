import React from "react";
import movieStyles from "./Movie.module.css";
import Flippy, { FrontSide, BackSide } from "react-flippy";

function Movie({ title, imageUrl, description, rating }) {
  return (
    <div className={movieStyles.movie}>
      <Flippy
        flipOnClick={true}
        flipDirection="horizontal"
        style={{ width: "100%", height: "100%" }}>
        <FrontSide
          style={{
            background: `url(${imageUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}></FrontSide>
        <BackSide className={movieStyles.back}>
          <h3 className={movieStyles.title}>{title}</h3>
          <p className={movieStyles.description}>{description}</p>
          <p className={movieStyles.rating}>
            Rating:<span className={movieStyles.ratingNumber}>{rating}</span>
          </p>
        </BackSide>
      </Flippy>
    </div>
  );
}

export default Movie;
