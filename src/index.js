import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Ensure you have an `App` component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // Make sure your `index.html` has a div with id="root"
);
