import React from 'react'
import PropTypes from 'prop-types'
import { WebDevelopmentPageTemplate } from '../../templates/web-development-page'

const WebDevelopmentPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <WebDevelopmentPageTemplate
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

WebDevelopmentPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default WebDevelopmentPagePreview
