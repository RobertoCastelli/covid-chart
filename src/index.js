import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//--> Inspired by: https://github.com/adrianhajdin/project_corona_tracker
//--> API Soure: https://covid19.mathdro.id/api

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
