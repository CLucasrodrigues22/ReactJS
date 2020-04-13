import React, { Component } from 'react';
import Routes from './routes'

import "./style.css";

import Header from './components/Header';
import Main from './pages/main'
import { Route, Router } from 'react-router-dom';

const App = () => (
    <div className="App">
      <Header />
      <Routes />
    </div>
);

export default App;
