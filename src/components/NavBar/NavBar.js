import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import { Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import styles from './NavBar.module.css'

const NavBar = () => {
    // TODO: Dark vs. Light NavBar
    // TODO: Styling

    console.log(styles);

    // insert room to choose dark or light navbar here
    // would look something like pushing the .Dark class onto everything
    // for now, we'll go with a default light navbar
    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "pcg-logo-dark.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    `)
    
    return (
        <div>
            <Navbar expand="lg">
                <Container className={styles.navContainer}>
                    <Navbar.Brand>
                        <Link to='/'>
                        <Img
                            fixed={data.file.childImageSharp.fixed}
                            alt="PCG logo"
                        />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="navBarResponsive">
                    <Nav className='ml-auto'>
                        <Nav.Item className={styles.navlinkBox}>
                            <Link to='/about' className={styles.navlink}>About</Link>
                        </Nav.Item>
                        <Nav.Item className={styles.navlinkBox}>
                            <Link to='/projects' className={styles.navlink}>Projects</Link>
                        </Nav.Item>
                        <Nav.Item className={styles.navlinkBox}>
                            <a href="https://medium.com/@phoenixconsulting" className={styles.navlink}>Blog</a>
                        </Nav.Item>
                        <Nav.Item className={styles.navlinkBox}>
                            <Link to='/join' className={styles.navlink}>Join</Link>
                        </Nav.Item>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;

