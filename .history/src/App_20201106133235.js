import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import "./Component/Header.scss";
import Home from "./Component/Home";
import "./Component/Home.scss";
import Login from "./Component/Login";
import Checkout from "./Component/Checkout";
function App() {
  return (
      <div className="App">
    <BrowserRouter>
        <Switch>
          <Route  path="/e" component={Home} />

          <Route exact path="/checkout" component={Checkout} />

          <Route exact path="/login" component={Login} />
        </Switch>
    </BrowserRouter>
      </div>
  );
}

export default App;
