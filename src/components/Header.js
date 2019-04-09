import React from "react";

import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = class extends React.Component {
  render() {
    return (
      <header>
          <div className="container container--header">
            <Logo />
            <Navigation />
          </div>
      </header>
    );
  }
};

export default Header;
