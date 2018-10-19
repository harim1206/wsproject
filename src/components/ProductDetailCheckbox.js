import React from 'react';
import '../css/ProductDetailCheckbox.scss'

const ProductDetailCheckbox = (props) => (
 <div className="product-detail-checkbox">
  <input type="radio" id="white"
         name="color" value="white"
         onChange = {props.onRadioChange} />

  <label htmlFor="white">White</label>

  <input type="radio" id="yellow"
         name="color" value="yellow"
         onChange = {props.onRadioChange} />

  <label htmlFor="yellow">Yellow</label>

  <input type="radio" id="gold"
         name="color" value="gold"
         onChange = {props.onRadioChange} />
  <label htmlFor="gold">Gold</label>
 </div>
);

export default ProductDetailCheckbox;
