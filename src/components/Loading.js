import React from "react";

const Loading = () => {
  return (
    <div className="container-sm p-3 my-3 bg-dark text-white">
      <div>
        <img src={require("../assets/science.png")} alt="Loading..."></img>
      </div>
      <div class="spinner-border" role="status">
        <span class="sr-only"></span>
      </div>
    </div>
  );
};

export default Loading;
