import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import MarkdownContent from '../components/MarkdownContent'

import Layout from '../components/Layout'
import Services from '../components/Services'
import Icon from '../components/NewIcon'
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
              <h1 className="hero__headline">{hero.heading}</h1>
              <p className="hero__subline">{hero.subheading}</p>
              <Link className="hero__button" to={hero.buttonDestination}>{hero.buttonText} <Icon name="icon-right-open-mini"/></Link>
          </div>

          <div
          className="hero__section hero__section--mask"
          style={{
                backgroundImage: `url(${
                  !!heroImage.childImageSharp ? heroImage.childImageSharp.fluid.src : heroImage
                })`,
              }}
          >
              <p className="hero__headline">{hero.heading}</p>
              <p className="hero__subline">{hero.subheading}</p>
              <Link className="hero__button" to={hero.buttonDestination}>{hero.buttonText} <Icon name="icon-right-open-mini"/></Link>
          </div>

      </div>

      <div className="company-intro">
          <div className="company-intro__container">

              <div className="company-intro__header">
                  <img className="company-intro__icon-logo" src={verticalLogo} alt="League Digital Logo" />
                  <p className="company-intro__heading">We are <span>League</span>.</p>
              </div>

              <MarkdownContent content={intro.body} className="company-intro__body copy" />

          </div>
      </div>

      <Services heading={services.heading} description={services.description} gridItems={services.service} />

      <div className="project__container">

          <Link
          to="/services"
          className="project-image"
          style={{
                backgroundImage: `url(${
                  !!heroImage.childImageSharp ? heroImage.childImageSharp.fluid.src : heroImage
                })`,
              }}
          >
          </Link>

          <div className="project-intro copy">
              <h2 className="project-intro__heading">Latest Projects</h2>
              <p className="project-intro__subheading">Midland Speed Championships</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, porro. Alias iste ex, quas nisi temporibus adipisci fugiat voluptates vel hic blanditiis, sunt illo eligendi? Voluptatibus sunt suscipit ut fugiat.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, expedita blanditiis odit maxime. Laudantium veniam est, temporibus quas aperiam rerum tempora deleniti, eaque cum quidem quisquam quam, culpa iusto ad.</p>
              <Link className="btn btn--outline-teal" to="/services">See more projects</Link>
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
          body
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
