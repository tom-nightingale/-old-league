import React from 'react'
import PropTypes from 'prop-types'
import { CopywritingPageTemplate } from '../../templates/copywriting-page'

const CopywritingPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <CopywritingPageTemplate
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

CopywritingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CopywritingPagePreview
