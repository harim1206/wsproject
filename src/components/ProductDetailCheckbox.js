import React from 'react';
import '../css/ProductDetailCheckbox.scss'

const ProductDetailCheckbox = () => (
 <div className="product-detail-checkbox">
  <input type="checkbox" id="white"
         name="color" value="white" />
  <label for="white">White</label>

  <input type="checkbox" id="yellow"
         name="color" value="yellow" />
  <label for="yellow">Yellow</label>

  <input type="checkbox" id="gold"
         name="color" value="gold" />
  <label for="gold">Gold</label>
 </div>
);

export default ProductDetailCheckbox;
