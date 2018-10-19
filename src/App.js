import React, { Component } from 'react';
import './scss/App.scss';

import Header from './components/Header'
import Hero from './components/Hero/Hero'
import Content from './components/Content'
import Video from './components/Video'
import Footer from './components/Footer'

class App extends Component {
  constructor(){
    super()

    this.state = {
      // # of items in cart
      cartItemCount: 0
    }
  }

  onAddToCartClick = () => {
    // Increment # of items in cart by 1
    this.setState({cartItemCount: this.state.cartItemCount+1})
  }

  render() {
    return (
      <div className="App">
        <Header cartItemCount={this.state.cartItemCount} />
        <Hero onAddToCartClick={this.onAddToCartClick} />
        <Content/>
        <Video/>
        <Footer/>
      </div>
    );
  }
}

export default App;
