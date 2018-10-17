import React, { Component } from 'react';
import '../css/Content.scss'

import contentStaticImage from '../assets/03_1280(4x3Large).jpg'
import contentCarouselImage from '../assets/02_1280(3x4Small).jpg'

class Content extends Component{

  constructor() {
    super();
  }

  render() {
    return (
      <div className="content">
        <div className="content__carousel">
          <img src={contentCarouselImage} alt="Desktop 1280px 3x4 Small"/>
          <div className="content__carousel__description">
            <p>The collection pairs quartz with gold, exploring the limits of shape within our signature lens of timelessness and wearability. The resulting collection feels equal parts modern statement and relics that could belong to any era.</p>
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
