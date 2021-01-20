import React from 'react'
import InfoSec from '../InfoSec/InfoSec'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { past_projects } from '../../constants'
import styles from './PastProjects.module.css'

const PastProjects = () => {

    const pastProjectCards = past_projects.map((projObj) => {
        return (
            <Col style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div className={styles.cardWrapper}>
                <div className={styles.imageWrapper}>
                <img src={"./pastclients/" + projObj.image} className={styles.cardImage}/>
                </div>
                <div className={styles.textWrapper}>
                <div className={styles.cardTitle}><b>Industry: </b>{projObj.industry}</div>
                <div className={styles.cardType}><b>Service: </b>{projObj.type}</div>
                </div>
            </div>
            </Col>
        )
    })

    return (
        <div>
            <InfoSec regtitle="Selected Past Projects" 
            smallsubtitle="For more specific work samples, check out our Contact Us page!"
            background="gray">
            <Row lg={4}>
                {pastProjectCards}
            </Row>
            </InfoSec>
        </div>
    )
}

export default PastProjects;