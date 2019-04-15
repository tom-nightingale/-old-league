import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../components/Icon';

const FeatureGrid = ({ heading, description, gridItems }) => (
  <div className="services">

    <p className="services__heading">{heading}</p>

    <p className="services__description">{description}</p>

    {gridItems.map(item => (
      <div className="services-single" key={item.heading}>
        <div className="services-single__image">
          <Icon name={item.icon} />
        </div>
          <p className="services-single__heading">{item.heading}</p>
          <p className="services-single__text">{item.text}</p>
      </div>
    ))}

  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      heading: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
