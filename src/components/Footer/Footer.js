import React from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Link, useStaticQuery } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
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

    const socialLinks = social_media_links.map((linkObj) => {
        return (
            <div><a href={linkObj.link} className={styles.linkCatLink}>{linkObj.name}</a></div>
        )
    })

    return (
        <div style={{backgroundColor: "#f5f5f5"}}>
            <Container className={styles.footerContainer}>
                <Row> {/* This is the top row of the footer, containing everything except copyright */}
                    <Col sm>
                        <Link to='/'>
                            <Img fixed={data.file.childImageSharp.fixed} alt="PCG logo"/>
                        </Link>
                        <div style={{marginTop: "20px"}}>
                        <a href="https://www.ocf.berkeley.edu">
                            <img src="https://www.ocf.berkeley.edu/hosting-logos/ocf-hosted-penguin.svg"
                                alt="Hosted by the OCF" style={{width: "30%"}}/>
                        </a>
                        </div>
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
                        <div><AnchorLink to='/apply#faq' className={styles.linkCatLink}>FAQs</AnchorLink></div>
                        <div><Link to='/apply' className={styles.linkCatLink}>Contact Us</Link></div>
                    </Col>
                    <Col sm>
                        <div className={styles.linkCatTitle}>Companies</div>
                        <div><Link to='/projects' className={styles.linkCatLink}>Projects</Link></div>
                        <div><AnchorLink to='/contact#FAQ' className={styles.linkCatLink}>FAQs</AnchorLink></div>
                        <div><Link to='/contact' className={styles.linkCatLink}>Contact Us</Link></div>
                    </Col>
                    <Col sm>
                        <div className={styles.linkCatTitle}>Social Media</div>
                        {socialLinks}
                    </Col>
                </Row>
                <Row>
                    <Col className={styles.siteCustody}>
                        <p>We are a student group acting independently of the University of California. We take full responsibility for our organization and this web site.</p>
                        <p>Built with love and React from 2020-2021. This website takes inspiration from those of Blockchain@Berkeley, Sequoia Capital, Codebase, and Blueprint.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;