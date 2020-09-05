import React, { useState, useEffect } from "react";
import { fetchData } from "../fetchData";

const Countries = ({ countryChange }) => {
  //--> State
  const [fetchedCountries, setFetchedCountries] = useState(null);

  //--> URLs
  const url = "https://covid19.mathdro.id/api/countries";

  //--> Fetch countries data
  useEffect(() => {
    const fetchDataTemp = async () => {
      //--> Deconstructoring data in fetch function (took time to figure this out)
      const { countries } = await fetchData(url);
      setFetchedCountries(countries);
    };
    fetchDataTemp();
  }, []);

  //--> Show empty string while fetching data
  if (fetchedCountries === null) {
    return <div></div>;
  }

  //--> Render
  return (
    <div>
      <select onChange={(e) => countryChange(e.target.value)}>
        <option value="global">Global</option>
        {fetchedCountries.map((country, id) => {
          return (
            <option key={id} value={country.name}>
              {country.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Countries;
