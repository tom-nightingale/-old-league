import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Icon from '../components/Icon';

const FeatureGrid = ({ heading, description, gridItems }) => (
  <div className="services">

      <div className="services__container">

        <p className="services__heading">{heading}</p>

        <p className="services__description">{description}</p>

        {gridItems.map(item => (
          <Link
          className="services-single"
          to={item.link}
          key={item.heading}
          style={{
            backgroundImage: `url(${
              !!item.image.childImageSharp ? item.image.childImageSharp.fluid.src : item.image
            })`,
          }}>
              <Icon name={item.icon} />
              <p className="services-single__heading">{item.heading}</p>
              <p className="services-single__text">{item.text}</p>
          </Link>
        ))}

    </div>

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
