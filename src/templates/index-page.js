import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Services from '../components/Services'
import Icon from '../components/NewIcon'
import iconlogo from "../img/logo-icon--beige.svg";

export const IndexPageTemplate = ({
  heroImage,
  hero,
  intro,
  services
}) => (
  <div>

      <div className="hero">

          <div className="hero__section">
              <p className="hero__headline">Web design & <br />digital marketing.</p>
              <p className="hero__subline">{hero.subheading}</p>
              <Link className="hero__button" to="/services">See how we can help <Icon name="icon-right-open-mini"/></Link>
          </div>

          <div
          className="hero__section hero__section--mask"
          style={{
                backgroundImage: `url(${
                  !!heroImage.childImageSharp ? heroImage.childImageSharp.fluid.src : heroImage
                })`,
              }}
          >
              <p className="hero__headline">Web design & <br />digital marketing.</p>
              <p className="hero__subline">{hero.subheading}</p>
              <Link className="hero__button" to="/services">See how we can help <Icon name="icon-right-open-mini"/></Link>
          </div>

      </div>

      <div className="company-intro">
          <div className="company-intro__container">
              <img className="navigation__icon-logo" src={iconlogo} alt="League Digital" />
              <p className="company-intro__heading">We are League.</p>
              <div className="company-intro__body">
                  <p>We're a group of experienced, multi-disciplined digital experts who strive to go above and beyond for our clients.</p>
                  <p>We believe that honesty, transparency and creativity pave the way for long standing clients who achieve their digital goals.</p>
              </div>
          </div>
      </div>

      <Services heading={services.heading} description={services.description} gridItems={services.service} />

      <div className="latest-projects">
          <p className="latest-projects__heading">Our Latest Projects</p>

          <div className="latest-project-single">
              <p className="latest-project-single__heading">Project Heading</p>
              <p className="latest-project-single__intro">Project introduction will go here</p>
          </div>

          <div className="latest-project-single">
              <p className="latest-project-single__heading">Project Heading</p>
              <p className="latest-project-single__intro">Project introduction will go here</p>
          </div>
      </div>

  </div>
);

IndexPageTemplate.propTypes = {
  heroImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  hero: PropTypes.object,
  intro: PropTypes.object,
  services: PropTypes.shape({
      service: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        heroImage={frontmatter.heroImage}
        hero={frontmatter.hero}
        intro={frontmatter.intro}
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
        heroImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        hero {
          heading
          subheading
          buttonText
          buttonDestination
        }
        intro {
          heading
          subheading
          description
        }
        services {
          heading
          description
          service {
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            icon
            heading
            text
          }
        }
      }
    }
  }
`
