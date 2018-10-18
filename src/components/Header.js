import React, { Component } from 'react';
import '../css/Header.scss'

class Header extends Component{

  constructor() {
    super();
  }

  render() {
    return (
      <div className="header">
        <div className = "header__logo header--desktop">josh</div>
        <div className = "header__button header--desktop">shop all</div>
        <div className = "header__button header--desktop">about</div>
        <div className = "header__button header--desktop">account</div>
        <div className = "header__button header--desktop">bag</div>

        <div className = "header__logo header--mobile header--left">josh</div>
        <div className = "header__button header--mobile header--middle">menu</div>
        <div className = "header__button header--mobile header--right">bag</div>

      </div>
    );
  }

}

export default Header
