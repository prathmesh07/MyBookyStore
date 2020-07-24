import React from "react"
import Contactt from "../components/Contact/Contactt"
import Layout from "../components/layout"

import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Heading from "../components/Reusable/Heading"
import Infoblock from "../components/Reusable/Infoblock"
import DualInfoblock from "../components/Reusable/DualInfoblock"
import { graphql, StaticQuery } from 'gatsby'
import Teamphotosection from "../components/About/Teamphotosection"
import Creator from "../components/Contact/Creator"

const contactPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 

      img={data.img.childImageSharp.fluid}
      title="Contact Us  "
      heroclass="contact-background"
    />
    
   <Contactt />
   
    <Creator   />
    
  </Layout>
)

export const query= graphql`
{
  
   img: file(relativePath: { eq: "contact.png" }) {
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
    }

}
`

export default contactPage
