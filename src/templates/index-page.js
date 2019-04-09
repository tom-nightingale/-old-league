import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>

      <div className="hero">

          <div className="hero__section">
              <p className="hero__headline">Web design & <br />digital marketing</p>
              <p className="hero__subline">We design and build websites that generate more leads for your business.</p>
          </div>

          <div className="hero__section hero__section--mask">
              <p className="hero__headline">Web design & <br />digital marketing</p>
              <p className="hero__subline">We design and build websites that generate more leads for your business.</p>
          </div>

         <button className="hero__button hero__button--primary">See how we can help</button>

      </div>

        <div>

            <h1>{title}</h1>
            <h3>{subheading}</h3>
            <h1>{mainpitch.title}</h1>
            <h3>{mainpitch.description}</h3>

            <h3>{heading}</h3>
            <p>{description}</p>

            <Features gridItems={intro.blurbs} />

            <Link className="btn" to="/products">
              See all products
            </Link>

            <h3>Latest stories</h3>
            <BlogRoll />

            <Link className="btn" to="/blog">
              Read more
            </Link>

        </div>

  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
