import React from "react";
import styles from "./Card.module.css"

const Card = ({movie,imgUrl}) => {
  return (
    <li key={movie.id}>
      <img src={imgUrl} alt={movie.title} />
      <button onClick={() => window.open(movie.trailerUrl)}>
        Play Trailer
      </button>
    </li>
  );
};

export default Card;
