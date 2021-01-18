import React from 'react'
import { Steps } from 'antd'
import InfoSec from '../InfoSec/InfoSec'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { recruitment_events } from '../../constants'
import styles from './ApplyTimeline.module.css'

const { Step } = Steps;


const ApplyTimeline = () => {
    const first_timeline_events = recruitment_events.slice(0, 5).map((eventObj) => {
        return (
            <Step title={eventObj.event} subTitle={eventObj.dateTime} className={styles.step}/>
        )
    })

    const second_timeline_events = recruitment_events.slice(5, 10).map((eventObj) => {
        return (
            <Step title={eventObj.event} subTitle={eventObj.dateTime} className={styles.step}/>
        )
    })
    return (
        <div>
            <InfoSec title="RECRUITMENT TIMELINE" subtitle="All times shown are in PST." background="gray" >
            <Row>
                <Col>
                    <Steps direction="vertical" current={0} className={styles.steps} progressDot>
                    {first_timeline_events}
                    </Steps>
                </Col>
                <Col>
                    <Steps direction="vertical" initial={5} className={styles.steps} progressDot>
                    {second_timeline_events}
                    </Steps>
                </Col>
            </Row>
            </InfoSec>
        </div>
    )
}

export default ApplyTimeline;