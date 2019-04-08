import React from 'react';

const files = require.context('!svg-sprite!../../img/icons', false, /.*\.svg$/);
files.keys().forEach(files);

const Icon = ({ iconName }) => (
  <svg className={ `icon-${ iconName }` }>
    <use xlinkHref={ `#icon-${ iconName }` }></use>
  </svg>
);

export default Icon;
