import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            Checkout
          </Route>
          <Route path="/lo"
        </Switch>
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
