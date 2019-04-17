import React from 'react';
import iconsprite from '../img/icons/icons.svg';

const Icon = ({ name }) => {
    return (
        <svg className={`${ name }`}>
          <use xlinkHref={`${iconsprite}#${name}`} />
        </svg>
    );
}

export default Icon;
