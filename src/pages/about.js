import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Heading from "../components/Reusable/Heading"
import Infoblock from "../components/Reusable/Infoblock"
import DualInfoblock from "../components/Reusable/DualInfoblock"
import { graphql, StaticQuery } from 'gatsby'
import Teamphotosection from "../components/About/Teamphotosection"

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 

      img={data.img.childImageSharp.fluid}
      title="About myBooky  "
      heroclass="about-background"
    />
    <DualInfoblock heading="A Message from Team" />
    <Teamphotosection />
    <Infoblock heading="About Vision" />
    
    
  </Layout>
)

export const query= graphql`
{
  
   img: file(relativePath: { eq: "about.png" }) {
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
    }

}
`

export default AboutPage
