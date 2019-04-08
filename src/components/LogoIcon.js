import React from 'react';
import { Link } from 'gatsby';

import logo from "../img/logo-icon--beige.svg";

const Logo = class extends React.Component {
    render() {
        return (
            <Link to="/" className="logo-icon" title="Logo">
              <img className="logo-icon__image" src={logo} alt="League Digital" />
            </Link>
        )
    }
}

export default Logo;
