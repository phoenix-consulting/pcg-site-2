import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import { Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"


import styles from './NavBar.module.css'

const NavBar = (props) => {
    // We pass in a prop that tells us whether this guy is dark or light
    const isLight = props.light;

    // If the theme is light, then pass in light styles. If not, pass in dark styles.
    const navLinkStyles = [styles.navlink];
    const navElemStyles = [styles.navElement];
    if (isLight) {
        navLinkStyles.push(styles.navlinkLight);
    } else {
        navLinkStyles.push(styles.navlinkDark);
        navElemStyles.push(styles.navElementDark);
    }

    const data = useStaticQuery(graphql`
    query {
      redLogo: file(relativePath: { eq: "pcg-logo-dark.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      whiteLogo: file(relativePath: { eq: "pcg-logo-light.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    `)
    return (
        <div className={navElemStyles.join(' ')}>
            <Navbar expand="lg">
                <Container className={styles.navContainer}>
                    <Navbar.Brand>
                        <Link to='/'>
                        {isLight ? (
                            <Img
                            fixed={data.redLogo.childImageSharp.fixed}
                            alt="PCG logo"/>
                        ) : (
                            <Img
                            fixed={data.redLogo.childImageSharp.fixed}
                            alt="PCG logo"/>
                        )
                        }
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="navBarResponsive">
                    <Nav className='ml-auto'>
                        <Nav.Item className={styles.navlinkBox}>
                            <Link to='/about' className={navLinkStyles.join(' ')}>About</Link>
                        </Nav.Item>
                        <Nav.Item className={styles.navlinkBox}>
                            <Link to='/projects' className={navLinkStyles.join(' ')}>Projects</Link>
                        </Nav.Item>
                        <Nav.Item className={styles.navlinkBox}>
                            <a href="https://medium.com/@phoenixconsulting" className={navLinkStyles.join(' ')}>Blog</a>
                        </Nav.Item>
                        <Nav.Item className={styles.navlinkBox}>
                            <Link to='/apply' className={navLinkStyles.join(' ')}>Join</Link>
                        </Nav.Item>
                        <Nav.Item className={styles.navlinkBox}>
                            <a href="https://readysethealth.io" className={navLinkStyles.join(' ')}>Demo Day</a>
                        </Nav.Item>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;

