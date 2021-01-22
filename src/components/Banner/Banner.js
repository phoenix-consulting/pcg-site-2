import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import styles from './Banner.module.css'

// props: title, message, buttonLink, buttonMsg, bg

const Banner = (props) => {
    // TODO: Styling and background logic
    const bgStyles = [styles.bannerGen];
    const titleStyles = [];
    const msgStyles = [];
    const buttonStyles = []
    if (props.bg === "red") {
        bgStyles.push(styles.bgRed);
        titleStyles.push(styles.bannerTitleRed);
        msgStyles.push(styles.bannerMsgRed);
        buttonStyles.push(styles.buttonRed);
    } else {
        bgStyles.push(styles.bgGray);
        titleStyles.push(styles.bannerTitleWhite);
        msgStyles.push(styles.bannerMsgWhite);
        buttonStyles.push(styles.buttonGray);
    }

    return (
        <div className={bgStyles.join(' ')}>
            <Container className={styles.bannerContainer}>
                <Row>
                    <Col sm={8}>
                    <h1 className={titleStyles.join(' ')}>{props.title}</h1>
                    <h2 className={msgStyles.join(' ')}>{props.message}</h2>
                    </Col>
                    <Col sm={4}>
                    </Col>
                </Row>
                <Button className={buttonStyles.join(' ')} href={props.buttonLink}>{props.buttonMsg}</Button>
                {props.children}
            </Container>
        </div>
    )
}

export default Banner;