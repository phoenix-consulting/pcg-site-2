import React from 'react' 
import InfoSec from '../InfoSec/InfoSec'
import InfoCard from '../InfoCard/InfoCard'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { phoenix_role_cards } from '../../constants'


const AboutExperience = () => {
    const container_style = {
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


    const experienceCards = phoenix_role_cards.map((roleObj, index) => {
        let color_string = "";


        switch (index) {
            case 0:
                color_string = "#63aec7";
                break;
            case 1:
                color_string = "#489fbe";
                break;
            case 2:
                color_string = "#2a92b7";
                break;
            case 3:
                color_string = "#166f8f";
                break;
            case 4:
                color_string = "#02526f";
                break;
            case 5:
                color_string = "#013d53";
        }
        console.log(color_string);
        return (
            // <Col lg={3} style={container_style}>
            //     <InfoCard
            //         title={roleObj.position}
            //         description={roleObj.description}
            //         backgroundColor={color_string}>
            //     </InfoCard>
            // </Col>
            <div style={{flex: "0 0 auto", width: "270px"}}>
                <InfoCard
                    title={roleObj.position}
                    description={roleObj.description}
                    backgroundColor={color_string} 
                    height="300px"
                    width="">
                </InfoCard>
            </div>
        )
    });

    return (
        <div>
            <InfoSec
                regtitle="Our Organization"
                smallsubtitle="Our entire organization is non-hierarchical, but we assign roles to help 
                us stay organized. Here are some of the ways our members contribute over time."
                alignment="left"
                background="white">

            <div style={{display: "flex", flexWrap: "nowrap", overflowX: "auto"}}>
                {experienceCards}
            </div>
            {/* <Row lg={4}>
            {experienceCards}
            </Row> */}
            </InfoSec>
        </div>
    )
}

export default AboutExperience;