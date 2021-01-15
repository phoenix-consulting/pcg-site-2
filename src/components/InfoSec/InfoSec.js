import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './InfoSec.module.css'

// InfoSec makes use of the following props:
// - Title
// - Subtitle
// - Alignment
// It provides a good background and styling

const InfoSec = (props) => {
    // TODO: Styling and dynamic editing of alignment and background
    const bg_styling = ['bg']
    const bg_color = props.bg_color;
    console.log(bg_color)
    if (bg_color) {
        bg_styling.push(bg_color);
    }
    const bg_styles = bg_styling.join(' ')
    console.log(bg_styles)

    // Alignment logic
    const title_classes = []
    if (props.alignment === "center") {
        title_classes.push('center-align');
    } else if (props.alignment === "right") {
        title_classes.push('right-align');
    } else {
        title_classes.push('left-align');
    }
    const classString = title_classes.join(' ');

    return (
        <div className={styles.bg}>
            <Container>
                <Row>
                <Col sm={8}>
                <h1 className={styles.infoSecTitle}>{props.title}</h1>
                <h2 className={styles.infoSecDescription}>{props.subtitle}</h2>
                </Col>
                </Row>
            {props.children}
            </Container>
        </div>
    )
};

export default InfoSec;