import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Heading from "../components/Reusable/Heading"
import Infoblock from "../components/Reusable/Infoblock"
import DualInfoblock from "../components/Reusable/DualInfoblock"
import Coursescart from "../components/Cart/Coursescart"
import { graphql, StaticQuery } from 'gatsby'


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 

      img={data.img.childImageSharp.fluid}
      title="Welcome"
      subtitle="A book is a gift you can open again and again — Garrison Keillor "
      heroclass="hero-background"
    />
    <Infoblock heading="About Us" />
    <Coursescart courses={data.courses} />
    <DualInfoblock heading="Abos" />
    
  </Layout>
)

export const query= graphql`
{
  
   img: file(relativePath: { eq: "heromain.png" }) {
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
    }
    courses:allContentfulCourses{
      edges {
        node {
          id
         title
          price
          category
          description{
            description
          }
          image{
            fixed(width:200, height:300){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }

}
`

export default IndexPage
