import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards/Cards";
import Charts from "./components/Charts/Charts";
import Countries from "./components/Countries/Countries";

function App() {
  //--> Storing and Handling selected Country
  const [country, setCountry] = useState("Global");
  const handleCountryChange = (country) => setCountry(country);

  return (
    <div className="container">
      <div className="content">
        <Header />
        <Cards country={country} />
        <Countries handleCountryChange={handleCountryChange} />
        <Charts />
      </div>
      <Footer />
    </div>
  );
}

export default App;
