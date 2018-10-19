import React, { Component } from 'react';
import '../scss/Footer.scss'

class Footer extends Component{

  constructor() {
    super();
  }

  render() {
    return (
      <div className="footer">
        <div className = "footer--left footer__button">copyright josh.com</div>
        <div className = "footer--right">
          <div className = "footer__button">social media</div>
          <div className = "footer__button">terms</div>
          <div className = "footer__button">faq</div>
        </div>
      </div>
    );
  }

}

export default Footer
