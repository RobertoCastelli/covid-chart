import React from "react";
import headerImage from "../images/header-image.jpg";

const Header = ({ data }) => {
  //--> Show empty string while fetching data
  if (data === null) {
    return <div></div>;
  }
  const { lastUpdate } = data;

  return (
    <header>
      <img className="header-image" src={headerImage} alt="header-img" />
      <p>always keep track</p>
      <p>last update {new Date(lastUpdate).toDateString()}</p>
    </header>
  );
};

export default Header;
