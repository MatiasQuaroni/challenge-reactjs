import React from "react";
import Icon from "../assets/deathStar.png";

const Character = ({ name, gender, height }) => {
  return (
    <div class="card-body" style={{ paddingBottom: 0 }}>
      <div class="card-icon">
        <img class="img-fluid" src={Icon} />

        <h3 class="card-title">{name}</h3>
      </div>
      <p class="card-text ">
        <span class="fw-bold">Gender: </span> {gender}
      </p>
      <p class="card-text">
        <span class="fw-bold">Height: </span> {height} cm
      </p>
    </div>
  );
};

export default Character;
