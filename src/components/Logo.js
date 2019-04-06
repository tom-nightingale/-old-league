import React from 'react';
import { Link } from 'gatsby';

import logo from "../img/logo.svg";

const Logo = class extends React.Component {
    render() {
        return (
            <Link to="/" className="logo" title="Logo">
              <img src={logo} alt="Kaldi" />
            </Link>
        )
    }
}

export default Logo;
