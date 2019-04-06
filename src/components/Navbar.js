import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
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
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >

            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" />
            </Link>
            {/* Hamburger menu */}

            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
                <span />
                <span />
                <span />
            </div>


          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}>

              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/products">
                Products
              </Link>
              <Link className="navbar-item" to="/latest-news">
                Latest News
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>
              <Link className="navbar-item" to="/services">
                Services Page
              </Link>
              <Link className="navbar-item" to="/services/web-design">
                Web Design
              </Link>
              <Link className="navbar-item" to="/services/web-development">
                Web Development
              </Link>

          </div>
      </nav>
    );
  }
};

export default Navbar;
