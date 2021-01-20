import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import styles from "./ProjectsServices.module.css"


const ProjectsServices = () => {
    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "projectwork.jpeg" }) {
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
            <Row>
            <Col sm style={{padding: "0px"}}>
            <Img fluid={data.file.childImageSharp.fluid} alt="Project Work"/>
            </Col>
            <Col sm style={{padding: "0px"}}>
            <div className={styles.servicesWrapper}>
            <div className={styles.servicesTotalTitle}>Our Services</div>
            <div className={styles.servicesSubtitle}>We provide six main business services. Projects 
            combine one or more of these areas with technical skills and a strong area of specialization.
            </div>
            <Row className={styles.servicesRow}>
                <Col className={styles.serviceWrapper}>
                <div><img className={styles.serviceImg} src="./services/corporate-strategy.png"/></div>
                <div className={styles.serviceTitle}>Corporate Strategy</div>
                </Col>
                <Col className={styles.serviceWrapper}>
                <div><img className={styles.serviceImg} src="./services/financial-analysis.png"/></div>
                <div className={styles.serviceTitle}>Financial and Data Analysis</div>
                </Col>
            </Row>
            <Row className={styles.servicesRow}>
                <Col className={styles.serviceWrapper}>
                <div><img className={styles.serviceImg} src="./services/market-analysis.png"/></div>
                <div className={styles.serviceTitle}>Market Research</div>
                </Col>
                <Col className={styles.serviceWrapper}>
                <div><img className={styles.serviceImg} src="./services/marketing.png"/></div>
                <div className={styles.serviceTitle}>Sales and Marketing</div>
                </Col>
            </Row>
            <Row className={styles.servicesRow}>
                <Col className={styles.serviceWrapper}>
                <div><img className={styles.serviceImg} src="./services/operations.png"/></div>
                <div className={styles.serviceTitle}>Operations Analysis and Management</div>
                </Col>
                <Col className={styles.serviceWrapper}>
                <div><img className={styles.serviceImg} src="./services/product-development.png"/></div>
                <div className={styles.serviceTitle}>Product Design and Development</div>
                </Col>
            </Row>
            </div>
            </Col>
            </Row>

        </div>
    )
}

export default ProjectsServices;