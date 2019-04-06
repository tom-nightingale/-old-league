import React from 'react'
import PropTypes from 'prop-types'
import { PpcPageTemplate } from '../../templates/ppc-page'

const PpcPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <PpcPageTemplate
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

PpcPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PpcPagePreview
