import React, { Component } from 'react';

import ProductDetailCheckbox from './ProductDetailCheckbox'
import ProductDetailButton from './ProductDetailButton'
import '../../scss/ProductDetail.scss'

class ProductDetail extends Component{

  constructor() {
    super();
  }

  render() {
    return (
      <div className ="product-detail">
        <div className="product-detail__container">
          <div className="product-detail__title">oshe earring</div>
          <div className="product-detail__price">$300 usd</div>
          <br/><br/>

          <div className="product-detail__description">Custom cut quart rock crystal hoop earrings with solid gold or silver end caps and hinge closure. Available in White, Yellow or Rose 14k Gold and Silver. Sold as pair.</div>
          <br/><br/>

          <div>Select Color</div>
          <br/>

          <ProductDetailCheckbox onRadioChange={this.props.onRadioChange}/>
          <br/><br/>
          <ProductDetailButton onAddToCartClick={this.props.onAddToCartClick}/>
        </div>
      </div>
    );
  }

}
// <button className="atc-button atc-button--desktop">
// add ( 1 pair ) to bag
// </button>


export default ProductDetail
