import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Cornwall" />

        <footer>
          This project was coded by
          <a
            href="https://adoring-kepler-a9a12f.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Bianca Schwartz{" "}
          </a>
          and is{" "}
          <a
            href="https://github.com/BiancaRose89/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub{" "}
          </a>
          and{" "}
          <a
            href="https://focused-bardeen-30372a.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
