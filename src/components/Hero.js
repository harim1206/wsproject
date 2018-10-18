import React, { Component } from 'react';
import '../css/Hero.scss'
import '../css/ProductDetail.scss'

import ProductDetail from './ProductDetail'
import desktopHeroImg from '../assets/01_1280(16x9Hero).jpg'
import mobileHeroImg from '../assets/Mobile_16x9-Hero.jpg'


// import logo from './logo.png'; // Tell Webpack this JS file uses this image


class Hero extends Component{

  constructor() {
    super();
  }

  render() {
    return (
      <div className="hero">
        <div className="hero__image">
          <picture className="hero__image">
            <source media="(max-width: 500px)" srcSet={mobileHeroImg}/>
            <source media="(min-width: 501px)" srcSet={desktopHeroImg}/>
            <img src={desktopHeroImg} alt="Desktop 1280px 16x9 Hero"/>
          </picture>
        </div>
        <div className="hero__content">
          <ProductDetail/>
        </div>

      </div>
    );
  }

}

// <button className="atc-button atc-button--mobile">
// add ( 1 pair ) to bag
// </button>


export default Hero
