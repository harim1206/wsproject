import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Hero from './components/Hero'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Hero/>

      </div>
    );
  }
}

export default App;




// <div className="App">
// <Hero/>
// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
// hello world
// </p>
// <a
// className="App-link"
// href="https://reactjs.org"
// target="_blank"
// rel="noopener noreferrer"
// >
// Learn React
// </a>
// </header>
// </div>
