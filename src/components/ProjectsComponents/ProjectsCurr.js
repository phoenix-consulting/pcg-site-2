import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import {Link} from 'gatsby'
import InfoCard from '../InfoCard/InfoCard'
import InfoSec from '../InfoSec/InfoSec'

import styles from './ProjectsCurr.module.css'
import { curr_sem_projs } from '../../constants'
import { curr_sem } from '../../constants'

const ProjectsCurr = () => {    

    const clientCards = curr_sem_projs.map((cardObj) => {
        return (
            <div style={{display: "flex", justifyContent: "center"}}>
            <InfoCard
            height="420px"
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
            title="PHOENIX IN FALL 2022"
            subtitle="This semester, our projects range from data management market research to CRO lab services."
            alignment="center"
            background="gray"
        >
        <Row className={styles.homeCards} style={{display: "flex", justifyContent: "center"}}>
            {clientCards}
            <div>
            <InfoCard
                height="210px"
                width="200px"
                titleHeight="16px"
                backgroundColor="#e54a51"
                title="Ready, Set, Health!"
                description="We're building a healthcare accelerator! Visit readysethealth.io for more information."
                >
                </InfoCard>
            <InfoCard
                height="210"
                width="200px"
                titleHeight="16px"
                backgroundColor="#e54a51"
                title="Increasing Accessibility"
                description="We're giving back to our campus through public events, speakers, and workshops."
                >
            </InfoCard>
            </div>
        </Row>
        </InfoSec>
    )
}

export default ProjectsCurr;
