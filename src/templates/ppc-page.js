import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const PpcPageTemplate = ({ title, heading, subheading, content, contentComponent }) => {
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

PpcPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const PpcPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PpcPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        heading={post.frontmatter.heading}
        subheading={post.frontmatter.subheading}
        content={post.html}
      />
    </Layout>
  )
}

PpcPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PpcPage

export const servicesPageQuery = graphql`
  query PpcPage($id: String!) {
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
