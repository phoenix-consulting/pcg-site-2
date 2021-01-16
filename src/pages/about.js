import React from 'react'
import Layout from '../components/Layout/Layout'
import AboutBanner from '../components/AboutComponents/AboutBanner'

const About = () => {
    return (
        <div>
        <Layout light={false}>
            <AboutBanner/>
        </Layout>
        </div>
    )
}

export default About