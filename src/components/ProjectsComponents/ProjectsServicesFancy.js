import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import InfoSec from '../InfoSec/InfoSec'
import { Tabs } from 'antd'

import './ProjectsServicesFancy.css'

const { TabPane } = Tabs;

const ProjectsServices = () => {






    return (
        <div>
            <InfoSec background="gray" title="SERVICES" alignment="center">
            <Tabs 
            defaultActiveKey="1" 
            tabPosition="left" 
            size="large"
            centered="true"
            type="line"
            tabBarGutter={20}
            tabBarStyle={{color: "black", fontFamily: "Helvetica", fontWeight: "lighter"}}
            >
                <TabPane tab={`Corporate Strategy`} key="1" style={{fontFamily: "Helvetica", fontWeight: "lighter"}}>Hello</TabPane>
                <TabPane tab={`Financial Analysis`} key="2" style={{fontFamily: "Helvetica", fontWeight: "lighter"}}>Hello</TabPane>
                <TabPane tab={`Market Research`} key="3" style={{fontFamily: "Helvetica", fontWeight: "lighter"}}>Hello</TabPane>
                <TabPane tab={`Operations`} key="4" style={{fontFamily: "Helvetica", fontWeight: "lighter"}}>Hello</TabPane>
                <TabPane tab={`Product Development`} key="5" style={{fontFamily: "Helvetica", fontWeight: "lighter"}}>Hello</TabPane>
                <TabPane tab={`Sales & Marketing`} key="6" style={{fontFamily: "Helvetica", fontWeight: "lighter"}}>Hello</TabPane>



            </Tabs>
            </InfoSec>
        </div>
    )
}

export default ProjectsServices;