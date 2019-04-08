import React from 'react';
import IconFont from "../img/icons.svg";

console.log(IconFont);

const Icon = (props) => {
    return (
        <svg ><use xlinkHref={`../img/icons.svg#icon-${props.icon}`}></use></svg>

        <svg className={`icon ${props.icon}`}>
            <use xlinkHref={`IconFont#${props.icon}`} />
        </svg>
    )
}

export default Icon;
