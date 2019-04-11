import React from 'react';
import IconSprite from '../img/icons/icons.svg';

const Icon = ({ name, classes }) => {
    return (
        <svg className={`${ name } ${classes}`}>
          <use xlinkHref={`${IconSprite}#${name}`} />
        </svg>
    );
}

export default Icon;
