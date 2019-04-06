import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ContentMarketingPageTemplate = ({ title, heading, subheading, content, contentComponent }) => {
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

ContentMarketingPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ContentMarketingPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ContentMarketingPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        heading={post.frontmatter.heading}
        subheading={post.frontmatter.subheading}
        content={post.html}
      />
    </Layout>
  )
}

ContentMarketingPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContentMarketingPage

export const servicesPageQuery = graphql`
  query ContentMarketingPage($id: String!) {
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
