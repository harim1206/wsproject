import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


import '../scss/Header.scss'

class Header extends Component{

  constructor() {
    super();

    this.state={
      // Navigation is faded
      fadeNav: false,
      // Navigation is hidden
      hideNav: false
    }
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() { window.addEventListener('scroll', this.onScroll) };

  onScroll = (event) =>{
    const heroCompHeight = document.querySelector(".hero").clientHeight
    // If y position passes hero, hide navigation
    window.pageYOffset>heroCompHeight ? this.setState({hideNav:true}) : this.setState({hideNav:false})
    // On scroll, fade navigation
    window.pageYOffset>0 ? this.setState({fadeNav: true}) : this.setState({fadeNav: false})
  }

  render() {
    let divStyle = {backgroundColor: this.state.fadeNav ? "rgba(226, 216, 206, 0.8)":"transparent"};
    let headerClass = this.state.hideNav ? "header header-disappear":"header"

    // <div className = "header__button header--desktop">about</div>
    return (
      <div className={headerClass} style={divStyle}>
        <NavLink to="/" exact className="header__logo header--desktop">josh</NavLink>
        <NavLink to="/all" exact className="header__button header--desktop">shop all</NavLink>
        <NavLink to="/about" exact className="header__button header--desktop">about</NavLink>
        <NavLink to="/account" exact className="header__button header--desktop">account</NavLink>
        <NavLink to="/bag" exact className="header__button header--desktop">bag ({this.props.cartItemCount})</NavLink>

        <NavLink to="/" exact className="header__logo header--mobile header--left">josh</NavLink>
        <NavLink to="/" exact className="header__button header--mobile header--middle">menu</NavLink>
        <NavLink to="/bag" exact className="header__button header--mobile header--right">bag ({this.props.cartItemCount})</NavLink>



      </div>
    );
  }

}

export default Header
