import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/Layout/Layout'
import AboutBanner from '../components/AboutComponents/AboutBanner'
import AboutMission from '../components/AboutComponents/AboutMission'
import AboutImgBanner from '../components/AboutComponents/AboutImgBanner'
import AboutExperience from '../components/AboutComponents/AboutExperience'
import AboutBeyond from '../components/AboutComponents/AboutBeyond'
import AboutSponsors from '../components/AboutComponents/AboutSponsors'
import Members from '../components/Members/Members'

const About = () => {
    return (
        <div>
        <SEO title="About"/>
        <Layout light={false}>
            <AboutBanner/>
            <AboutMission/>
            <AboutExperience/>
            <AboutImgBanner/>
            <Members/>
            <AboutBeyond/>
            <AboutSponsors/>
        </Layout>
        </div>
    )
}

export default About
