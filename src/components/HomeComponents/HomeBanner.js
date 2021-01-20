import React from 'react'
import Container from 'react-bootstrap/Container'
import styles from './HomeBanner.module.css'
import { DownCircleOutlined } from '@ant-design/icons'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const HomeBanner = () => {
    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "landing-page.png" }) {
        childImageSharp {
          fluid(maxHeight: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `)

    return (
        <div className={styles.bannerBack}>
            <Container>
                <Row>
                    <Col lg={5}>
                <h1 className={styles.bannerTitle}><span className={styles.bannerHighlight}>Improving healthcare,</span> 4 projects at a time.</h1>
                <p className={styles.bannerDescription}>Phoenix Consulting Group is a team of UC Berkeley 
                    students who consult for health-sector business problems.</p>
                <div className={styles.bannerIconBox} href="/#info">
                    <a href="./#homeaboutus">
                        <DownCircleOutlined style={{fontSize: "40px", cursor: "pointer"}} className={styles.bannerIcon}/>
                    </a>
                </div>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </div>
        
    )
}

export default HomeBanner;
