import React from 'react'
import InfoSec from '../InfoSec/InfoSec'
import Img from "gatsby-image"
import { useStaticQuery } from 'gatsby'

import styles from './AboutMission.module.css'

const AboutMission = () => {
    const data = useStaticQuery(graphql`
    query {
      banquetBoat: file(relativePath: { eq: "banquet-boat-group.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }`)

    return (
        <div>
            <InfoSec
                regtitle="Mission Statement"
                alignment="center"
                background="gray"
            >
            <div>
            <h3 className={styles.missionStatement}>We train the healthcare leaders of tomorrow by solving the healthcare problems of today.</h3>
            </div>
            <div className={styles.imgContainer}>
                <Img fluid={data.banquetBoat.childImageSharp.fluid} className={styles.missionImg}></Img>
            </div>
            </InfoSec>
            <div className={styles.imgRoundedBackground}>
            </div>
        </div>
    )
}

export default AboutMission;
