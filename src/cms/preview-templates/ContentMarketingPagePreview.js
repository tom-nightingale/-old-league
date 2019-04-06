import React from 'react'
import PropTypes from 'prop-types'
import { ContentMarketingPageTemplate } from '../../templates/content-marketing-page'

const ContentMarketingPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <ContentMarketingPageTemplate
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

ContentMarketingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ContentMarketingPagePreview
