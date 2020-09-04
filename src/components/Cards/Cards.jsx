import React, { useState, useEffect } from "react";
import { FaSkullCrossbones } from "react-icons/fa";
import { RiMentalHealthLine } from "react-icons/ri";
import { RiVirusFill } from "react-icons/ri";
import { fetchData } from "../fetchData";
import CountUp from "react-countup";

const Cards = () => {
  //--> States
  const [fetchedData, setFetchedData] = useState(null);

  //--> URLs
  const url = "https://covid19.mathdro.id/api";

  //--> Fetch main data
  useEffect(() => {
    const fetchDataTemp = async () => {
      const data = await fetchData(url);
      setFetchedData(data);
    };
    fetchDataTemp();
  }, []);

  //--> Show Loading... while fetching data
  if (fetchedData === null) {
    return <h3 className="loading">Loading...</h3>;
  }

  //--> Destructuring data
  const { confirmed, deaths, recovered } = fetchedData;

  //--> Render
  return (
    <div>
      <ul>
        <li className="confirmed-wrapper">
          <div>
            <RiVirusFill size={20} />
          </div>
          <h4>CONFIRMED</h4>
          <CountUp
            start={0}
            end={confirmed.value}
            duration={2}
            separator={","}
          />
        </li>

        <li className="deaths-wrapper">
          <div>
            <FaSkullCrossbones size={20} />
          </div>
          <h4>DEATHS</h4>
          <CountUp start={0} end={deaths.value} duration={2} separator={","} />
        </li>

        <li className="recovered-wrapper">
          <div>
            <RiMentalHealthLine size={20} />
          </div>
          <h4>RECOVERED</h4>
          <CountUp
            start={0}
            end={recovered.value}
            duration={2}
            separator={","}
          />
        </li>
      </ul>
    </div>
  );
};

export default Cards;
