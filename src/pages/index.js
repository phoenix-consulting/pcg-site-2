import React from "react"
import SEO from '../components/SEO'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import HomeBanner from '../components/HomeComponents/HomeBanner'
import HomeAbout from '../components/HomeComponents/HomeAbout'
import HomeCurr from '../components/HomeComponents/HomeCurr'
import HomeContact from '../components/HomeComponents/HomeContact'
import 'bootstrap/dist/css/bootstrap.min.css'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'
import '../global_styles/background.css'


const Home = () => {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "landing-page.png" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `)

  return (
    <div>
      <SEO/>
      <BackgroundImage fluid={data.file.childImageSharp.fluid} className="backgroundImage">
        <NavBar light={true}/>
        <HomeBanner/>
        <HomeAbout/>
      </BackgroundImage>
      
      <HomeCurr/>
      <HomeContact/>
      <Footer/>
    </div>
  )
}

export default Home

