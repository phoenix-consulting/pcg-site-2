import React from 'react'
import Layout from '../components/Layout/Layout'
import AboutBanner from '../components/AboutComponents/AboutBanner'
import AboutImgBanner from '../components/AboutComponents/AboutImgBanner'
import AboutExperience from '../components/AboutComponents/AboutExperience'

const About = () => {
    return (
        <div>
        <Layout light={false}>
            <AboutBanner/>
            <AboutImgBanner/>
            <AboutExperience/>
        </Layout>
        </div>
    )
}

export default About