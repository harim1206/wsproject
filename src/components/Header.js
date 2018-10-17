import React, { Component } from 'react';
import '../css/Header.css'

class Hero extends Component{

  constructor() {
    super();
  }

  render() {
    return (
      <div className="header">
        <div className = "header__button">josh</div>
        <div className = "header__button">shop all</div>
        <div className = "header__button">about</div>
        <div className = "header__button">account</div>
        <div className = "header__button">bag</div>

      </div>
    );
  }

}

export default Hero
