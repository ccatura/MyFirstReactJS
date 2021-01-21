import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const hello = <h1>Hello</h1>;

function App() {
  var a = 0;
  a = a + 3;
  if (a === 4) {
    return "hi";
  } else {
    return hello;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
