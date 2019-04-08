import React from "react";

import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = class extends React.Component {
  render() {
    return (
      <header>
        <Logo />
        <Navigation />
      </header>
    );
  }
};

export default Header;
