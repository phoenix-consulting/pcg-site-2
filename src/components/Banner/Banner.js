import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './Banner.module.css'

const Banner = (props) => {
    // TODO: Styling and background logic
    const bgStyles = [styles.bannerGen];
    const titleStyles = [];
    const msgStyles = [];
    if (props.bg === "red") {
        bgStyles.push(styles.bgRed);
        titleStyles.push(styles.bannerTitleRed);
        msgStyles.push(styles.bannerMsgRed);
    } else {
        bgStyles.push(styles.bgGray);
        titleStyles.push(styles.bannerTitleWhite);
        msgStyles.push(styles.bannerMsgWhite);
    }

    return (
        <div className={bgStyles.join(' ')}>
            <Container className={styles.bannerContainer}>
                <Row>
                    <Col sm={10}>
                    <h1 className={titleStyles.join(' ')}>{props.title}</h1>
                    <h2 className={msgStyles.join(' ')}>{props.message}</h2>
                    </Col>
                    <Col sm={2}>
                    </Col>
                </Row>
                {props.children}
            </Container>
        </div>
    )
}

export default Banner;