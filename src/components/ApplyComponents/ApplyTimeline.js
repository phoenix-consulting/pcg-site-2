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
            <div className={styles.virtualBanner}>
                <Container>
                <h3 className={styles.virtualBannerText}>In accordance with Phoenix's values and work toward promoting the health
                    of our community, all of our indoor events will be held virtually. However, we are
                    putting on a outdoor networking session next Wednesday. Scroll down for more details!
                    And of course, we welcome you to chat with us at our table on lower Sproul.
                </h3>
                </Container>
            </div>
            <InfoSec background="gray" alignment="center" regtitle="Spring 2022 Recruitment Timeline" subtitle="All times are shown in PST." >
            {/* <div className={styles.timelineBigTitle}>Recruitment Timeline</div> */}
            <div className={styles.buttonContainer}>
                <Button className={styles.Button}
                href="https://docs.google.com/forms/d/e/1FAIpQLSf6kb6X-5S5LmttfMvlu2Q8Ri_FPxly8ipvasKhgsQ2HwFwJQ/viewform">
                    Coffee Chat Us!</Button>
                <Button className={styles.Button} 
                href="https://docs.google.com/forms/d/e/1FAIpQLSe5oXDM2dPMHRLdVmO9gjTEdb0iBD6GedQLki-qqyxyLRydRw/viewform">
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
