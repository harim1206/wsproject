import React from 'react';
import '../css/ProductDetailCheckbox.scss'

const ProductDetailCheckbox = () => (
 <div className="product-detail-checkbox">
  <input type="checkbox" id="white"
         name="color" value="white" />
  <label htmlFor="white">White</label>

  <input type="checkbox" id="yellow"
         name="color" value="yellow" />
  <label htmlFor="yellow">Yellow</label>

  <input type="checkbox" id="gold"
         name="color" value="gold" />
  <label htmlFor="gold">Gold</label>
 </div>
);

export default ProductDetailCheckbox;
