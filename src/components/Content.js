import React, { Component } from 'react';

import contentStaticImage from '../assets/03_1280(4x3Large).jpg'
import contentCarouselImage from '../assets/02_1280(3x4Small).jpg'

import Slider from './Slider'

import '../scss/Content.scss'

class Content extends Component{

  constructor() {
    super();

    this.state = {
      carouselImages: [
        contentCarouselImage
      ],
      currentIndex: 0,
      translateValue: 0
    }
  }


  render() {
    return (
      <div className="content">
        <div className="content__carousel">
          <div className="content__carousel__wrapper">
            
            <Slider carouselImages={this.state.carouselImages}/>
          </div>

          <div className="content__carousel__description">
            <p>
              The collection pairs quartz with gold,
              exploring the limits of shape within our signature lens of timelessness
              and wearability. The resulting collection feels equal parts modern statement
              and relics that could belong to any era.
            </p>
          </div>
        </div>

        <div className="content__staticImage">
          <img src={contentStaticImage} alt="Desktop 1280px 4x3 Large"/>
        </div>
      </div>
    );
  }

}


export default Content
