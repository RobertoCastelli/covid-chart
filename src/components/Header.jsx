import React, { useState, useEffect } from "react";
import headerImage from "../images/header-image.jpg";
import { fetchData } from "./fetchData";

const Header = () => {
  //--> States
  const [fetchedTodaysDate, setFetchedTodaysDate] = useState(null);

  //--> URLs
  const url = "https://covid19.mathdro.id/api";

  //--> Fetch last update data
  useEffect(() => {
    const fetchDataTemp = async () => {
      const data = await fetchData(url);
      setFetchedTodaysDate(data);
    };
    fetchDataTemp();
  }, []);

  //--> Show empty string while fetching data
  if (fetchedTodaysDate === null) {
    return <div></div>;
  }

  //--> Destructuring data
  const { lastUpdate } = fetchedTodaysDate;

  //--> Render
  return (
    <header>
      <img className="header-image" src={headerImage} alt="header-img" />
      <p>always keep track</p>
      <p>last update {new Date(lastUpdate).toDateString()}</p>
    </header>
  );
};

export default Header;
