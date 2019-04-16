import React from "react";
import { Link } from "gatsby";
import iconlogo from "../img/logo-icon--beige.svg";
import Icon from './NewIcon';

const Navigation = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = (e) => {
    // e.preventDefault(); //cancel default action
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
              navBarActiveClass: "not-active"
            });
      }
    );
  };

  render() {
    return (

      <div className="navigation-hold">

      <a href="#" className="hamburger-menu" data-target="navMenu" onClick={() => this.toggleHamburger()}>
          <Icon name="icon-three-bars" />
      </a>

        <nav role="navigation" className={`navigation ${this.state.navBarActiveClass}`}>

          <a className="navigation__icon-close" href="#" onClick={() => this.toggleHamburger()}><Icon name="icon-x" /></a>



          <img className="navigation__icon-logo" src={iconlogo} alt="League Digital" />

          <ul className="navigation__list">

              <li className="navigation__list-item">
                  <Link className="navigation__item" to="/">
                    Home
                  </Link>
              </li>

              <li className="navigation__list-item navigation__item-has-child">

                  <Link className="navigation__item" to="/services">
                    Services
                    <Icon name="icon-down-open-mini" />
                  </Link>

                  <ul className="navigation__sub">
                      <li>
                          <Link className="navigation__item" to="/services/web-design">
                            Web Design
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                          </Link>
                      </li>

                      <li>
                          <Link className="navigation__item" to="/services/web-development">
                            Web Development
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                          </Link>
                      </li>

                      <li>
                          <Link className="navigation__item" to="/services/seo">
                            SEO
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                          </Link>
                      </li>

                      <li>
                          <Link className="navigation__item" to="/services/ppc">
                            PPC
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                          </Link>
                      </li>

                      <li>
                          <Link className="navigation__item" to="/services/content-marketing">
                            Content Marketing
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                          </Link>
                      </li>

                      <li>
                          <Link className="navigation__item" to="/services/copywriting">
                            Copywriting
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                          </Link>
                      </li>

                      <li>
                          <Link className="navigation__item" to="/services/telecoms">
                            Telecoms
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                          </Link>
                      </li>
                  </ul>
            </li>

             <li className="navigation__list-item">
                  <Link className="navigation__item" to="/about">
                    About
                  </Link>
             </li>

              <li className="navigation__list-item">
                  <Link className="navigation__item" to="/latest-news">
                    Latest News
                  </Link>
              </li>

              <li className="navigation__list-item">
                  <Link className="navigation__item" to="/contact">
                    Contact
                  </Link>
              </li>

              <li className="navigation__list-item">
                  <Link className="navigation__item" to="/contact/examples">
                    Form Examples
                  </Link>
              </li>

          </ul>
        </nav>

      </div>
    );
  }
};

export default Navigation;
