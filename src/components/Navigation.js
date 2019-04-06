import React from "react";
import { Link } from "gatsby";

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
      <nav role="navigation" className={`navigation ${this.state.navBarActiveClass}`}>
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
      </nav>
    );
  }
};

export default Navigation;
