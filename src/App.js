import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards/Cards";
import Charts from "./components/Charts/Charts";
import Countries from "./components/Countries/Countries";
import { fetchData } from "./components/fetchData";

function App() {
  //--> States
  const [fetchedData, setFetchedData] = useState(null);

  //--> URLs
  const mainUrl = "https://covid19.mathdro.id/api";

  //--> Fetch main data from https://covid19.mathdro.id/api
  useEffect(() => {
    const fetchDataTemp = async () => {
      const data = await fetchData(mainUrl);
      setFetchedData(data);
    };
    fetchDataTemp();
  }, []);

  return (
    <div className="container">
      <div className="content">
        <Header data={fetchedData} />
        <Cards data={fetchedData} />
        <Countries />
        <Charts />
      </div>
      <Footer />
    </div>
  );
}

export default App;
