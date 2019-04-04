import React from 'react'
// import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const ServicesPageTemplate = ({ title, heading, subheading }) => {


  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
                {heading}
                {subheading}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ServicesPageTemplate.propTypes = {
//   title: PropTypes.string.isRequired,
//   content: PropTypes.string,
//   contentComponent: PropTypes.func,
// }

const ServicesPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ServicesPageTemplate
        title={post.frontmatter.title}
        heading={post.frontmatter.heading}
        subheading={post.frontmatter.subheading}
      />
    </Layout>
  )
}

// AboutPage.propTypes = {
//   data: PropTypes.object.isRequired,
// }

export default ServicesPage

export const servicesPageQuery = graphql`
  query ServicesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        subheading
      }
    }
  }
`
