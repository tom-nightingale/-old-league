import React from 'react'

import Logo from './Logo';
import Navigation from './Navigation';
import SocialLinks from './SocialLinks';


const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <Logo />
        <Navigation />
        <SocialLinks />
      </footer>
    )
  }
}

export default Footer
