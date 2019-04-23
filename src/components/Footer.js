import React from 'react'

import NavItems from './NavItems';
import SocialLinks from './SocialLinks';

import iconlogo from "../img/logo-icon--beige.svg";


const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">

          <div className="footer__section">
              <img className="footer__logo" src={iconlogo} alt="League Digital" />
              <a className="footer__touchpoint" href="mailto:hello@leaguedigital.co.uk">hello@leaguedigital.co.uk</a>
              <a className="footer__touchpoint" href="tel:07732575227">07732 575 227</a>
          </div>

          <div className="footer__section footer__social">
              <SocialLinks />
          </div>

          <div className="footer__section">
               <NavItems />
          </div>

      </footer>
    )
  }
}

export default Footer
