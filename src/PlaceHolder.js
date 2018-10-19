import React from 'react';
import { NavLink } from 'react-router-dom';
import './scss/App.scss';

const PlaceHolder = () => (
  <div class="placeholder">
    <NavLink to="/" exact className="placeholder-button">back</NavLink>
  </div>
)

export default PlaceHolder;
