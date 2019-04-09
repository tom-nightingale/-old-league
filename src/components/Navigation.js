import React from "react";

import NavItems from './NavItems.js';
import LogoIcon from './LogoIcon.js';

const Navigation = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (

      <div>
        <div
            className={`hamburger-menu ${this.state.navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => this.toggleHamburger()}
        >
            X
        </div>

        <nav role="navigation" className={`navigation ${this.state.navBarActiveClass}`}>
          <a className="close-navigation" onClick={() => this.toggleHamburger()}>X</a>
          <LogoIcon />
          <NavItems />
        </nav>

      </div>
    );
  }
};

export default Navigation;
