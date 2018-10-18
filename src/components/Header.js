import React, { Component } from 'react';
import '../css/Header.scss'

class Header extends Component{

  constructor() {
    super();

    this.state={
      fadeNav: false,
      hideNav: false
    }

    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  };

  onScroll = (event) =>{
    console.log('window.pageYOffset: ', window.pageYOffset)

    // if y position passes hero, hide navigation
    window.pageYOffset>635 ? this.setState({hideNav:true}, ()=>console.log(this.state)) : this.setState({hideNav:false}, ()=>console.log(this.state))


    window.pageYOffset>0 ? this.setState({fadeNav: true}) : this.setState({fadeNav: false})

  }

  render() {
    let divStyle = {
      backgroundColor: this.state.fadeNav ? "rgba(226, 216, 206, 0.8)":"transparent",
      display: this.state.hideNav ? "none":"grid"
    };



    return (
      <div className="header" style={divStyle}>
        <div className = "header__logo header--desktop">josh</div>
        <div className = "header__button header--desktop">shop all</div>
        <div className = "header__button header--desktop">about</div>
        <div className = "header__button header--desktop">account</div>
        <div className = "header__button header--desktop">bag</div>

        <div className = "header__logo header--mobile header--left">josh</div>
        <div className = "header__button header--mobile header--middle">menu</div>
        <div className = "header__button header--mobile header--right">bag</div>

      </div>
    );
  }

}

export default Header
