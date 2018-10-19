import React, { Component } from 'react';

// Import images
import DesktopHeroImgWhite from '../../assets/01_1280(16x9Hero).jpg'
import MobileHeroImgWhite from '../../assets/Mobile_16x9-Hero.jpg'
import DesktopHeroImgYellow from '../../assets/desktopHeroImgYellowSample.jpg'
import MobileHeroImgYellow from '../../assets/mobileHeroImgYellowSample.jpg'
import DesktopHeroImgGold from '../../assets/desktopHeroImgGoldSample.jpg'
import MobileHeroImgGold from '../../assets/mobileHeroImgGoldSample.jpg'

import ProductDetail from './ProductDetail'
import '../../scss/Hero.scss'
import '../../scss/ProductDetail.scss'

// NPM library for smooth scrollTo animation
import easyScroll from 'easy-scroll';

class Hero extends Component{

  constructor() {
    super();

    this.state={
      // Currently selected color
      currentColor: "white"
    }
  }

  onArrowClick = (event) => {
    // Scroll to top of next (content) section on down arrow button click
    let scrollAmount = 770 - window.pageYOffset

    easyScroll({
      'scrollableDomEle': window,
      'direction': 'bottom',
      'duration': 600,
      'easingPreset': 'easeInQuad',
      'scrollAmount': scrollAmount
    });
  }

  onRadioChange = (event) => {this.setState({currentColor: event.target.value})}

  render() {
    let mobileHeroImg
    let desktopHeroImg
    
    if(this.state.currentColor==="white"){
      mobileHeroImg = MobileHeroImgWhite
      desktopHeroImg = DesktopHeroImgWhite
    }else if(this.state.currentColor==="yellow"){
      mobileHeroImg = MobileHeroImgYellow
      desktopHeroImg = DesktopHeroImgYellow
    }else{
      mobileHeroImg = MobileHeroImgGold
      desktopHeroImg = DesktopHeroImgGold
    }

    return (
      <div className="hero">
        <div className="hero__image">
          <picture className="hero__image">
            <source media="(max-width: 500px)" srcSet={mobileHeroImg}/>
            <source media="(min-width: 501px)" srcSet={desktopHeroImg}/>
            <img src={DesktopHeroImgWhite} alt="Desktop 1280px 16x9 Hero"/>
          </picture>
        </div>

        <div className="hero__content">
          <ProductDetail
            onAddToCartClick={this.props.onAddToCartClick}
            onRadioChange={this.onRadioChange} />
        </div>

        <div className="hero__arrow" onClick={this.onArrowClick}>
          <i className="fas fa-angle-down fa-3x"></i>
        </div>

      </div>
    );
  }

}

export default Hero
