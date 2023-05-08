import React from "react";
import DeleteButton from "./DeleteButton";

const Character = ({ id, name, gender, height }) => {
  return (
    <>
      <h1>Id: {id}</h1>
      <h1>Name: {name}</h1>
      <h2>Gender: {gender}</h2>
      <h2>Height: {height} cm</h2>
      <DeleteButton name={id} />
    </>
  );
};

export default Character;
