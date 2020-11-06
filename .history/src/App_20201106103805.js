import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import "./Component/Header.scss";
import Header from "./Component/Header";
import Home from "./Component/Home";
import "./Component/Home.scss";
import Login from "./Component/Login";
import Show from "./Component/Show";
import Checkout from "./Component/Checkout";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/checkout" component={Checkout} />

          <Route exact path="/login" component={Login}>
            
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
