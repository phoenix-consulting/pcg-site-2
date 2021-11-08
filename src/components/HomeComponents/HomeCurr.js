import React from 'react'
import InfoSec from '../InfoSec/Infosec'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import {Link} from 'gatsby'
import InfoCard from '../InfoCard/InfoCard'

import styles from './HomeCurr.module.css'
import { curr_sem_projs } from '../../constants'

const HomeCurr = () => {    

    const clientCards = curr_sem_projs.map((cardObj) => {
        return (
            <div style={{display: "flex", justifyContent: "center"}}>
            <InfoCard
            height="300px"
            titleHeight="35px"
            width="200px"
            backgroundColor="#266f8b"
            title={cardObj.name}
            description={cardObj.description}
            >
            </InfoCard>
            </div>




            // <Col sm>
            //     <Card className={styles.cardStyle}>
            //         <Card.Body>
            //             <Card.Title className={styles.cardTitleStyle}>{cardObj.name}</Card.Title>
            //             <Card.Text>
            //                 {cardObj.description}
            //             </Card.Text>
            //         </Card.Body>
            //     </Card>
            // </Col>
        )
    })

    return (
        <InfoSec
            title="PHOENIX IN FALL 2021"
            subtitle="This semester, our projects range from international marketing strategy to therapeutic treatment analysis."
            alignment="center"
            background="gray"
        >
        <Row className={styles.homeCards} style={{display: "flex", justifyContent: "center"}}>
            {clientCards}
            <div>
            <InfoCard
                height="140px"
                width="200px"
                titleHeight="16px"
                backgroundColor="#e54a51"
                title="Ready, Set, Health!"
                description="We're building a healthcare accelerator! Check out the Demo Day link for more information."
                >
                </InfoCard>
            <InfoCard
                height="140px"
                width="200px"
                titleHeight="16px"
                backgroundColor="#e54a51"
                title="Increasing Accessibility"
                description="We're giving back to our campus through public events, speakers, and workshops."
                >
            </InfoCard>
            </div>

            {/* <Col sm>
                <Card className={styles.smallCardStyle}>
                    <Card.Body >
                        <Card.Title className={styles.cardTitleStyle}>Ready, Set, Startup!</Card.Title>
                        <Card.Text>
                            We're building a healthcare accelerator! Details still under wraps. Contact us if interested.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className={styles.smallCardStyleBot}>
                    <Card.Body>
                        <Card.Title className={styles.cardTitleStyle}>Increasing Accessibility</Card.Title>
                        <Card.Text>
                            We're giving back to our campus through public events, speakers, and workshops.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col> */}
        </Row>
        <Row>
            <h2 className={styles.readMore}>Read more about our projects <Link to="/projects" className={styles.readMoreLink}>here</Link>.</h2>
        </Row>
        </InfoSec>
    )
}

export default HomeCurr;