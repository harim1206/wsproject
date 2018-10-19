import React from 'react';

import ProductDetailRadio from './ProductDetailRadio'
import ProductDetailButton from './ProductDetailButton'
import '../../scss/ProductDetail.scss'

const ProductDetail = (props) =>(
  <div className ="product-detail">
    <div className="product-detail__container">
      <div className="product-detail__title">oshe earring</div>
      <div className="product-detail__price">$300 usd</div>
      <br/><br/>

      <div className="product-detail__description">Custom cut quart rock crystal hoop earrings with solid gold or silver end caps and hinge closure. Available in White, Yellow or Rose 14k Gold and Silver. Sold as pair.</div>
      <br/><br/>

      

      <ProductDetailRadio onRadioChange={props.onRadioChange}/>
      <br/><br/>

      <ProductDetailButton onAddToCartClick={props.onAddToCartClick}/>
    </div>
  </div>

)

export default ProductDetail
