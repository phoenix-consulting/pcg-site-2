import React from 'react'
import InfoSec from '../InfoSec/Infosec'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import {Link} from 'gatsby'

import styles from './HomeCurr.module.css'
import { curr_sem_projs } from '../../constants'

const HomeCurr = () => {    
    const card_title_style = {
        height: '5vh',
        fontSize: '16px',
        fontFamily: 'Helvetica, sans-serif',
        fontWeight: 'bolder'
    }


    const clientCards = curr_sem_projs.map((cardObj) => {
        return (
            <Col sm>
                <Card className={styles.cardStyle}>
                    <Card.Body>
                        <Card.Title style={card_title_style}>{cardObj.name}</Card.Title>
                        <Card.Text>
                            {cardObj.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    })

    return (
        <InfoSec
            title="PHOENIX IN SPRING 2021"
            subtitle="This semester, our projects range from global expansion to DEI strategy."
            alignment="center"
            background="gray"
        >
        <Row className={styles.homeCards}>
            {clientCards}
            <Col sm>
                <Card className={styles.smallCardStyle}>
                    <Card.Body >
                        <Card.Title style={card_title_style}>Ready, Set, Startup!</Card.Title>
                        <Card.Text>
                            We're building a healthcare accelerator! Details still under wraps. Contact us if interested.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className={styles.smallCardStyleBot}>
                    <Card.Body>
                        <Card.Title style={card_title_style}>Increasing Accessibility</Card.Title>
                        <Card.Text>
                            We're giving back to our campus through public events, speakers, and workshops.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <h2 className={styles.readMore}>Read more about our projects <Link to="/projects" className={styles.readMoreLink}>here</Link>.</h2>
        </Row>
        </InfoSec>
    )
}

export default HomeCurr;