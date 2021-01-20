import React from 'react'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'

import { projects_carousel } from '../../constants'

import styles from './ProjectsCarousel.module.css'


const ProjectsCarousel = () => {

    const carouselDivs = projects_carousel.map((carouselObj) => {
        return (
            <Carousel.Item className={styles.carouselContent}>
                <Container style={{color: "white"}}>
                    <p>{carouselObj.testimonial}</p>
                    <p><i>{carouselObj.name}</i></p>
                </Container>
            </Carousel.Item>
        )
    })

    return (
        <div>
            <Carousel controls={false} indicators={false}>
                {carouselDivs}
            </Carousel>
        </div>
    )
}

export default ProjectsCarousel;