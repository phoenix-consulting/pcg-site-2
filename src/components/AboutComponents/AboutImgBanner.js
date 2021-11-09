import React from 'react'
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import styles from './AboutImgBanner.module.css'

const AboutImgBanner = () => {
    const data = useStaticQuery(graphql`
    query {
      newbiesf19: file(relativePath: { eq: "F21-retreat-girls.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      beachGroup: file(relativePath: { eq: "F21-retreat-hike.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      divyaCatBaz: file(relativePath: { eq: "F21-retreat-boardgame.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      juliaCatVivek: file(relativePath: { eq: "F21-retreat-beach.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      retreatBlur: file(relativePath: { eq: "F21-retreat-chipotle.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      retreatForest: file(relativePath: { eq: "S21-skydiving.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      newbiess19: file(relativePath: { eq: "F20-newbies.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
    `)
    return (
        <div>
            <div className={styles.scrollingWrapper}>
                <div className={styles.imgContainer}>
                    <Img fluid={data.beachGroup.childImageSharp.fluid} className={styles.imgBox}/>
                </div>
                <div className={styles.imgContainer}>
                    <Img fluid={data.divyaCatBaz.childImageSharp.fluid} className={styles.imgBox}/>
                </div>
                <div className={styles.imgContainer}>
                    <Img fluid={data.juliaCatVivek.childImageSharp.fluid} className={styles.imgBox}/>
                </div>
                <div className={styles.imgContainer}>
                    <Img fluid={data.retreatBlur.childImageSharp.fluid} className={styles.imgBox}/>
                </div>
                <div className={styles.imgContainer}>
                    <Img fluid={data.retreatForest.childImageSharp.fluid} className={styles.imgBox}/>
                </div>
                <div className={styles.imgContainer}>
                    <Img fluid={data.newbiesf19.childImageSharp.fluid} className={styles.imgBox}/>
                </div>
                <div className={styles.imgContainer}>
                    <Img fluid={data.newbiess19.childImageSharp.fluid} className={styles.imgBox}/>
                </div>
            </div>
        </div>
    )
}

export default AboutImgBanner;