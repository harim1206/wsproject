import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.scss';

import Header from './components/Header'
import Hero from './components/Hero'
import Content from './components/Content'
import Video from './components/Video'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Hero/>
        <Content/>
        <Video/>
        <Footer/>

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
