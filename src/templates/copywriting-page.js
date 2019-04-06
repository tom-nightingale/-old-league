import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const CopywritingPageTemplate = ({ title, heading, subheading, content, contentComponent }) => {
const PageContent = contentComponent || Content

  return (
    <section>
        <h1>{title}</h1>
        <h4>{heading}</h4>
        <h5>{subheading}</h5>
        <PageContent className="content" content={content} />
    </section>
  )
}

CopywritingPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const CopywritingPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <CopywritingPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        heading={post.frontmatter.heading}
        subheading={post.frontmatter.subheading}
        content={post.html}
      />
    </Layout>
  )
}

CopywritingPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CopywritingPage

export const servicesPageQuery = graphql`
  query CopywritingPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heading
        subheading
      }
    }
  }
`
