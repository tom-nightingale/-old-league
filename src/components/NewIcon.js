import React from 'react';
import IconSprite from '../img/icons/icons.svg';

const NewIcon = ({ name, classes }) => {
    return (
        <svg className={`${ name } ${classes}`}>
          <use xlinkHref={`${IconSprite}#${name}`} />
        </svg>
    );
}

export default NewIcon;
