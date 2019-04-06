import React from 'react'
import PropTypes from 'prop-types'
import { SeoPageTemplate } from '../../templates/seo-page'

const SeoPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <SeoPageTemplate
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        content={widgetFor('body')}
      />
    )
  } else {
    return (<div>Loading...</div>)
  }
}

SeoPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default SeoPagePreview
