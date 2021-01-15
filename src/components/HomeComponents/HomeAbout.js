import React from 'react'
import InfoSec from '../InfoSec/Infosec'
import CountUp from "react-countup"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { ArrowRightOutlined } from '@ant-design/icons'
import { Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"


import styles from './HomeAbout.module.css'

const HomeAbout = () => {
    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "group-shoot.jpg" }) {
        childImageSharp {
          fixed(width: 1000) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    `)


    return (
        <div>
        <InfoSec
            title="ABOUT US"
            subtitle="We’re a diverse community of engineers, scientists, business leaders, 
            and policymakers with one vision: train the healthcare leaders of tomorrow 
            by solving the healthcare problems of today. Our members grow together through 
            high-impact consulting projects and our club is a hub for healthcare innovation.">
            <Row className={styles.homeAbout}>
                <Col sm>
                    <CountUp start={0} end={4} duration={5} className={styles.countUpNumber}/>
                    <p className={styles.countUpDescription}>projects every semester</p>
                </Col>
                <Col sm>
                    <CountUp start={0} end={32} duration={5} className={styles.countUpNumber}/>
                    <p className={styles.countUpDescription}>projects completed so far</p>
                </Col>
                <Col sm>
                    <CountUp start={0} end={33} duration={5} className={styles.countUpNumber}/>
                    <p className={styles.countUpDescription}>active members and over 70 alumni</p>
                </Col>
                <Col sm>
                    <CountUp start={0} end={1} duration={5} className={styles.countUpNumber}/>
                    <p className={styles.countUpDescription}>Phoenix family</p>
                </Col>
                <Col sm>
                    <ArrowRightOutlined style={{fontSize: "65px", cursor: "pointer"}} className={styles.countUpArrow}/>
                    <p className={styles.countUpDescription}>More about Phoenix</p>
                </Col>
            </Row>
        
        </InfoSec>
        <Row>
            <Col>
            <Img fixed={data.file.childImageSharp.fixed} alt="PCG logo" className={styles.picture}/>
            </Col>
            <Col className={styles.pictureBuffer}>
            </Col>
        </Row>
        </div>
    )
}

export default HomeAbout;