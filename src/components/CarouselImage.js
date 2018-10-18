import React, { Component } from 'react';

const CarouselImage = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }

  return <div className="carouselImage" style={styles}></div>
}





export default CarouselImage;
