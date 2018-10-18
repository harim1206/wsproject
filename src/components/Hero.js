import React, { Component } from 'react';
import '../css/Hero.scss'
import '../css/ProductDetail.scss'

import ProductDetail from './ProductDetail'
import desktopHeroImg from '../assets/01_1280(16x9Hero).jpg'
import mobileHeroImg from '../assets/Mobile_16x9-Hero.jpg'

// for smooth scrollTo animation
import easyScroll from 'easy-scroll';

class Hero extends Component{

  constructor() {
    super();
  }

  onArrowClick = (event) =>{
    let scrollAmount = 770 - window.pageYOffset

    easyScroll({
      'scrollableDomEle': window,
      'direction': 'bottom',
      'duration': 500,
      'easingPreset': 'easeInQuad',
      'scrollAmount': scrollAmount
    });
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

        <div className="hero__arrow" onClick={this.onArrowClick}>
          <i class="fas fa-angle-down fa-3x"></i>
        </div>

      </div>
    );
  }

}

export default Hero
