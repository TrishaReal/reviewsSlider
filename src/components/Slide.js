import React from "react";
import startCreator from "../utils/starCreator";

const Slide = ({ autore, recensione, voto, classes }) => {
  return (
    <article className={`slide ${classes}`}>
      <div className="review">
        <h4>{autore}</h4>
        <p>{recensione}</p>
        <div className="star-container">{startCreator(voto)}</div>
      </div>
    </article>
  );
};

export default Slide;
