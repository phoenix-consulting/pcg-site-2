import React from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

// import images here

import styles from './Footer.module.css'

import { social_media_links } from "../../constants"

const Footer = () => {
    // TODO: Styling
    // TODO: Images
    // TODO: Background colors
    // TODO: Link double checks

    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "pcg-logo-dark.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    `)

    return (
        <div>
            <Container className={styles.footerContainer}>
                <Row> {/* This is the top row of the footer, containing everything except copyright */}
                    <Col sm>
                        <Link to='/'>
                            <Img fixed={data.file.childImageSharp.fixed} alt="PCG logo"/>
                        </Link>
                    </Col>
                    <Col sm>
                        <div className={styles.linkCatTitle}>General</div>
                        <div><Link to='/about' className={styles.linkCatLink}>About</Link></div>
                        <div><Link to='/projects' className={styles.linkCatLink}>Projects</Link></div>
                        <div><a href="https://medium.com/@phoenixconsulting" className={styles.linkCatLink}>Blog</a></div>
                    </Col>
                    <Col sm>
                        <div className={styles.linkCatTitle}>Students</div>
                        <div><Link to='/apply' className={styles.linkCatLink}>Apply</Link></div>
                        <div><Link to='/apply#FAQ' className={styles.linkCatLink}>FAQs</Link></div>
                        <div><Link to='/apply#Contact' className={styles.linkCatLink}>Contact Us</Link></div>
                    </Col>
                    <Col sm>
                        <div className={styles.linkCatTitle}>Companies</div>
                        <div><Link to='/projects' className={styles.linkCatLink}>Projects</Link></div>
                        <div><Link to='/contact#FAQ' className={styles.linkCatLink}>FAQs</Link></div>
                        <div><Link to='/contact' className={styles.linkCatLink}>Contact Us</Link></div>
                    </Col>
                    <Col sm>
                        <div className={styles.linkCatTitle}>Social Media</div>
                    </Col>
                </Row>
                <Row>
                    <Col className={styles.siteCustody}>
                        <p>We are an independent group of the University of California and 
                            we take full responsibility for this website.</p>
                        <p>Built with love and React from 2020-2021. This website takes inspiration from those of Codebase, Blueprint, Blockchain@Berkeley, and Sequoia Capital.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;