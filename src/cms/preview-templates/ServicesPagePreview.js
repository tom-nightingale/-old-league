import React from 'react'
import PropTypes from 'prop-types'
import { ServicesPageTemplate } from '../../templates/services-page'

const ServicesPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <ServicesPageTemplate
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        body={data.body}
      />
    )
  } else {
    return (<div>Loading...</div>)
  }
}

ServicesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ServicesPagePreview
