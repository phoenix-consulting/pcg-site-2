import React from 'react'
import InfoSec from '../InfoSec/Infosec'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Card } from 'antd'

import styles from './HomeCurr.module.css'

const HomeCurr = () => {
    const card_head_style = {
        fontFamily: "Helvetica",
    }

    const card_body_style = {
        fontFamily: "Helvetica",
        fontWeight: "lighter",
    }

    return (
        <InfoSec
            title="PHOENIX IN SPRING 2021"
            subtitle="This semester we again work with 4 clients of varying size and scope."
        >
        <Row className={styles.homeCards}>
            <Col>
                <Card 
                hoverable
                extra
                bordered
                title="Ambry Genetics" 
                headStyle={card_head_style} 
                bodyStyle={card_body_style}>Ambry is a market leader in genetic testing
                and allows us to build on previous experience with Myriad Genetics and Amgen.</Card>
            </Col>
            <Col>
                <Card 
                hoverable
                extra
                bordered
                title="Clarigent Health" 
                headStyle={card_head_style} 
                bodyStyle={card_body_style}>A longstanding issue exacerbated by the COVID-19 Pandemic, mental
                health has been getting acutely worse in America for years. We are excited to partner with Clarigent
                Health, a company using AI to track mental health over time. </Card>
            </Col>
            <Col>
                <Card 
                hoverable
                extra
                bordered
                title="Mental Health America" 
                headStyle={card_head_style} 
                bodyStyle={card_body_style}>Phoenix consults pro bono with a nonprofit every semester in an effort to
                help members gain exposure to NPOs and give back to the health community. Established in the early 1900s
                and having branches all over the nation, MHA is a unique opportunity for us to create huge impact immediately.</Card>
            </Col>
            <Col>
                <Card 
                hoverable
                extra
                bordered
                title="Cedar-Sinai Accelerator" 
                headStyle={card_head_style} 
                bodyStyle={card_body_style}>Out of all the industries out there, structural inequality hits healthcare
                the hardest. By partnering with a large hospital system's startup accelerator, we have a chance to concretely
                make good on our commitments to racial equality.</Card>
            </Col>
        </Row>
        </InfoSec>
    )
}

export default HomeCurr;