import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export default function HeroSection({img, title ,subtitle, heroclass}) {
    return (
      <BackgroundImage  className={heroclass} fluid={img}>

      <h1 className="text-white text-uppercase text-center display-4 title"><b>{title}</b></h1>
      <div style={{backgroundColor: '#373B44'}}>
          <h4 className="text-warning">{subtitle}</h4>
      </div>

      </BackgroundImage>
    )
}
