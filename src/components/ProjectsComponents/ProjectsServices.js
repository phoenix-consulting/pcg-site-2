import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import InfoSec from '../InfoSec/InfoSec'
import { Tabs } from 'antd'

const { TabPane } = Tabs;

const ProjectsServices = () => {
    return (
        <div>
            <InfoSec>
            <Tabs defaultActiveKey="1" tabPosition="left" style={{ height: 220, fontSize: "30px",fontFamily: "Helvetica", fontWeight: "lighter" }}>
                <TabPane tab={`Hello`} style={{fontFamily: "Helvetica", fontWeight: "lighter"}}>Hello</TabPane>
                <TabPane>Hello</TabPane>
                <TabPane>Hello</TabPane>
            </Tabs>
            </InfoSec>
        </div>
    )
}

export default ProjectsServices;