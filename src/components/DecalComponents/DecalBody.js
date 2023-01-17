import React from 'react'
import InfoSec from '../InfoSec/InfoSec'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

import { decal_instructors, decal_faq_questions } from '../../constants'
import styles from '../ProjectsComponents/PastProjects.module.css'
import infoStyle from '../InfoSec/InfoSec.module.css'
import faqStyle from '../ApplyComponents/ApplyFAQ.module.css'

import yusherz from './instructors/yusherz.jpg'
import { BoldOutlined, LeftCircleFilled } from '@ant-design/icons'

const DecalBody = () => {

    const titleStyles = [infoStyle.infoSecTitle];
    const subtitleStyles = [infoStyle.infoSecDescription];
    const regtitleStyles = [infoStyle.infoSecRegTitle];
    const headerStyles = [];
    const bgStyles = [infoStyle.bg];
    const smallSubStyles = [infoStyle.infoSecSmallSub];
    const instructors = {yusherz}
    
    const faq_questions = decal_faq_questions.map((faqObject, index) => {
            if (index == 2) {
                return (
                    <div className={faqStyle.questionWrapper}>
                    <div className={faqStyle.question}>{faqObject.question}</div>
                    <div className={faqStyle.answer}>{faqObject.answer}</div>
                    <div className={faqStyle.answer}>{faqObject.answer2}</div>
                    </div>
                )
            }
        
            return (
                <div className={faqStyle.questionWrapper}>
                    <div className={faqStyle.question}>{faqObject.question}</div>
                    <div className={faqStyle.answer}>{faqObject.answer}</div>
                </div>
            )
        })

    const pastProjectCards = decal_instructors.map((projObj) => {
            return (
                <Col style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div className={styles.cardWrapper}>
                    <div className={styles.imageWrapper}>
                    <img src={projObj.image} className={styles.cardImage} style={{borderRadius: 5, width:250, marginTop:20}}/>
                
                    </div>
                    <div className={styles.textWrapper}>
                    <div className={styles.cardTitle}><b>{projObj.name} ({projObj.role}) </b></div>
                    <div className={styles.cardType}><b>Pronouns: </b>{projObj.pronouns}</div>
                    </div>
                </div>
                </Col>
            )
    })

    return (
        <div>
            <img src={instructors[0]} className={styles.cardImage}/>
            <InfoSec
                regtitle="Course Description"
                smallsubtitle="Introduction to Healthcare Consulting is an 11-week long introductory course designed for students with an interest in business or healthcare."
                smallsubtitle2="The first few weeks of the course are lecture-based and will delve into the variety of careers in healthcare, current problems in the industry, and provide an introduction to adjacent fields such as biotechnology and pharmaceuticals."
                smallsubtitle3="The second half of the course will be focused on group work, simulating a healthcare consulting case and equipping students with the fundamental skills required to pursue a career in healthcare consulting. Overall, this course will provide students with an engaging and comprehensive look into healthcare consulting and adjacent industries."
                background="gray"
                alignment="left"
            >
                <div>
                    Check out the syllabus  
                    <a href="https://docs.google.com/document/d/13MZHTgfgEusWo8M7wsO0tY-BnQzSckfKnciR1JIKC8I/edit"> here</a>
                </div>
            </InfoSec>

            <div id="faq">
                <InfoSec regtitle="Frequently Asked Questions" background="white">
                    {faq_questions}
                    <div>
                        Questions? Email us at 
                        <a href = "mailto: ihcdecal@gmail.com"> ihcdecal@gmail.com.</a>
                    </div>
                </InfoSec>
            </div>

            <InfoSec regtitle="Course Staff" 
            smallsubtitle=""
            background="gray">
            <Row lg={3}>
                {pastProjectCards}
            </Row>
            </InfoSec>

            <div className='DecalRow' style={{margin:100}}>
                <div style={{textAlign:'center', marginTop:-40, marginBottom:30, fontWeight:'bold', fontSize: 27}}>
                    Course Mentors
                </div>
                <div className='DecalCol' style={{float: 'left', width:'30%', marginRight:20, textAlign:'center'}}>
                    <div style={{paddingBottom: 20, fontSize: 24, fontWeight: 'bold'}}>
                        Richard Harland
                    </div>
                    <div>
                        Richard Harland is a Professor of Genetics, Genomics, and Development and has a highly specialized technical background in biology. 
                    </div>
                </div>
                <div className='DecalCol' style={{display: 'inline-block', width:'30%', marginLeft:40, textAlign:'center'}}>
                    <div style={{paddingBottom: 20, fontSize: 24, fontWeight: 'bold'}}>
                        Darren Cooke
                    </div>
                    <div>
                        Darren Cooke is the Executive Director of Berkeley’s Life Sciences Entrepreneurship Center and has a rich background in healthcare, business, and entrepreneurship. 
                    </div>
                </div>
                <div className='DecalCol' style={{float: 'right', width:'30%', marginLeft: 20, textAlign:'center'}}>
                    <div style={{paddingBottom: 20, fontSize: 24, fontWeight: 'bold'}}>
                        Biotech Connection Bay Area
                    </div>
                    <div>
                        This course is also mentored by Biotech Connection Bay Area, a 501(c)3 non-profit organization led by graduate students and postdoctoral scholars in the San Francisco Bay Area. Learn more about them
                        <a href="https://biotechconnectionbay.org/"> here.</a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default DecalBody;
