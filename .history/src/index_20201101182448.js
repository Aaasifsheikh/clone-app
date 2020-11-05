import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {StateProvider} from './StateProvider';
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);


