import React from 'react'
import Layout from '../components/Layout/Layout'
import AboutBanner from '../components/AboutComponents/AboutBanner'
import AboutMission from '../components/AboutComponents/AboutMission'
import AboutImgBanner from '../components/AboutComponents/AboutImgBanner'
import AboutExperience from '../components/AboutComponents/AboutExperience'
import AboutBeyond from '../components/AboutComponents/AboutBeyond'
import AboutSponsors from '../components/AboutComponents/AboutSponsors'

const About = () => {
    return (
        <div>
        <Layout light={false}>
            <AboutBanner/>
            <AboutMission/>
            <AboutExperience/>
            <AboutImgBanner/>
            <AboutBeyond/>
            <AboutSponsors/>
        </Layout>
        </div>
    )
}

export default About