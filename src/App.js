import React from "react";

import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="background">
      <Weather default="Rotterdam" />
      <footer>
        <a href="/">Open-source code on Github</a>
      </footer>
    </div>
  );
}
