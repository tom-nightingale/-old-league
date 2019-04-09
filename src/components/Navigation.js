import React from "react";
import { Link } from "gatsby";
import iconlogo from "../img/logo-icon--beige.svg";

const Navigation = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = (e) => {
    e.preventDefault(); //cancel default action
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

      <div className="navigation-hold">
        <div
            className={`hamburger-menu ${this.state.navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => this.toggleHamburger()}
        >
            X
        </div>

        <nav role="navigation" className={`navigation ${this.state.navBarActiveClass}`}>

          <a className="navigation__icon-close" href="#" onClick={() => this.toggleHamburger()}>X</a>

          <img className="navigation__icon-logo" src={iconlogo} alt="League Digital" />

          <Link className="navigation__item" to="/">
            Home
          </Link>

          <Link className="navigation__item" to="/services">
            Services
          </Link>

          <div className="navigation__sub">
              <Link className="navigation__item" to="/services/web-design">
                Web Design
              </Link>

              <Link className="navigation__item" to="/services/web-development">
                Web Development
              </Link>

              <Link className="navigation__item" to="/services/seo">
                SEO
              </Link>

              <Link className="navigation__item" to="/services/ppc">
                PPC
              </Link>

              <Link className="navigation__item" to="/services/content-marketing">
                Content Marketing
              </Link>

              <Link className="navigation__item" to="/services/copywriting">
                Copywriting
              </Link>

              <Link className="navigation__item" to="/services/telecoms">
                Telecoms
              </Link>
          </div>

          <Link className="navigation__item" to="/about">
            About
          </Link>

          <Link className="navigation__item" to="/latest-news">
            Latest News
          </Link>

          <Link className="navigation__item" to="/contact">
            Contact
          </Link>

          <Link className="navigation__item" to="/contact/examples">
            Form Examples
          </Link>
        </nav>

      </div>
    );
  }
};

export default Navigation;
