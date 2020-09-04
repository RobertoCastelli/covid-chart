import React from "react";
import headerImage from "../images/header-image.jpg";

const Header = () => {
  return (
    <header>
      <img src={headerImage} alt="header-img" />
      <p>always keep track</p>
      <p>last update</p>
    </header>
  );
};

export default Header;
