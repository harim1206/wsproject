import React, { Component } from 'react';
import '../css/Hero.scss'

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
        <picture className="hero__image">
          <source media="(max-width: 766px)" srcSet={mobileHeroImg}/>
          <source media="(min-width: 767px)" srcSet={desktopHeroImg}/>
          <img src={desktopHeroImg} alt="Desktop 1280px 16x9 Hero"/>
        </picture>
        <div className="hero__content">
          <ProductDetail/>
        </div>

      </div>
    );
  }

}
// <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg">
// <source media="(min-width: 800px)" srcset="elva-800w.jpg">
// <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva">

export default Hero
