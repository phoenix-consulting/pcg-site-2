import React from 'react'
import InfoSec from '../InfoSec/InfoSec'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { past_projects } from '../../constants'
import styles from '../ProjectsComponents/PastProjects.module.css'

const DecalBody = () => {
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
            <InfoSec
                regtitle="Course Description"
                smallsubtitle="Introduction to Healthcare Consulting is an 11-week long introductory course designed for students with an interest in business or healthcare."
                smallsubtitle2="The first few weeks of the course are lecture-based and will delve into the variety of careers in healthcare, current problems in the industry, and provide an introduction to adjacent fields such as biotechnology and pharmaceuticals."
                smallsubtitle3="The second half of the course will be focused on group work, simulating a healthcare consulting case and equipping students with the fundamental skills required to pursue a career in healthcare consulting. Overall, this course will provide students with an engaging and comprehensive look into healthcare consulting and adjacent industries."
                background="white"
                alignment="left"
            >
                <div>
                    Check out the syllabus  
                    <a href="https://docs.google.com/document/d/18Hi4T6ICq4Ow9isT1ccPp5EZJSsQUhfJrgx58L3r6rE/edit"> here</a>
                </div>
            </InfoSec>
            <div style={{padding:50}}>
                <div>
                    Who can apply?
                </div>
                <div>
                    Anyone! There are no prerequisites for this course. 
                </div>
                <div>
                    How many units is it? 
                </div>
                <div>
                    This DeCal is 1 unit and P/NP. 
                </div>
                <div>
                    When is it?
                </div>
                <div>
                    This semester, we will be holding in-person classes on Monday from 8-9:30PM PST at the Bakar BioEnginuity Hub Studio. 
                </div>
            </div>
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

export default DecalBody;
