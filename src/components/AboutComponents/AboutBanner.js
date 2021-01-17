import React from 'react'
import Banner from '../Banner/Banner'
import Button from 'react-bootstrap/Button'

import styles from './AboutBanner.module.css'

const AboutBanner = () => {
    return (
        <div>
            <Banner
                title="OUR MISSION"
                message="We train the healthcare leaders of the future by solving the healthcare problems of today."
                bg="red"
                buttonMsg="Read more on our blog!"
                buttonLink="https://medium.com/@phoenixconsulting"
            >
            </Banner>
        </div>
    )
}

export default AboutBanner;