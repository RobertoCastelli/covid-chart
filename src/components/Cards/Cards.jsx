import React from "react";
import CountUp from "react-countup";
import { FaSkullCrossbones } from "react-icons/fa";
import { RiMentalHealthLine } from "react-icons/ri";
import { RiVirusFill } from "react-icons/ri";

const Cards = ({ data }) => {
  //--> Show Loading... while fetching data
  if (data === null) {
    return <h3 className="loading">Loading...</h3>;
  }
  const { confirmed, deaths, recovered } = data;

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
