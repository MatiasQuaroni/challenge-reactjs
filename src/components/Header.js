import React from "react";
import Image from "../assets/darth-vader.png";

const Header = () => {
  return (
    <>
      <h1>
        <strong classname="fw-bold" style={{ color: "white" }}>
          <img
            class="img-fluid"
            style={{ width: 5 + "rem", height: +"rem", padding: 1 + "rem" }}
            src={Image}
          />
          Star War Characters
        </strong>
      </h1>
    </>
  );
};

export default Header;
