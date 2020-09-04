import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards/Cards";
import Charts from "./components/Charts/Charts";
import Countries from "./components/Countries/Countries";

function App() {
  return (
    <div className="container">
      <div className="content">
        <Header />
        <Cards />
        <Countries />
        <Charts />
      </div>
      <Footer />
    </div>
  );
}

export default App;
