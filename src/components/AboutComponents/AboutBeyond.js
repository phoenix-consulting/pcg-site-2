import React from 'react'
import InfoSec from '../InfoSec/InfoSec'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { alumni_companies } from '../../constants'
import styles from "./AboutBeyond.module.css"

const AboutBeyond = () => {
    const add_path = (pic) => {
        return "./beyond/" + pic;
    }

    const company_logos = alumni_companies.map((companyObj) => {
        return (
            <Col lg={3} className={styles.beyondImgContainer}>
                <img className={styles.beyondImg} alt={companyObj.name} src={add_path(companyObj.pic)}/>
            </Col>
        )
    })

    return (
        <div>
            <InfoSec
                title="BEYOND PHOENIX"
                subtitle="Our members have continued their success across every conceivable industry."
                background="white"
                alignment="center"
            >
            <Row>
            {company_logos}
            </Row>
            </InfoSec>
        </div>
    )
}

export default AboutBeyond;