import React from 'react';
import '../css/ProductDetailButton.scss'

const ProductDetailButton = (props) => (
 <button className="product-detail-button" onClick={props.onAddToCartClick}>
  add ( 1 pair ) to bag

 </button>
);

export default ProductDetailButton;
