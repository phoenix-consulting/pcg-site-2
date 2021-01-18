import React from 'react' 
import InfoSec from '../InfoSec/InfoSec'
import InfoCard from '../InfoCard/InfoCard'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { phoenix_role_cards } from '../../constants'


const AboutExperience = () => {
    const container_style = {
        paddingTop: "20px",
        fontFamily: "Helvetica",
        fontWeight: "lighter",
        fontSize: "15px",
    }

    const position_style = {
        fontFamily: "Helvetica",
        fontWeight: "bolder",
        fontSize: "20px",
        color: "#ad1457"
    }


    const experienceCards = phoenix_role_cards.map((roleObj) => {
        return (
            <Col lg={4} style={container_style}>
                <InfoCard
                    title={roleObj.position}
                    description={roleObj.description}>
                </InfoCard>
            </Col>
        )
    });

    return (
        <div>
            <InfoSec
                title="OUR ORGANIZATION"
                subtitle="Our entire organization is non-hierarchical, but we assign roles to help 
                us stay organized. Here are some of the ways our members contribute over time."
                alignment="left"
                background="white">
            <Row lg={4}>
            {experienceCards}
            </Row>
            </InfoSec>
        </div>
    )
}

export default AboutExperience;