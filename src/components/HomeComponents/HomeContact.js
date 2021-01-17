import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InfoSec from '../InfoSec/InfoSec'
import Button from 'react-bootstrap/Button'
import { Link } from 'gatsby'
import Carousel from 'react-bootstrap/Carousel'

import styles from './HomeContact.module.css'
import {social_media_links, home_carousel_testimonials} from '../../constants'

const HomeContact = () => {
    const socialMedia = social_media_links.map((linkObj) => {
        return (
            <div>
            <a className={styles.contactLink} href={linkObj.link}>{linkObj.name}</a>
            </div>
        )
    });

    const carouselDivs = home_carousel_testimonials.map((carouselObj) => {
        return (
            <Carousel.Item className={styles.carouselContent}>
                <Container style={{color: "white"}}>
                    <p>{carouselObj.testimonial}</p>
                    <p><i>{carouselObj.author}</i></p>
                </Container>
            </Carousel.Item>
        )
    })

    return (
        <div>
            <InfoSec
                title="CONTACT US"
                subtitle="Interested in getting in touch? You can reach us via our contact forms or find us on our social media accounts!"
                alignment="left"
                background="white">
            <Row className={styles.contactRow}>
                <Col sm className={styles.contactCol}>
                    <h3 className={styles.contactTitle}>Useful Links</h3>
                    {socialMedia}
                </Col>
                <Col sm className={styles.contactCol}>
                    <h3 className={styles.contactTitle}>For Students</h3>
                    <p>We’re looking for people excited to learn, solve problems, and make an impact.
                        If you’re interested, consider joining us!</p>
                    <Link to="/apply"><Button className={styles.contactButton} size='sm'>Apply</Button></Link>
                </Col>
                <Col sm className={styles.contactCol}>
                    <h3 className={styles.contactTitle}>For Companies</h3>
                    <p>We’re looking for exciting companies and nonprofits to work with. 
                        If you’re interested in partnering with us, please reach out!</p>
                    <Link to="/contact"><Button className={styles.contactButton} size='sm'>Contact Us</Button></Link>
                </Col>
            </Row>
            </InfoSec>
            <Carousel controls={false} indicators={false}>
                {carouselDivs}
            </Carousel>
        </div>
    )
}

export default HomeContact;