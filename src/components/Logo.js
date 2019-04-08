import React from 'react';
import { Link } from 'gatsby';

import logo from "../img/logo-text--blue.svg";

const Logo = class extends React.Component {
    render() {
        return (
            <Link to="/" className="logo" title="Logo">
              <img className="logo__image" src={logo} alt="League Digital" />
            </Link>
        )
    }
}

export default Logo;
