import React from 'react'
import Banner from '../Banner/Banner'
import Button from 'react-bootstrap/Button'

import styles from './AboutBanner.module.css'

const AboutBanner = () => {
    return (
        <div>
            <Banner
                title="OUR CLUB"
                message="We're a consulting firm, healthcare hub, and UC Berkeley student organization
                invested in growth, impact, and community."
                bg="gray"
                buttonMsg="Latest Updates &#8594;"
                buttonLink="https://medium.com/@phoenixconsulting"
            >
            </Banner>
        </div>
    )
}

export default AboutBanner;