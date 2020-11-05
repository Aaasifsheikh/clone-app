import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route}
import './App.css';
import Header from './Header';

function App() {
  return (
    <BrowserRouter>

    <div className="App">
    <Switch>

    </Switch>
    <Header />
    </div>
    </BrowserRouter>
  );
}

export default App;
