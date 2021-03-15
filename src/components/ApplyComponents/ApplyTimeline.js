import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import InfoSec from '../InfoSec/InfoSec'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import { recruitment_events } from '../../constants'
import styles from './ApplyTimeline.module.css'
import './ApplyTimeline.css'

const ApplyTimeline = () => {
    const timeline_events = recruitment_events.map((eventObj) => {
        return (
            <VerticalTimelineElement 
                className={styles.timelineEvent}
                textclassName={styles.timelineEventText}
                date={eventObj.dateTime}
                contentStyle={{ background: 'white', color: '#555555'}}
                contentArrowStyle={{ borderRight: '7px solid white' }}
                iconStyle={{ background: '#ad1457', color: '#ad1457' }}
                >
            <div className={styles.timelineTitle}>{eventObj.event}</div>
            <div>{eventObj.description}</div>
            </VerticalTimelineElement>
        )
    })
    return (
        <div>
            <InfoSec background="gray" alignment="center" regtitle="Spring 2021 Recruitment Timeline" subtitle="All times are shown in PST." >
            {/* <div className={styles.timelineBigTitle}>Recruitment Timeline</div> */}
            <div className={styles.buttonContainer}>
                <Button className={styles.Button}
                href="https://docs.google.com/forms/d/e/1FAIpQLSeqfrvv8E6UaVwc2txsNG0zDEg04jJhMcFcypAnUQDKZ616sQ/viewform">
                    Chat with Us!</Button>
                <Button className={styles.Button}
                href="https://docs.google.com/document/d/1hiHDoe-Dk0yNREaR98m_9fp4V5PosxU4uvywp66AaaM/edit">
                    Zoom Links</Button>
                <Button className={styles.Button} 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdWtBebBwGcRc7E2NGG6J88xHRwNrH3oUCh4ZW5lu3qeMEsFA/viewform">
                    Mailing List</Button>
            </div>



            <div className={styles.timelineContainer}>
                <VerticalTimeline layout="1-column" animate={true} className="vertical-timeline-custom-line">
                {timeline_events}
                </VerticalTimeline>
            </div>
            </InfoSec>
        </div>
    )
}

export default ApplyTimeline;