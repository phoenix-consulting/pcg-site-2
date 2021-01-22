import React from 'react'
import InfoSec from '../InfoSec/Infosec'
import CountUp from "react-countup"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { ArrowRightOutlined } from '@ant-design/icons'
import { Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import styles from './HomeAbout.module.css'
import { count_up_objs } from '../../constants'

const HomeAbout = () => {
    // TODO: VISIBILITY SENSOR
    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "group-shoot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `)

    const countups = count_up_objs.map((countUpObj) => {
        return (
            <Col sm>
                <CountUp duration={5} start={0} end={countUpObj.number} className={styles.countUpNumber}/>
                <p className={styles.countUpDescription}>{countUpObj.description}</p>
            </Col>
        )
    })

    return (
        <div id="homeaboutus">
        <InfoSec
            title="ABOUT US"
            subtitle="We’re a diverse community of engineers, scientists, business leaders, 
            and policymakers with one vision: train the healthcare leaders of tomorrow 
            by solving the healthcare problems of today. Our members grow together through 
            high-impact consulting projects and our club is a hub for healthcare innovation."
            alignment="left"
            background="white"
        >
            <Row className={styles.homeAbout}>
                {countups}
                <Col sm>
                    <ArrowRightOutlined href="/about" style={{fontSize: "65px"}} className={styles.countUpArrow}>
                        <Link to="/about"></Link>
                    </ArrowRightOutlined>
                    <div>
                        <Link to="/about" className={styles.countUpLink}>More about Phoenix</Link>
                    </div>
                </Col>
            </Row>
        </InfoSec>
        <Col style={{padding: '0px'}}>
        <Img fluid={data.file.childImageSharp.fluid} alt="PCG logo" className={styles.picture}/>
        </Col>
            {/* <Col className={styles.pictureBuffer} sm={4}>
            </Col> */}
        </div>
    )
}

export default HomeAbout;