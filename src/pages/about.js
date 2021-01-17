import React from 'react'
import Layout from '../components/Layout/Layout'
import AboutBanner from '../components/AboutComponents/AboutBanner'
import AboutMission from '../components/AboutComponents/AboutMission'
import AboutImgBanner from '../components/AboutComponents/AboutImgBanner'
import AboutExperience from '../components/AboutComponents/AboutExperience'

const About = () => {
    return (
        <div>
        <Layout light={false}>
            <AboutBanner/>
            <AboutMission/>
            <AboutExperience/>
            <AboutImgBanner/>
            
        </Layout>
        </div>
    )
}

export default About