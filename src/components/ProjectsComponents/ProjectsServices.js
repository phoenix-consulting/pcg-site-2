import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import InfoSec from '../InfoSec/InfoSec'

import styles from "./ProjectsServices.module.css"


const ProjectsServices = () => {
    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "proj-banner.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `)

    return (
        <div>
            <Img fluid={data.file.childImageSharp.fluid} alt="Project Work"/>
            <InfoSec
            regtitle="Our Services"
            smallsubtitle="We provide six main business services. 
            Projects combine one or more of these areas with technical skills and a strong area of specialization."
            >
            <Row>
            <Col sm style={{padding: "0px"}}>
            <div className={styles.servicesWrapper}>
            <Row>
                <Col className={styles.serviceWrapper} lg={2}>
                <div><img className={styles.serviceImg} src="./services/corporate-strategy.png"/></div>
                <div className={styles.serviceTitle}>Corporate Strategy and Expansion</div>
                </Col>
                <Col className={styles.serviceWrapper} lg={2}>
                <div><img className={styles.serviceImg} src="./services/financial-analysis.png"/></div>
                <div className={styles.serviceTitle}>Financial and Data Analysis</div>
                </Col>
                <Col className={styles.serviceWrapper} lg={2}>
                <div><img className={styles.serviceImg} src="./services/market-analysis.png"/></div>
                <div className={styles.serviceTitle}>Market Research and Landscaping</div>
                </Col>
                <Col className={styles.serviceWrapper} lg={2}>
                <div><img className={styles.serviceImg} src="./services/marketing.png"/></div>
                <div className={styles.serviceTitle}>Sales, Marketing, and Content Strategy</div>
                </Col>
                <Col className={styles.serviceWrapper} lg={2}>
                <div><img className={styles.serviceImg} src="./services/operations.png"/></div>
                <div className={styles.serviceTitle}>Operations Analysis and Management</div>
                </Col>
                <Col className={styles.serviceWrapper} lg={2}>
                <div><img className={styles.serviceImg} src="./services/product-development.png"/></div>
                <div className={styles.serviceTitle}>Product Design and Development</div>
                </Col>
            </Row>
            </div>
            </Col>
            </Row>

            </InfoSec>
            

        </div>
    )
}

export default ProjectsServices;