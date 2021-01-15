import React from 'react'
import Container from 'react-bootstrap/Container'

import styles from './HomeBanner.module.css'

const Banner = (props) => {
    // TODO: Styling and background logic
    return (
        <div className={styles.bgGray}>
            <Container>
                <h1>{props.title}</h1>
                <h2>{props.message}</h2>
            </Container>
        </div>
    )
}

export default Banner;