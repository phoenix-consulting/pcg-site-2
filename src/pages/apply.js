import React from 'react'
import Layout from '../components/Layout/Layout'
import ApplyBanner from '../components/ApplyComponents/ApplyBanner'
import ApplyVideo from '../components/ApplyComponents/ApplyVideo'
import ApplyTimeline from '../components/ApplyComponents/ApplyTimeline'

const Apply = () => {
    return (
        <div>
        <Layout light={true}>
            <ApplyBanner/>
            <ApplyVideo/>
            <ApplyTimeline/>
        </Layout>
        </div>
    )
}

export default Apply;