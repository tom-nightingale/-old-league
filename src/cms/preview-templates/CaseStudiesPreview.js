import React from 'react'
import PropTypes from 'prop-types'
import { CaseStudiesTemplate } from '../../templates/case-studies'

const CaseStudiesPreview = ({ entry, widgetFor }) => (
  <CaseStudiesTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

CaseStudiesPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CaseStudiesPreview
