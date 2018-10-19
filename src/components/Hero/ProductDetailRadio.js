import React from 'react';
import '../../scss/ProductDetailRadio.scss'

const ProductDetailRadio = (props) => (
 <div className="product-detail-radio">
   <div>Select Color</div><br/>
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
  <label htmlFor="gold">Rose Gold</label>
 </div>
);

export default ProductDetailRadio;
