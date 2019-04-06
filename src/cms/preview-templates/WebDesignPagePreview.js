import React from 'react'
import PropTypes from 'prop-types'
import { WebDesignPageTemplate } from '../../templates/web-design-page'

const WebDesignPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <WebDesignPageTemplate
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

WebDesignPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default WebDesignPagePreview
