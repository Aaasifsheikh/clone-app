import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './Header';

function App() {
  return (
    <BrowserRouter></BrowserRouter>
    <div className="App">
    <Header />
    </div>
  );
}

export default App;
