import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import "./Component/Header.scss";
import Header from "./Component/Header";
import Home from "./Component/Home";
import "./Component/Home.scss";
import Login from "./Component/Login";
import Show from "./Component/Show";
import Chechout from "./Component/Checkout";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route  path="/checkout">
            <Header />
            <Chechout />
            
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/show">
            <Show />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
