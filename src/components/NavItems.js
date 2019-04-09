import React from 'react';
import { Link } from "gatsby";

const NavItems = () => {
    return (
        <div>
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
        </div>
    );
}

export default NavItems;
