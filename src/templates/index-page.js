import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Services from '../components/Services'
import BlogRoll from '../components/BlogRoll'
import Icon from '../components/Icon'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  services
}) => (
  <div>

      <div className="hero">

          <div className="hero__section">
              <p className="hero__headline">Web design & <br />digital marketing.</p>
              <p className="hero__subline">We design and build websites that generate more leads for your business.</p>
              <Link className="hero__button" to="/services">See how we can help <Icon name="icon-right-open-mini"/></Link>
          </div>

          <div
          className="hero__section hero__section--mask"
          style={{
                backgroundImage: `url(${
                  !!image.childImageSharp ? image.childImageSharp.fluid.src : image
                })`,
              }}
          >
              <p className="hero__headline">Web design & <br />digital marketing.</p>
              <p className="hero__subline">We design and build websites that generate more leads for your business.</p>
              <Link className="hero__button" to="/services">See how we can help <Icon name="icon-right-open-mini"/></Link>
          </div>

      </div>

        <div>

            <h1>{title}</h1>
            <h3>{subheading}</h3>
            <h1>{mainpitch.title}</h1>
            <h3>{mainpitch.description}</h3>

            <h3>{heading}</h3>
            <p>{description}</p>

            <Services gridItems={services.service} />

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
  services: PropTypes.shape({
      service: PropTypes.array,
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
        services={frontmatter.services}
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
        services {
          service {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            heading
            text
          }
          heading
          description
        }
      }
    }
  }
`
