import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Services from '../components/Services'
import Icon from '../components/NewIcon'
import iconLogo from "../img/logo-icon--beige.svg";
import verticalLogo from "../img/logo-text--vertical.svg";

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

              <div className="company-intro__header">
                  <img className="company-intro__icon-logo" src={verticalLogo} alt="League Digital Logo" />
                  <p className="company-intro__heading">We are <span>League</span>.</p>
              </div>
              <div className="company-intro__body">
                  <p>We're a group of experienced, multi-disciplined digital experts who strive to go above and beyond for our clients.</p>
                  <p>A wealth of experience has tought us that honesty, transparency and creativity pave the way for long standing clients that achieve their digital goals.</p>
                  <p>Whether you're a small business looking to launch a digital presence, or a well established organisation looking to refresh and renovate your existing assets, we can help.</p>
                  <p>Our staff have worked in the digital industry for over 10 years, with experience in <Link to="/services/web-design">web design</Link>, <Link to="/services/seo">search engine optimisation</Link> and <Link to="/services/paid-marketing">paid marketing</Link>.</p>
              </div>
          </div>
      </div>

      <Services heading={services.heading} description={services.description} gridItems={services.service} />

      <div className="projects">
          <p className="projects__heading">Our Latest Projects</p>

          <div className="projects__container">

              <Link
              to="/services"
              className="project"
              style={{
                    backgroundImage: `url(${
                      !!heroImage.childImageSharp ? heroImage.childImageSharp.fluid.src : heroImage
                    })`,
                  }}
              >
                  <p className="project__heading">Project Heading</p>
                  <p className="project__intro">Project introduction will go here</p>
              </Link>

              <Link
              to="/services"
              className="project"
              style={{
                    backgroundImage: `url(${
                      !!heroImage.childImageSharp ? heroImage.childImageSharp.fluid.src : heroImage
                    })`,
                  }}
              >
                  <p className="project__heading">Project Heading</p>
                  <p className="project__intro">Project introduction will go here</p>
              </Link>

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
            icon
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            link
            heading
            text
          }
        }
      }
    }
  }
`
