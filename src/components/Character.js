import React from "react";

const Character = ({ name, gender, height }) => {
  return (
    <div class="card text-white bg-dark" style={{ maxWidth: 18 + "rem" }}>
      <div class="card-body" style={{ marginBottom: 0 }}>
        <h3 class="card-title">{name}</h3>
        <p class="card-text">Gender: {gender}.</p>
        <p class="card-text">Height: {height} cm.</p>
      </div>
    </div>
  );
};

export default Character;
