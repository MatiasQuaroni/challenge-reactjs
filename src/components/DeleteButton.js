import React from "react";

const DeleteButton = (id) => {
  function deleteCharacter(charId) {
    console.log(charId.name);
  }

  return (
    <>
      <button onClick={() => deleteCharacter(id)}>Delete</button>
    </>
  );
};

export default DeleteButton;
