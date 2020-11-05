import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {StateProvider} from './StateProvider';
import App from "./App";
import reducer,{initialState} from './reducer';
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.Fragment>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();