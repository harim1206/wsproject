import React, { Component } from 'react';
import '../css/ProductDetail.scss'

class ProductDetail extends Component{

  constructor() {
    super();
  }

  render() {
    return (
      <div className="product-detail">
        <div className="product-detail__title">oshe earring</div>
        <div className="product-detail__price">$300 usd</div>
        <br/>

        <div className="product-detail__description">Custom cut quart rock crystal hoop earrings with solid gold or silver end caps and hinge closure. Available in White, Yellow or Rose 14k Gold and Silver. Sold as pair.</div>
        <br/><br/>

        <div>Select Color</div>
        <br/>

        <select></select>
        <br/>
        <button>add ( 1 pair ) to bag</button>

      </div>
    );
  }

}

export default ProductDetail
