import React from 'react'

import NavItems from './NavItems';
import SocialLinks from './SocialLinks';

import iconlogo from "../img/logo--beige.svg";


const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">

      <div className="footer__container">

          <div className="footer__section footer__nav">
               <NavItems />
          </div>

          <div className="footer__section footer__identity">
              <img className="footer__logo" src={iconlogo} alt="League Digital" />
          </div>

          <div className="footer__section footer__social">
              <a className="footer__touchpoint" href="mailto:hello@leaguedigital.co.uk">hello@leaguedigital.co.uk</a>
              <a className="footer__touchpoint" href="tel:07732575227">07732 575 227</a>
              <SocialLinks />
          </div>

        </div>

        <div className="footer__section footer__legal">
            <p>&copy; League Media 2019. All rights reserved.</p>
        </div>

      </footer>
    )
  }
}

export default Footer
