import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InfoSec from '../InfoSec/InfoSec'

import styles from "./AboutBeyond.module.css"
import { sponsors_and_affiliates } from '../../constants'

const AboutSponsors = () => {
    const sponsorAffiliate_logos = sponsors_and_affiliates.map((companyObj) => {
        return (
            <Col lg={2} className={styles.beyondImgContainer}>
                <img className={styles.beyondImg} alt={companyObj.name} src={'/sponsorsaffiliates/' + companyObj.pic}/>
            </Col>
        )
    })
    return (
        <div>
            <InfoSec 
            regtitle="Sponsors and Affiliates"
            smallsubtitle="Sponsors and affiliates aid Phoenix financially and projects-wise. In return, we provide
            recruiting assistance and collaborate to host exciting events."
            background="white"
            alignment="left">
                <Row>
                    {sponsorAffiliate_logos}
                </Row>
            </InfoSec>
        </div>
    )
}

export default AboutSponsors;