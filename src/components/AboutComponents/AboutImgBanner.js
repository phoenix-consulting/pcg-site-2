import React from 'react'
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import styles from './AboutImgBanner.module.css'

const AboutImgBanner = () => {
    const data = useStaticQuery(graphql`
    query {
      newbiesf19: file(relativePath: { eq: "newbiesf19.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      beachGroup: file(relativePath: { eq: "retreat-beach-group.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      divyaCatBaz: file(relativePath: { eq: "retreat-divya-cat-baz.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      juliaCatVivek: file(relativePath: { eq: "retreat-vivek-cat-julia.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      retreatBlur: file(relativePath: { eq: "retreat-cat-group-blur.jpeg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      retreatForest: file(relativePath: { eq: "retreat-forest-group.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      newbiess19: file(relativePath: { eq: "newbiess19.jpg" }) {
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