import React from "react";
import ReactDOM from "react-dom";
import { RenderLineChart } from "./component/line.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <p> Chart</p>
      <RenderLineChart />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
