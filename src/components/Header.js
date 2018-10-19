import React, { Component } from 'react';
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
    // If y position passes hero, hide navigation
    window.pageYOffset>635 ? this.setState({hideNav:true}) : this.setState({hideNav:false})
    // On scroll, fade navigation
    window.pageYOffset>0 ? this.setState({fadeNav: true}) : this.setState({fadeNav: false})
  }

  render() {
    let divStyle = {backgroundColor: this.state.fadeNav ? "rgba(226, 216, 206, 0.8)":"transparent"};
    let headerClass = this.state.hideNav ? "header header-disappear":"header"



    return (
      <div className={headerClass} style={divStyle}>
        <div className = "header__logo header--desktop">josh</div>
        <div className = "header__button header--desktop">shop all</div>
        <div className = "header__button header--desktop">about</div>
        <div className = "header__button header--desktop">account</div>
        <div className = "header__button header--desktop">bag ({this.props.cartItemCount})</div>

        <div className = "header__logo header--mobile header--left">josh</div>
        <div className = "header__button header--mobile header--middle">menu</div>
        <div className = "header__button header--mobile header--right">bag ({this.props.cartItemCount})</div>

      </div>
    );
  }

}

export default Header
