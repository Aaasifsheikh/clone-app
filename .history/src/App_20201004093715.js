import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import "./Header.css";
import Header from "./Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/checkout"><h1>Checkout</h1></Route>
          <Route path="/login"><h1></h1>Login Page</Route>
          <Route path="/">
            <Header />
           <h1> Home Page</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
