import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './Header';

function App() {
  return (
    <BrowserRouter>

    <div className="App">
    <Header />
    </BrowserRouter>
    </div>
  );
}

export default App;