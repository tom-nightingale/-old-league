import React from 'react'

import Logo from './Logo';
import NavItems from './NavItems';
import SocialLinks from './SocialLinks';


const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <Logo />
        <NavItems />
        <SocialLinks />
      </footer>
    )
  }
}

export default Footer
