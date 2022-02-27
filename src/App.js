import React from "react";

import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="background">
      <Weather default="Rotterdam" />
      <footer>
        <a
          href="https://github.com/Faerthurin/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code on Github
        </a>
      </footer>
    </div>
  );
}
