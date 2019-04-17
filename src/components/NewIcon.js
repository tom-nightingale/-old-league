import React from 'react';
import IconSprite from '../img/icons/icons.svg';

const Icon = ({ name }) => {
    return (
        <svg className={`${ name }`}>
          <use xlinkHref={`${IconSprite}#${name}`} />
        </svg>
    );
}

export default Icon;
