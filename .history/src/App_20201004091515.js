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
          <Route path="/checkout">Checkout</Route>
          <Route path="/login">Login Page</Route>
          <Route path="/">
            Home Page
            <Header />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
