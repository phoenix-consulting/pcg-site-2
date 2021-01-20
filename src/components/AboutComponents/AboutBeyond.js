import React from 'react'
import InfoSec from '../InfoSec/InfoSec'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { alumni_companies } from '../../constants'
import { research_institutions } from '../../constants'
import styles from "./AboutBeyond.module.css"

const AboutBeyond = () => {
    const add_company_path = (pic) => {
        return "./companies/" + pic;
    }

    const add_research_path = (pic) => {
        return "./research/" + pic;
    }

    const company_logos = alumni_companies.map((companyObj) => {
        if (companyObj.name === "apple" || companyObj.name === "houseofreps" || companyObj.name === "forbes") {
            return (
                <Col lg={2} className={styles.beyondImgContainer}>
                    <img className={styles.appleImg} alt={companyObj.name} src={add_company_path(companyObj.pic)}/>
                </Col>
            )
        }
        return (
            <Col lg={2} className={styles.beyondImgContainer}>
                <img className={styles.beyondImg} alt={companyObj.name} src={add_company_path(companyObj.pic)}/>
            </Col>
        )
    })

    const research_logos = research_institutions.map((companyObj) => {
        return (
            <Col lg={2} className={styles.beyondImgContainer}>
                <img className={styles.beyondImg} alt={companyObj.name} src={add_research_path(companyObj.pic)}/>
            </Col>
        )
    })

    return (
        <div>
            <InfoSec
                regtitle="Beyond Phoenix"
                smallsubtitle="Our alumni and members work in almost every field, with a particular focus on deep tech, consulting,
                finance, healthcare, and pharmaceuticals. Many have also gone on to postgraduate education or research at some of the
                world's most prestigious institutions."
                background="white"
                alignment="left"
            >
            <Row>
            {company_logos}
            </Row>

            <Row style={{marginTop: "20px"}}>
            {research_logos}
            </Row>
            </InfoSec>
        </div>
    )
}

export default AboutBeyond;