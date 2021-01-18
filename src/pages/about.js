import React from 'react'
import Layout from '../components/Layout/Layout'
import AboutBanner from '../components/AboutComponents/AboutBanner'
import AboutMission from '../components/AboutComponents/AboutMission'
import AboutImgBanner from '../components/AboutComponents/AboutImgBanner'
import AboutExperience from '../components/AboutComponents/AboutExperience'
import AboutBeyond from '../components/AboutComponents/AboutBeyond'

const About = () => {
    return (
        <div>
        <Layout light={true}>
            <AboutBanner/>
            <AboutMission/>
            <AboutExperience/>
            <AboutImgBanner/>
            <AboutBeyond/>
        </Layout>
        </div>
    )
}

export default About