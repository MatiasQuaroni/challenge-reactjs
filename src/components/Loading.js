import React from "react";

const Loading = () => {
  return (
    <>
      <div class="page-loader">
        <span class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </span>
      </div>
    </>
  );
};

export default Loading;
