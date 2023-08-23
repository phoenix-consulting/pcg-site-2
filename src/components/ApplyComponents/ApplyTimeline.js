import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Container from 'react-bootstrap/Container'
import InfoSec from '../InfoSec/InfoSec'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import { recruitment_events, virtual_events_zoom_link } from '../../constants'
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
            <InfoSec background="gray" alignment="center" regtitle="Fall 2023 Recruitment Timeline" subtitle="All times are shown in PST." >
            {/* <div className={styles.timelineBigTitle}>Recruitment Timeline</div> */}
            <div className={styles.buttonContainer}>
                <Button className={styles.Button}
                href="https://forms.gle/JfKxLGaRbRMtic216">
                    Coffee Chat Us!</Button>
                <Button className={styles.Button} 
                href="https://forms.gle/BBKXcDf7idwPcqdQ8">
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