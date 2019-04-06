import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const SeoPageTemplate = ({ title, heading, subheading, content, contentComponent }) => {
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

SeoPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const SeoPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SeoPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        heading={post.frontmatter.heading}
        subheading={post.frontmatter.subheading}
        content={post.html}
      />
    </Layout>
  )
}

SeoPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SeoPage

export const servicesPageQuery = graphql`
  query SeoPage($id: String!) {
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
