import React, { Component } from "react";

import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div class="slider">
        <Slider {...settings}>
          <div>
            <img src={this.props.carouselImages[0]} alt="Desktop 1280px 3x4 Small"/>
          </div>
          <div>
            <img src={this.props.carouselImages[0]} alt="Desktop 1280px 3x4 Small"/>
          </div>
          <div>
            <img src={this.props.carouselImages[0]} alt="Desktop 1280px 3x4 Small"/>
          </div>
        </Slider>
      </div>
    );
  }
}
