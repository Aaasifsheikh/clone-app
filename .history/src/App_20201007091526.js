import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import "./Header.css";
import Header from "./Header";
import Home from './Home';
import './Home.css';
import Login from './'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Login Page</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
            
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;